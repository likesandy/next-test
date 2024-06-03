'use client'

import { useEffect, useState } from 'react'

export default function Page() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (e) {
        setError(e.message)
      }
    }

    fetchData()
  }, [])

  if (error) {
    return <p>Error: {error}</p>
  }

  return <p>{data ? `Your data: ${JSON.stringify(data)}` : 'Loading...'}</p>
}
