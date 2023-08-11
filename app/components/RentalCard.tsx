import { Rental } from "../types"

export const RentalCard = ({ rental }: { rental: Rental }) => {
    return (
        <div className="flex flex-row pb-6">
            <div className="w-1/4">
                <img className="rounded-md content-center w-48 h-32 object-cover float-left" src={rental.imageUrl} />

            </div>
            <div className="flex w-3/4 h-100 p-3 items-center">
                <div className="text-lg text-gray-500 font-medium">{rental.name}</div>
            </div>
        </div>
    )
}

// ☠️☠️☠️☠️☠️
export const RentalCardSkeleton = () => {
    return (
        <div className="flex flex-row pb-6 w-full">
            <div className="w-48">
                <div className="rounded-md content-center w-48 h-32 bg-slate-200 animate-pulse"></div>
            </div>
            <div className="flex h-100 p-3 items-center w-full">
                <div className="bg-slate-200 w-full h-8 animate-pulse"></div>
            </div>
        </div>
    )
}