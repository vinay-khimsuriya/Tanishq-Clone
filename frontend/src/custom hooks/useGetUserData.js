const useGetUserData = () => {
  const userData = localStorage.getItem("userData");

  const userjsonData = userData ? JSON.parse(userData) : null;

  const userId = userjsonData?._id || 0;

  return { userjsonData, userId };
};

export default useGetUserData;
