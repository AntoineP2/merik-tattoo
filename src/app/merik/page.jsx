"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function page() {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const fetchdata = async () => {
    try {
      setLoading(true)
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      setData(res.data)
      setLoading(false)
    }
    catch (err) {
      console.log(err)
    }
  }
 
  // game_indices => version => name
  useEffect(() => {
    fetchdata()
  }, [])

  console.log(data)

  return (
    <div>
      {loading && <p> Is loading....</p>}
      <div>
        {data && <p> Pokemon : {data.name} </p>}
        {data && data.game_indices.map((item, index) => <li key={index}>{item.version.name}</li>)}
      </div>
    </div>
  )
}
