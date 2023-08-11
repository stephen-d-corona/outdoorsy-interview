import { Rental } from "../types"

export const RentalCard = ({ rental }: { rental: Rental }) => {
    return (
        <div className="flex flex-row pb-6">
            <div className="w-1/4">
                <img className="rounded-md content-center max-h-36" src={rental.imageUrl} />

            </div>
            <div className="flex w-3/4 h-100 p-5 items-center">
                <div className="text-lg text-gray-500 font-medium">{rental.name}</div>
            </div>
        </div>
    )
}