import { fetchRandomUsers, type RandomUser } from "@/services/apiUsers/route";
import { useQuery } from "@tanstack/react-query";

interface UseRandomUsersOptions {
  count?: number;
  seed?: string | number;
  enabled?: boolean;
}

export const useRandomUsers = ({
  count = 5,
  seed,
  enabled = true,
}: UseRandomUsersOptions = {}) => {
  return useQuery({
    queryKey: ["randomUsers", count, seed],
    queryFn: () => fetchRandomUsers(count, seed),
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

export type { RandomUser };
