const useGetUserData = () => {
  const userData = localStorage.getItem("userData");

  const userjsonData = userData ? JSON.parse(userData) : null;

  const userId = userjsonData?._id || 0;
  const accessToken = userjsonData?.accessToken || 0;

  return { userjsonData, userId, accessToken };
};

export default useGetUserData;
