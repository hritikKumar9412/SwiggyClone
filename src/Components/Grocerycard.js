export default function GroceryCard({foodData}){
console.log(foodData)
     const imageURL = foodData?.imageId
    ? "https://media-assets.swiggy.com/swiggy/image/upload/" + foodData.imageId
    : "https://via.placeholder.com/150";

    return(
        <div className="flex-none">
        <a href={foodData?.action?.link}>
        <img className="w-40 h-50 object-cover " src={imageURL} alt={foodData?.action?.link}></img>
        </a>
        <h2 className="text-1xl text-center font-serif text-black[02060CBF]">{foodData?.action?.text}</h2>
      
        </div>
  
    )
}                                      