import useSWR, { SWRConfig } from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("User not found");
  return response.json();
};

const useGithubUser = (username) => {
  const { data: user, error, isLoading, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return { user, error, isLoading, refetch: mutate };
};

export default useGithubUser;
