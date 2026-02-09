import { Skeleton } from "@/components/ui/skeleton";

const CenterCardSkeleton = () => {
  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow-sm">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <Skeleton className="h-5 w-24 rounded-md" />
          <Skeleton className="h-4 w-32 rounded-md" />
        </div>

        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>

      {/* Edit */}
      <Skeleton className="mt-4 h-4 w-10 rounded-md" />

      {/* View Data Button */}
      <Skeleton className="mt-6 h-12 w-full rounded-full" />
    </div>
  );
};

export default CenterCardSkeleton;
