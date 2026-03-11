import { useState, useEffect } from "react";
import DeleteIcon from '../assets/delete.png';

const EditNote = ({Notes,setNotes,setAddNote,Delete,setDelete}:any) => {

    const [Title, setTitle] = useState('');
    const [Body, setBody] = useState('');

    const update = ()=>{
        if(Title=="" && Body==""){
            setAddNote(false);
        }
        else if(Delete.index==-1){
            setNotes([...Notes,{"Title":Title,"Body":Body}])
            localStorage.setItem('Notes',JSON.stringify([...Notes,{"Title":Title,"Body":Body}]));
        }
        else{
            setTitle('');
            setBody('');
            Notes.splice(Delete.index,1,{"Title":Title,"Body":Body})
            setNotes(Notes);
            localStorage.setItem('Notes',JSON.stringify([...Notes,{"Title":Title,"Body":Body}]));
            setAddNote(false);
        }
        
    }

    const handleDelete = ()=>{
        setTitle('');
        setBody('');
        setDelete({"index":-1,"Title":"","Body":""});
        Notes.splice(Delete.index,1)
        setNotes(Notes);
        setAddNote(false);
        localStorage.setItem('Notes',JSON.stringify(Notes));
    }

    useEffect(() => {
        if(Delete.index!=-1){
            setTitle(Delete.Title);
            setBody(Delete.Body);
        }  
        console.log(Delete);
    }, [])
    


  return (
    <>
        <div className="p-3 border-1 border-slate-800 dark:border-white rounded mt-5" onMouseLeave={update}>
            {Delete.index!=-1&&<button className="text-slate-800 w-fit mx-auto h-fit dark:text-white font-bold rounded-full cursor-pointer float-end" onClick={()=>handleDelete()}>
                <img src={DeleteIcon} width={25} alt="Delete" />
            </button>}
            <div className="p-2 mx-auto border-1 border-sky-400 rounded mb-2" style={{marginTop:Delete.index!=-1?'40px':'16px'}}>
                <input className="text-slate-800 dark:text-white w-full outline-0 text-lg" type="text" name="Title" placeholder="Title" value={Title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="mt-4 p-2 mx-auto border-1 border-sky-400 rounded">
                <textarea className="text-slate-800 dark:text-white w-full outline-0 text-lg" name="Body" placeholder="Note" value={Body} onChange={(e)=>setBody(e.target.value)} />
            </div>
        </div>
    </>
  )
}

export default EditNote