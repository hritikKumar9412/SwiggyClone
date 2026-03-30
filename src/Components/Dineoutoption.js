
import { dineoutRestaurants } from "../Utils/DineoutRestaurant"
import DineoutCard from "./DineoutCard"
export default function Dineoutoption(){
        return(
                <div className="mt-10 w-[80%]  container mx-auto  mb-20">
                            <h1 className="font-semibold text-2xl flex font-serif px-3 py-0.5  ">Discover best restaurants on Dineout </h1>
                        <div className=" container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-4 ">
                              
                            {
                                dineoutRestaurants.map((RestData)=><DineoutCard key={RestData?.info?.id} RestData={RestData}></DineoutCard>)
                            }
                        </div>
                        </div>
        )
}