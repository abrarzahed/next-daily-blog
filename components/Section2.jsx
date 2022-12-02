import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import getPosts from "../lib/helper";

export default function Section2() {
  getPosts().then((data) => console.log(data));
  return (
    <section className="container mx-auto md:px-20 py-20">
      <h2 className="font-bold text-4xl py-12 text-center">Latest Posts</h2>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {post()}
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
    <div className="item">
      <div className="image">
        <Link href="/">
          <Image
            src={"/images/img1.jpg"}
            width={500}
            height={300}
            alt="image"
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
            <span className="text-xl font-bold text-gray-800">
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
