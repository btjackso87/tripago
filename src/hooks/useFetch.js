import { useState, useEffect, useRef } from 'react'


const useFetch = (url, _options) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const options = useRef( _options)


  useEffect(() => {
    
    console.log(options)

    const controller = new AbortController()

   const fetchData = async () => {
      setIsPending(true)

      try {
        const res = await fetch(url, {signal: controller.signal})

        if(!res.ok){
            throw new Error (res.statusTextx)
        }

        const json = await res.json()

        setIsPending(false)
        setData(json)
        setError(null)
      
      } catch (err) {
        if(err.name === "AbortError"){
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError('could not fetch the data')

        }

        
        console.log(err.message)
      }

      

    }

    fetchData()

    return () => {
        controller.abort()
    }

  }, [url, options])

  return {data, isPending, error}

}

export default useFetch