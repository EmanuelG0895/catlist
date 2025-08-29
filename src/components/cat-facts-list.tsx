"use client";

import { useCombinedCatFactsAndUsers } from "@/hooks/useCombinedCatAndUsers";
import { useRef, useCallback } from "react";
import Skeleton from "./ui/skeleton";
import { CatFactCard } from "./UserCard";

export function CatFactsList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    refetch,
  } = useCombinedCatFactsAndUsers();

  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetchingNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div className="max-w-2xl mx-auto"></div>;
  }

  const allItems = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        {allItems.map((item, index) => (
          <div
            key={item.id}
            ref={index === allItems.length - 1 ? lastElementRef : null}
          >
            <CatFactCard fact={item.fact} user={item.user} />
          </div>
        ))}
      </div>

      {isFetchingNextPage && (
        <div className="mt-8 space-y-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={`loading-${index}`} />
          ))}
        </div>
      )}

      {!hasNextPage && allItems.length > 0 && (
        <div className="text-center mt-8 py-4">
          <p className="text-gray-500 dark:text-gray-400">
            Youve reached the end of the cat facts! 🐱
          </p>
        </div>
      )}
    </div>
  );
}
