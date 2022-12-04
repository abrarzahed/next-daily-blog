import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import fetcher from "../../lib/fetcher";
import Error from "./Error";
import Spinner from "./Spinner";

export default function RelatedPost() {
  const { data, isLoading, isError } = fetcher("api/posts");

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className="pt-20">
      <h2 className="font-bold mb-5 text-2xl">Related</h2>
      <div className="flex flex-col gap-10">
        {data.map((value) => (
          <Post {...value} key={value.id} />
        ))}
      </div>
    </section>
  );
}

function Post({ id, title, subtitle, category, img, published, author }) {
  return (
    <div className="flex gap-5">
      <Link href={`/posts/${id}`}>
        <Image
          src={img}
          width={300}
          height={350}
          alt="image"
          className="rounded"
        />
      </Link>
      <div className="info flex flex-col justify-center">
        <div className="category">
          <Link href={`/posts/${id}`}>
            <span className="text-orange-600">{category}</span>
          </Link>
          <Link href={`/posts/${id}`}>
            <span className="text-gray-600">- {published}</span>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <span className="text-xl font-bold text-gray-800 block">
              {title}
            </span>
          </Link>
        </div>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  );
}
