'use client'

import { useRentals } from './useRentals'
import { SearchBar } from './components/SearchBar'
import { useState } from 'react'
import { RentalList } from './components/RentalList'

export default function Home() {
  const [keyword, setKeyword] = useState("")
  const { data, loading, error } = useRentals({
    keywords: keyword,
    limit: 10,
    offset: 0
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 w-100">
      <div className="max-w-lg w-full">
        <div className="py-5">
          <SearchBar onChange={(v) => {
            setKeyword(v)
          }} />
        </div>
        <RentalList rentals={data} loading={loading} error={error} />
      </div>
    </main>
  )
}
