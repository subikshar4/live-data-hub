const LoadingSkeleton = () => {
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      {/* Main Card Skeleton */}
      <div className="glass-strong rounded-3xl p-8 md:p-12 shadow-elevated mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-4">
            <div className="h-8 w-40 shimmer rounded-lg" />
            <div className="h-5 w-24 shimmer rounded-lg" />
            <div className="h-20 w-32 shimmer rounded-lg mt-4" />
            <div className="h-5 w-36 shimmer rounded-lg" />
          </div>
          <div className="text-center space-y-4">
            <div className="h-24 w-24 shimmer rounded-full mx-auto" />
            <div className="h-6 w-28 shimmer rounded-lg mx-auto" />
            <div className="h-4 w-36 shimmer rounded-lg mx-auto" />
          </div>
        </div>
      </div>

      {/* Detail Cards Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass rounded-2xl p-5 shadow-card">
            <div className="h-6 w-6 shimmer rounded-full mx-auto mb-3" />
            <div className="h-4 w-16 shimmer rounded mx-auto mb-2" />
            <div className="h-6 w-20 shimmer rounded mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
