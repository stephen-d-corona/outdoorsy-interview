import { Rental } from "../types";
import { RentalCard } from "./RentalCard";

export const RentalList = ({ rentals }: { rentals: Rental[] }) => {
    return <ul>
        {rentals.map((r) => (<RentalCard rental={r} />))}
    </ul>
} 