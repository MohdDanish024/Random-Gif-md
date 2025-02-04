import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';

// const RandomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


export default function UseGif(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState('false');

 
 
  async function fetchData(tag){
  setLoading(true);

  const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
  const imageSource = data.data.images.downsized_large.url;
  setGif(imageSource);
  setLoading(false);
 }

 useEffect( ()=>{
  fetchData('car');
 },[] )

 return {gif,loading, fetchData};

}