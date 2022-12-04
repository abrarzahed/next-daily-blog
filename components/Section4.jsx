import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

import fetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import Error from "./_child/Error";

export default function Section4() {
  const { data, isLoading, isError } = fetcher("api/popular");

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="item">
          <h2 className="font-bold text-3xl py-12">Business</h2>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {data[0] ? <Post data={data[0]} /> : <></>}
            {data[2] ? <Post data={data[2]} /> : <></>}
            {data[1] ? <Post data={data[1]} /> : <></>}
          </div>
        </div>
        <div className="item">
          <h2 className="font-bold text-3xl py-12">Travel</h2>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {data[3] ? <Post data={data[3]} /> : <></>}
            {data[4] ? <Post data={data[4]} /> : <></>}
            {data[2] ? <Post data={data[2]} /> : <></>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, subtitle, category, img, published, author } = data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <Image
            src={img}
            width={300}
            height={350}
            alt="image"
            className="rounded"
          />
        </Link>
      </div>
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
