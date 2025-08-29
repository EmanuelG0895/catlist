import { fetchCatFacts, type CatFact } from "@/services/apiCat/route";
import { fetchRandomUsers, type RandomUser } from "@/services/apiUsers/route";
import { useInfiniteQuery } from "@tanstack/react-query";

interface CombinedData {
  fact: CatFact;
  user: RandomUser;
  id: string;
}

interface CombinedPageData {
  data: CombinedData[];
  nextPage: number | null;
}

const fetchCombinedData = async ({
  pageParam = 0,
}): Promise<CombinedPageData> => {
  const limit = 5;
  const page = pageParam + 1;

  const [catFactsData, usersData] = await Promise.all([
    fetchCatFacts(page, limit),
    fetchRandomUsers(limit, pageParam),
  ]);

  const combinedData: CombinedData[] = catFactsData.data.map(
    (fact: CatFact, index: number) => ({
      fact,
      user: usersData.results[index],
      id: `${pageParam}-${index}`,
    })
  );

  return {
    data: combinedData,
    nextPage:
      catFactsData.current_page < catFactsData.last_page ? pageParam + 1 : null,
  };
};

export const useCombinedCatFactsAndUsers = () => {
  return useInfiniteQuery({
    queryKey: ["combinedCatFactsAndUsers"],
    queryFn: fetchCombinedData,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

export type { CombinedData };
