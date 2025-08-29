import { fetchCatFacts, type CatFact } from "@/services/apiCat/route"
import { useQuery } from "@tanstack/react-query"

interface UseCatFactsOptions {
  page?: number
  limit?: number
  enabled?: boolean
}

export const useCatFacts = ({ page = 1, limit = 5, enabled = true }: UseCatFactsOptions = {}) => {
  return useQuery({
    queryKey: ["catFacts", page, limit],
    queryFn: () => fetchCatFacts(page, limit),
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  })
}

export type { CatFact }
