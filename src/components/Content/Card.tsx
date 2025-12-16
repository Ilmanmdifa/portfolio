import emptyThumbnail from "../../assets/images/content/empty-thumbnail.png";
const Card = () => {
  return (
    <div className="relative cursor-pointer group">
      {/* Blur content */}
      <div className="flex flex-col gap-3 transition-all duration-200 group-hover:blur-sm">
        {/* Image */}
        <img
          src={emptyThumbnail}
          alt="empty thumbnail"
          className="rounded-2xl"
        />

        {/* Tags */}
        <div className="flex gap-2">
          <div className="p-2 rounded-2xl bg-gray-200 text-gray-500 font-semibold text-sm">
            Product Design
          </div>
          <div className="p-2 rounded-2xl bg-gray-200 text-gray-500 font-semibold text-sm">
            Mobile
          </div>
          <div className="p-2 rounded-2xl bg-gray-200 text-gray-500 font-semibold text-sm">
            Design System
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <h3 className="text-white text-xl font-semibold">App Name</h3>
        <button className="px-4 py-2 rounded-2xl bg-white text-black text-sm font-semibold">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
