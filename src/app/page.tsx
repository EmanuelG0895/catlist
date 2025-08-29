"use client";

import { CatFactsList } from "@/components/cat-facts-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
    },
  },
});

export default function UserCard() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-200">
        <CatFactsList />
      </div>
    </QueryClientProvider>
  );
}
