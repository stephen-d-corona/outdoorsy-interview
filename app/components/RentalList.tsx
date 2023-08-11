import { Rental } from "../types";
import { RentalCard, RentalCardSkeleton } from "./RentalCard";

export const RentalList = ({ rentals, loading, error }: { rentals: Rental[], loading: boolean, error: any }) => {
    if (error)
        return <div className="text-lg text-gray-500 font-medium">Oops, looks like we took a wrong turn.</div>

    if (!loading && rentals.length == 0)
        return <div className="text-lg text-gray-500 font-medium">No matches found, try something else.</div>

    return <ul>
        {
            loading
                ? [...new Array(10)].map(() => (<RentalCardSkeleton />))
                : rentals.map((r) => (<RentalCard rental={r} />))
        }
    </ul>
} 