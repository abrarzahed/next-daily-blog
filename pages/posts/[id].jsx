import { useRouter } from "next/router";

export default function SinglePost() {
  const router = useRouter();

  return <div>{router.query.id}</div>;
}
