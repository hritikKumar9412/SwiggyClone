import { GroceryGridCard } from "../Utils/Grocery"
import GroceryCard from "./Grocerycard"

export default function Groceryoption(){
     return (
        <div className="mt-15 w-[80%] container mx-auto ">
       <h1 className="font-semibold text-2xl flex font-serif px-3 py-0.5   " >Shop Groceries on Instamart</h1>
                <div className=" container mx-auto flex flex-nowrap overflow-x-auto mt-12 gap-4  ">
                    {
                        GroceryGridCard.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData} />
                    )
                    }
                </div>
            
        </div>
     )
}