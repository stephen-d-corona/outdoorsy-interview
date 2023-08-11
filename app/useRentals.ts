import axios from "axios"
import { useEffect, useState } from "react"
import { baseUrl } from "./constants"
import { Rental } from "./types"

export const useRentals = ({ keywords, limit, offset }:
    { keywords: string, limit: number, offset: number }
) => {
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<Rental[]>([])

    useEffect(() => {
        setLoading(true)
        setData([])
        axios.get<ResponseDto>(`${baseUrl}/rentals`, {
            params: {
                'filter[keywords]': keywords,
                'page[limit]': limit,
                'page[offset]': offset
            }
        })
            .then((response) => {
                // map response to a Rental
                const rentals = response.data.data.map((d) => ({
                    id: d.id,
                    name: d.attributes.name,
                    imageUrl: d.attributes.primary_image_url
                }))
                setData(rentals)
            })
            .catch(setError)
            .finally(() => {
                setLoading(false)
            })
    }, [keywords, limit, offset])

    return {
        data, loading, error
    }
}

interface ResponseDto {
    data: RentalDto[]
}

interface RentalDto {
    id: string,
    attributes: {
        name: string,
        primary_image_url: string
    }
}