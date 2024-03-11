import { useState } from "react"


function App() {
  const [result,setResult]=useState("")

  const handleClick = (e) => {
    setResult(result.concat(e.target.value))
  };
  const clearScreen=()=>{
    setResult("")
  }
  const calculate=()=>{
    setResult(eval(result).toString())
  }
  
  return (
    <>
      <h1 className="text-5xl  text-center mt-3 mb-5 font-bold text-white">Calculator</h1>
      <div className="p-4 rounded-lg bg-slate-700 w-50" >
        <input type="text" value={result}  className="bg-white text-right rounded-lg  text-3xl text-black h-20"/>
        
        <div className="pt-4 grid grid-cols-3  gap-4 rounded-lg bg-slate-700 text-white">
          
          <input type="button" value="9" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="8" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="7" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="6" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="5" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="4" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="3" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="2" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="1" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="0" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          
          
        </div>
        <div className="pt-4 grid grid-cols-3  gap-4 rounded-lg bg-slate-700 text-white">
        
          <button onClick={clearScreen} className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800">C</button>
          <input type="button" value="+" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="-" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="×" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          <input type="button" value="÷" className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800" onClick={handleClick}/>
          
          <button onClick={calculate} className="bg-black px-9 rounded-md text-2xl py-3 hover:bg-slate-800">=</button>
          
          </div>
        
      </div>
    </>
  )
}

export default App
