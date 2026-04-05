export default function DineoutCard({ RestData }) {
  return (
    <div className="max-w-sm flex-none">
      <a target="_blank" href={RestData?.cta?.link}>
        <div className="relative">
          <img
            className="w-80 h-[200px] object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles?.[0]?.url
            }
            alt="Restaurant"
          />

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>

          <p className="absolute bottom-4 left-4 text-xl text-white font-semibold">
            {RestData?.info?.name}
          </p>

          <p className="absolute bottom-4 right-4 text-xl text-white font-semibold">
            {RestData?.info?.rating?.value}
          </p>
        </div>
      </a>
    </div>
  );
}