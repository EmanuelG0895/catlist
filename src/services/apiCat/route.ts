interface CatFact {
  fact: string;
  length: number;
}

interface CatFactsResponse {
  data: CatFact[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export const fetchCatFacts = async (
  page = 1,
  limit = 5
): Promise<CatFactsResponse> => {
  const response = await fetch(
    `https://catfact.ninja/facts?limit=${limit}&page=${page}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch cat facts: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
};

export type { CatFact, CatFactsResponse };
