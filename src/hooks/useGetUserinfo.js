export const useGetUserinfo = () => {
   const {name , profilePhoto ,userID ,isAuth } =JSON.parse(localStorage.getItem("auth")) ||{};

  return {name , profilePhoto ,userID ,isAuth};
 };

// export default useGetUserinfo


// import { useState, useEffect } from "react";

// export const useGetUserinfo = () => {
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     profilePhoto: "",
//     userID: "",
//     isAuth: false,
//   });

//   useEffect(() => {
//     const storedInfo = JSON.parse(localStorage.getItem("auth"));
//     if (storedInfo) {
//       setUserInfo(storedInfo);
//     }
//   }, []);

//   return userInfo;
// };
