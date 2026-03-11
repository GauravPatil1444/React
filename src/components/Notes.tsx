import { useState,useEffect } from "react";
import EditNote from './EditNote';
import Search from './Search';

function Notes() {

    const [Notes, setNotes] = useState<any>([]);
    const [AddNote, setAddNote] = useState(false);
    const [Delete, setDelete] = useState({"index":-1,"Title":"","Body":""});
    const [search, setsearch] = useState(false);
    
    useEffect(() => {
      setAddNote(false);
      setDelete({"index":-1,"Title":"","Body":""});
    }, [Notes])
    
    useEffect(() => {
        const Notes:any = localStorage.getItem('Notes');
        if (Notes != null){
            setNotes(JSON.parse(Notes));
        }
        console.log(Delete);
        
    }, [])

    const NoteClick = (i:number,Title:string,Body:string)=>{
        setDelete({"index":i,"Title":Title,"Body":Body})
        setAddNote(true);
    }
    
    return (
    <>
        <div className="md:p-2 p-4 container pt-4 max-w-xl max-h-[80vh] overflow-y-scroll relative mx-auto">
            <Search setAddNote={setAddNote} Notes={Notes} setNotes={setNotes} setsearch={setsearch}/>
            {AddNote?
                <EditNote Notes={Notes} setNotes={setNotes} setAddNote={setAddNote} Delete={Delete} setDelete={setDelete} search={search}/>
                :
                <div className="mt-5 flex flex-wrap gap-2">
                    {Notes.map((Note:any,i:number)=>(
                        <div key={i} className="p-2 flex-1 w-fit min-w-[30%] max-w-[65%] border-1 border-slate-800 dark:border-white rounded cursor-pointer" onClick={()=>NoteClick(i,Note.Title,Note.Body)}>
                            <p  className='text-slate-800 dark:text-white font-medium'>{Note.Title}</p>
                            <p  className='text-slate-800 dark:text-white'>{Note.Body}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    </>
  )
}

export default Notes