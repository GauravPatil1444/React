import Add from '../assets/plus.png'
import { useState, useEffect } from 'react';

function Search({ setAddNote, Notes, setNotes }: any) {

  const [searchInput, setsearchInput] = useState('');

  let timeout: any;

  const search = (value: string) => {
    setsearchInput(value);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const searchResults = Notes.filter((Note: any) => {
        return Note.Title.toLowerCase().includes(value.toLowerCase()) || Note.Body.toLowerCase().includes(value.toLowerCase());
      })
      console.log(searchResults);
      setNotes(searchResults);
    }, 1000);

  };

  useEffect(() => {
    if (Notes.length == 0) {
      const Notes: any = localStorage.getItem('Notes');
      setNotes(JSON.parse(Notes))
    }
  }, [Notes])

  useEffect(() => {
    console.log(searchInput);
    
    setTimeout(()=>{
      if (searchInput.length == 0) {
        const Notes: any = localStorage.getItem('Notes');
        setNotes(JSON.parse(Notes))
      }
      console.log(searchInput);
    },1000)
    
  }, [searchInput])



  return (
    <>
      <div className="mt-5 max-w-xl grid grid-rows-1 md:grid-cols-6  grid-cols-4">

        <div className="p-2 mx-auto w-full md:col-span-5 col-span-3 me-2 border-1 border-sky-400 rounded">
          <input className="text-slate-800 dark:text-white w-full outline-0 text-lg" type="text" name="search" placeholder="Search Notes" value={searchInput} onChange={(e) => search(e.target.value)} />
        </div>
        <button className="text-slate-800 w-fit mx-auto h-fit dark:text-white font-bold p-3 bg-sky-400 rounded-full cursor-pointer " onClick={() => setAddNote(true)}>
          <img src={Add} width={20} alt="Add" />
        </button>
        
      </div>

    </>
  )
}

export default Search