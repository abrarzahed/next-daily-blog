import Image from "next/image";
import Link from "next/link";
import Author from "./Author";

export default function RelatedPost() {
  return (
    <section className="pt-20">
      <h2 className="font-bold mb-5 text-2xl">Related</h2>
      <div className="flex flex-col gap-10">
        {post()}
        {post()}
        {post()}
        {post()}
        {post()}
      </div>
    </section>
  );
}

function post() {
  return (
    <div className="flex gap-5">
      <Link href="/">
        <Image
          src={"/images/img2.jpg"}
          width={300}
          height={350}
          alt="image"
          className="rounded"
        />
      </Link>
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
