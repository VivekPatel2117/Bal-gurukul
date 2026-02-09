import CenterCardSkeleton from "./CenterCardSkeleton";

const CenterCardSkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <CenterCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default CenterCardSkeletonGrid;
