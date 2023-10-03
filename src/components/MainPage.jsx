import React, { useState } from 'react'
import axios from 'axios'
export default function MainPage() {
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState()
  const handleInput = (event) => {
    console.log(event)
    setInput(event)
  }
  const fetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: input,
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '8da1028450msh4d6dd10347ee238p1c22cejsn34a548e0654a',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
    try {
      const response = await axios.request(options);
      setSearchResults(response.data.items)
    } catch (error) {
        console.error(error);
    }
}
  return (
    <div>
        <div>
      <input type="text" onChange={(event) => handleInput(event.target.value)}/>
      <button onClick={fetchData}>Click</button>
    </div>
    <div>
        {searchResults.map(elem => <><img src={elem.snippet.thumbnails.medium.url}/></>)}
    </div>
    </div>
  )
}
