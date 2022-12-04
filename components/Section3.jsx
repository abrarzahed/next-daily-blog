import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// import fetcher from "../lib/fetcher";
// import Spinner from "./_child/Spinner";
// import Error from "./_child/Error";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";

export default function Section3() {
  // const { data, isLoading, isError } = fetcher("api/popular");

  // SwiperCore.use([Autoplay]);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  // if (isError) {
  //   return <Error />;
  // }

  return (
    <section className="container mx-auto md:px-20 py-16">
      <h2 className="font-bold text-4xl py-12 text-center">Most Popular</h2>

      {/* swiper */}
      {/* <Swiper
        spaceBetween={50}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((value) => (
          <SwiperSlide key={value.id}>
            <Post data={value} />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <h1>HI</h1>
    </section>
  );
}

function Post({ data }) {
  const { id, title, subtitle, category, img, published, author } = data;
  return (
    <div className="grid">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image src={img} width={590} height={400} alt="image" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4 pr-10">
        <div className="category">
          <Link href={`/posts/${id}`}>
            <span className="text-orange-600">{category}</span>
          </Link>
          <Link href={`/posts/${id}`}>
            <span className="text-gray-600">- {published}</span>
          </Link>
        </div>
        <div className="title mt-2">
          <Link href={`/posts/${id}`}>
            <span className="text-2xl font-bold text-gray-800 block">
              {title}
            </span>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle}</p>
        {author ? <Author {...author} /> : <></>}
      </div>
    </div>
  );
}
