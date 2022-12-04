import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
// import fetcher from "../lib/fetcher";
// import Spinner from "./_child/Spinner";
// import Error from "./_child/Error";

export default function Section2() {
  // const { data, isLoading, isError } = fetcher("api/posts");
  // if (isLoading) {
  //   return <Spinner />;
  // }
  // if (isError) {
  //   return <Error />;
  // }
  return (
    <section className="container mx-auto md:px-20 py-20">
      <h2 className="font-bold text-4xl py-12 text-center">Latest Posts</h2>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* {data && data.map((value) => <Post data={value} key={value.id} />)} */}
        <h1>HI</h1>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, subtitle, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="image">
        <Link href="/">
          <Image
            src={img}
            width={500}
            height={300}
            alt="image"
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="category">
          <Link href={`/posts/${id}`}>
            <span className="text-orange-600">{category}</span>
          </Link>
          <Link href={`/posts/${id}`}>
            <span className="text-gray-600"> - {published}</span>
          </Link>
        </div>
        <div className="title mt-2">
          <Link href={`/posts/${id}`}>
            <span className="text-xl font-bold text-gray-800">{title}</span>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle}</p>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  );
}
