import getUsers from "@/app/services/apiUsers/route";
import { useEffect, useState } from "react";

const useFetchUsers = () => {
  const [userList, setUserList] = useState();
  useEffect(() => {
    fetchCats();
  }, []);
  const fetchCats = async () => {
    const users = await getUsers();
    setUserList(users.data);
  };
  return userList;
};
export default useFetchUsers;
