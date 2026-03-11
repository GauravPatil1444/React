import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import { useEffect } from "react";

const App = () => {
  
  useEffect(() => {
    const theme:any = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme',theme);
  }, [])
  

    return (
    <>
    <Navbar/>
    <Notes/>
    </>
  )
}

export default App