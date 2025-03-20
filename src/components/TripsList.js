import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

//styles
import "./TripsList.css"


export default function TripsList() {

  const [url, setUrl] = useState("http://localhost:3000/trips")
  const {data: trips, isPending, error} = useFetch(url, {type: 'GET'})

  

  console.log(trips)
  
    
  return (
    <div className='trip-list'>
        <h2>Trip List</h2> 
        {isPending && <div>Loading trips ...</div>}
        {error && <div>Unable to load files</div>}
        <ul>
          {trips && trips.map((trip) => (
            <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
            </li>
          ))}
        </ul>
        <div className='filters'>
          <button onClick={() => {setUrl("http://localhost:3000/trips?loc=europe")}}>
            European Trips
          </button>
          <button onClick={() => {setUrl("http://localhost:3000/trips")}}>
            All Trips
          </button>

        </div>
    </div>
  )
}
