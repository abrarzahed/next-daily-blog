import Image from "next/image";
import { useRouter } from "next/router";
import Author from "../../components/_child/Author";
import RelatedPost from "../../components/_child/RelatedPost";

// import fetcher from "../../lib/fetcher";
// import Spinner from "../../components/_child/Spinner";
// import Error from "../../components/_child/Error";

export default function SinglePost() {
  const router = useRouter();
  const { id } = router.query;
  // const { data, isLoading, isError } = fetcher(`api/posts/${id}`);
  // if (isLoading) {
  //   return <Spinner />;
  // }
  // if (isError) {
  //   return <Error />;
  // }
  // return <Article {...data} />;
  return <h1>HI</h1>;
}

export function Article({
  id,
  title,
  subtitle,
  category,
  img,
  published,
  author,
  description,
}) {
  return (
    <section className="container mx-auto md:px-2 py-16 w-1/2">
      <div className="flex justify-center">
        {author ? <Author {...author} /> : <></>}
      </div>
      <div className="post py-10">
        <h1 className="font-bold text-4xl text-center pb-5">{title}</h1>
        <p className="text-center text-gray-500 text-xl">{subtitle}</p>
        <div className="py-10">
          <Image
            src={img || "/images/img1.jpg"}
            width={900}
            height={600}
            alt="post image"
          />
        </div>
        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          {description}
        </div>
        <RelatedPost />
      </div>
    </section>
  );
}

// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://localhost:3000/api/posts/`);
//   const posts = await res.json();
//   const data = posts.find((value) => value.id == params.id);
//   return {
//     props: data,
//   };
// }

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/posts/`);
//   const posts = await res.json();

//   const paths = posts.map((post) => {
//     return {
//       params: {
//         id: String(post.id),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
