import axios from "axios";
interface UsersApiResponse {
  info: [];
  results: [];
}

const getUsers = async (): Promise<UsersApiResponse> => {
  const response = await axios.get("https://randomuser.me/api");
  console.log("desde la solicitud", response.data);
  return response.data;
};

export default getUsers;
