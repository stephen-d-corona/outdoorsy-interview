import { Rental } from "../types";
import { RentalCard, RentalCardSkeleton } from "./RentalCard";

export const RentalList = ({ rentals, loading }: { rentals: Rental[], loading: boolean }) => {
    return <ul>
        {
            loading
                ? [...new Array(10)].map(() => (<RentalCardSkeleton />))
                : rentals.map((r) => (<RentalCard rental={r} />))
        }
    </ul>
} 