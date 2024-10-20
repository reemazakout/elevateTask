export default function CardSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md animate-pulse">
      <div className="w-full">
        <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
        <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-md mb-1 w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded-md w-1/3"></div>
      </div>
    </div>
  );
}
