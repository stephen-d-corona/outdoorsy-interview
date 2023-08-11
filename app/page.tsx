'use client'

import Image from 'next/image'
import { useRentals } from './useRentals'

export default function Home() {
  const { data, loading, error } = useRentals({
    keywords: 'trailer',
    limit: 1,
    offset: 8
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome home!</h1>
      <h3>data: {JSON.stringify(data)}</h3>
      <h3>loading: {loading.toString()}</h3>
      <h3>error: {JSON.stringify(error)}</h3>
    </main>
  )
}
