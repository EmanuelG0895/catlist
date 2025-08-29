import axios from "axios";
interface Cat {
  fact: string;
  length: number;
}

interface CatApiResponse {
  current_page: number;
  data: Cat[];
}

const getCats = async (): Promise<CatApiResponse> => {
  const response = await axios.get("https://catfact.ninja/facts");
  return response.data;
};

export default getCats;
