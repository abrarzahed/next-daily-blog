import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

export default function Section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="item">
          <h2 className="font-bold text-3xl py-12">Business</h2>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {post()}
            {post()}
            {post()}
          </div>
        </div>
        <div className="item">
          <h2 className="font-bold text-3xl py-12">Travel</h2>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {post()}
            {post()}
            {post()}
          </div>
        </div>
      </div>
    </section>
  );
}

function post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href="/">
          <Image
            src={"/images/img1.jpg"}
            width={300}
            height={350}
            alt="image"
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
        <div className="category">
          <Link href="/">
            <span className="text-orange-600">Business, Travel</span>
          </Link>
          <Link href="/">
            <span className="text-gray-600">- July 3 2022</span>
          </Link>
        </div>
        <div className="title">
          <Link href="/">
            <span className="text-xl font-bold text-gray-800 block">
              Your most unhappy customers are your greatest source of learning
            </span>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
