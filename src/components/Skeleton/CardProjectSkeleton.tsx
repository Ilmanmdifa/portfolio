const CardSkeleton = () => {
  return (
    <div className="relative cursor-pointer group">
      {/* Blur content */}
      <div className="flex flex-col gap-3 transition-all duration-200 group-hover:blur-sm">
        {/* Image */}
        <div className="w-[200px] h-[200px] rounded-2xl animate-pulse bg-gray-200" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <div className="p-2 rounded-2xl bg-gray-200 text-gray-500 font-semibold text-sm h-6 animate-pulse" />
          <div className="p-2 rounded-2xl bg-gray-200 text-gray-500 font-semibold text-sm h-6 animate-pulse" />
          <div className="p-2 rounded-2xl bg-gray-200 text-gray-500 font-semibold text-sm h-6 animate-pulse" />
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="h-10 bg-gray-200 animate-pulse" />
        <div className="px-4 py-2 rounded-2xl bg-gray-200 text-gray-500 font-semibold text-sm h-6 animate-pulse" />
      </div>
    </div>
  );
};

export default CardSkeleton;