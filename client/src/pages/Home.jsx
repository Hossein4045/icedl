import { useState } from 'react' 
import axios from 'axios';
import Result from "../components/Result"
import { VscGithub } from "react-icons/vsc";


export default function Home() {
  const [inputValue, setInputValue]=useState("")
  const [response, setResponse]=useState("")
  const [islodeing, setisLoading]=useState(false)

  function enterValue (p) {
  const newValue = p.target.value;
  setInputValue(newValue);
  }
  
  async function handelSubmit (e) {
    e.preventDefault();
    try{
      setisLoading(true)
      const data =await axios.post("http://localhost:3000/api/download",{url:inputValue},{headers:{"Content-Type": "application/json"},timeout:2000})
      setResponse(data.data)
      setisLoading(false)
      console.log(data.data);
      
  } catch (error) {
      console.error("Error:", error);
      setResponse("Error occurred while fetching data");
  }
  }
  return (

    <div className='font5 min-h-[100vh] h-[100%]'>
      <header className='flex w-full justify-between items-center h-18'>
        <h1 className='text-7xl p-4 font3 text-blue-900'>Ice<span className='text-red-500'>DL</span></h1>
        <a href="https://github.com/Hossein4045">
          <VscGithub className='mr-3 text-indigo-950 text-4xl' />
        </a>
      </header>
      <main className='text-center py-6 '>
        <div className='py-2  px-2'>
            <h3 className='text-4xl pb-2 font1 text-blue-950'>Instagram downloader <span className='px-2 rotate-45 bg-indigo-900 text-pink-600 rounded-xl text-2xl'>v1.0.0</span></h3>
            <p className='text-lg text-blue-950 font4'>Download Instagram photos, videos, and reels in HD quality. Fast, free, and easy to use. No registration required!</p>
            <p></p>
        </div>
        <form onSubmit={handelSubmit} className='flex justify-center gap-3 my-3 w-full py-2 '>
            <input required value={inputValue} onChange={enterValue} placeholder='Place the link here...' className='border bg-red-50 border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-[70%] ' type="text"/>
            <button  className=' w-20 h-10 text-xl font3 rounded-md bg-blue-900 text-white tracking-wider' type='submit'>Send</button>
        </form>

        <div className='grid justify-center w-full relative gap-0.5 md:grid-cols-2 lg:grid-cols-3 px-5 mb-10'>
          {response.data == "R" ? (
            islodeing?"":
            <p className="text-3xl col-end-3 text-center font-extrabold w-full text-red-600 border border-red-500 py-2">لینک نامعتبر</p>
          ) : response && response.data && Array.isArray(response.data) ? (
            response.data.map((r, index) => (
              <div key={index} className="cursor-pointer" >
                <Result url={r.url}  thumbnail={r.thumbnail} />
                {console.log(r.url)}
              </div>
            ))
          ) : (
            <p></p>
          )}
</div>
  {islodeing ?<span className=" loader"></span>:""}
      </main>
      <footer className='fixed bottom-0 bg-pink-50 w-full text-center py-1.5 '>
        <p className='text-xl font2 '>Made by Hossein Hassani</p>
      </footer>
    </div>
  )
}
