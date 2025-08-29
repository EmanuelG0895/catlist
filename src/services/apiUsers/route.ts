interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    city: string;
    country: string;
  };
  email: string;
}

interface RandomUsersResponse {
  results: RandomUser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export const fetchRandomUsers = async (
  count = 5,
  seed?: string | number
): Promise<RandomUsersResponse> => {
  const seedParam = seed !== undefined ? `&seed=${seed}` : "";
  const response = await fetch(
    `https://randomuser.me/api/?results=${count}${seedParam}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch random users: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
};

export type { RandomUser, RandomUsersResponse };
