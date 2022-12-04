import useSWR from "swr";

const baseURL = "https://next-daily-blog-4tm8.vercel.app/";

const response = (...args) => fetch(...args).then((res) => res.json());

export default function fetcher(endpoint) {
  const { data, error } = useSWR(`${baseURL}/${endpoint}`, response);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
