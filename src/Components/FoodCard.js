export default function FoodCard({ foodData }) {
  return (
    <div className="flex flex-none">
      <a href={foodData?.action?.link}>
        <img
          className="w-40 h-[200px] object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            foodData?.imageId
          }
        />
      </a>
    </div>
  );
}