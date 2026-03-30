import { imageGridCards } from "../Utils/FoodData"
import FoodCard from "./FoodCard"
export default function FoodOption(){
    return(
        <div className="mt-10 w-[80%]  container mx-auto ">
            <h1 className="font-semibold text-2xl flex font-serif px-3 py-0.5  ">Order our best food options</h1>
        <div className=" container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-4 ">
              
            {
                imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
            }
        </div>
        </div>
    )
}