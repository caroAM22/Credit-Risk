const LoadingSpinner = () => {
    return (
      <div className="flex flex-col justify-center items-center my-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
        <p className="mt-4 text-sm text-gray-600">Esto puede tardar unos minutos...</p>
      </div>
    )
  }
  
  export default LoadingSpinner
  
  