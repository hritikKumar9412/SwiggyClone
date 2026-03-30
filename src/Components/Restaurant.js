import { useEffect, useState } from "react";
import RestCard from "./RestCard";
export default function Restaurant(){
     const [RestData,setRestData]=useState([]);
   useEffect(()=>{
   
    async function fetchData() {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyApi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true";
        const resp= await fetch(proxyServer+swiggyApi);
        const data = await resp.json();
        setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    fetchData();
   },[])
//    console.log(RestData);
   return(
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
        {
            RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
        }

    </div>
   )
}