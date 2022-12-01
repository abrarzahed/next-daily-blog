import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
export default function Section3() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h2 className="font-bold text-4xl py-12 text-center">Most Popular</h2>

      {/* swiper */}
      <Swiper spaceBetween={50} slidesPerView={2} autoplay={{ delay: 2000 }}>
        <SwiperSlide>{post()}</SwiperSlide>
        <SwiperSlide>{post()}</SwiperSlide>
        <SwiperSlide>{post()}</SwiperSlide>
        <SwiperSlide>{post()}</SwiperSlide>
        <SwiperSlide>{post()}</SwiperSlide>
      </Swiper>
    </section>
  );
}

function post() {
  return (
    <div className="grid">
      <div className="image">
        <Link href="/">
          <Image
            src={"/images/img1.jpg"}
            width={590}
            height={400}
            alt="image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4 pr-10">
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
            <span className="text-2xl font-bold text-gray-800 block">
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
