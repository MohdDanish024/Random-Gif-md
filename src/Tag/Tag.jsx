import React, { useState } from 'react'
import Spinner from '../Spinner/Spinner';
import UseGif from '../hooks/UseGif';

// const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';
export default function Tag() {
  
  const [tag, setTag] = useState("car");
  const {gif,loading,fetchData} = UseGif(tag);
//   const [gif, setGif] = useState("");
//   const [loading, setLoading] = useState('false');

//  async function fetchData(){
//   setLoading(true);
//   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//   const {data} = await axios.get(url);
//   const imageSource = data.data.images.downsized_large.url;
//   setGif(imageSource);
//   setLoading(false);
//  }

//  useEffect( ()=>{
//   fetchData();
//  },[] )


  function clickHandler(){
   fetchData(tag);
  }

  function changeHandler(event){
    setTag(event.target.value)
  }
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} alt="" width="450"/>)

      }

      <input className='w-10/12 text-lg  py-2 rounded-lg mt-[20px] mb-0 text-center' onChange={changeHandler} value={tag}></input>
   
      <button className='w-10/12 bg-white text-lg  py-2 rounded-lg mb-[20px]' onClick={clickHandler}>Generate</button>
    </div>
  )
}
