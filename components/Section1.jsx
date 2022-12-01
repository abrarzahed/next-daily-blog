import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";

export default function Section1() {
  SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16 section-1" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper effect="fade" slidesPerView={1} autoplay={{ delay: 2000 }}>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function slide() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="image">
        <Link href="/">
          <Image
            src={"/images/img1.jpg"}
            width={600}
            height={600}
            alt="image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link href="/">
            <span className="text-orange-600">Business, Travel</span>
          </Link>
          <Link href="/">
            <span className="text-gray-600">- July 3 2022</span>
          </Link>
        </div>
        <div className="title mt-2">
          <Link href="/">
            <span className="text-3xl md:text-5xl  font-bold text-gray-800">
              Your most unhappy customers are your greatest source of learning
            </span>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde
          atque harum, quod ad veritatis consequuntur, est ducimus ipsa
          distinctio doloribus hic expedita culpa obcaecati eius iusto!
          Consequatur, at fuga.
        </p>
        <Author />
      </div>
    </div>
  );
}
