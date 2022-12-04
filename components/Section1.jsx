import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

// import fetcher from "../lib/fetcher";
// import Spinner from "./_child/Spinner";
// import Error from "./_child/Error";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";

export default function Section1() {
  // const { data, isLoading, isError } = fetcher("api/trending");

  // SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }
  // if (isError) {
  //   return <Error />;
  // }
  return (
    <section className="py-16 section-1" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {/* <Swiper slidesPerView={1} autoplay={{ delay: 2000 }}>
          {data.map((value) => (
            <SwiperSlide key={value.id}>
              <Slide data={value} />
            </SwiperSlide>
          ))}
        </Swiper> */}
        <h1>HI</h1>
      </div>
    </section>
  );
}

function Slide({ data }) {
  const { id, title, subtitle, category, img, published, author } = data;
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image src={img} width={600} height={600} alt="image" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            <span className="text-3xl md:text-5xl  font-bold text-gray-800">
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
