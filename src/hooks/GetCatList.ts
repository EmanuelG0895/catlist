import getCats from "@/app/services/apiCat/route";
import { useEffect, useState } from "react";

interface Cat {
  fact: string;
  length: number;
}

const useFetchCats = () => {
  const [catList, setCatList] = useState<Cat[]>([]);
  useEffect(() => {
    fetchCats();
  }, []);
  const fetchCats = async () => {
    const gatos = await getCats();
    setCatList(gatos.data);
  };
  return catList;
};
export default useFetchCats;
