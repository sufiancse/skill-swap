const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-gray-50">
      <div className="relative w-16 h-16">
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-full h-full border-4 border-dashed border-indigo-300 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;

