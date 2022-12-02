import Image from "next/image";
import { useRouter } from "next/router";
import Author from "../../components/_child/Author";
import RelatedPost from "../../components/_child/RelatedPost";

export default function SinglePost() {
  const router = useRouter();

  return (
    <section className="container mx-auto md:px-2 py-16 w-1/2">
      <div className="flex justify-center">
        <Author />
      </div>
      <div className="post py-10">
        <h1 className="font-bold text-4xl text-center pb-5">
          Your most unhappy customers are your greatest source of learning
        </h1>
        <p className="text-center text-gray-500 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellat
          ab esse ullam eaque nobis?
        </p>
        <div className="py-10">
          <Image
            src={"/images/img2.jpg"}
            width={900}
            height={600}
            alt="post image"
          />
        </div>
        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            necessitatibus provident repellendus nemo tempore amet eius iusto
            corporis esse quo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            necessitatibus provident repellendus nemo tempore amet eius iusto
            corporis esse quo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            necessitatibus provident repellendus nemo tempore amet eius iusto
            corporis esse quo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            necessitatibus provident repellendus nemo tempore amet eius iusto
            corporis esse quo?
          </p>
        </div>
        <RelatedPost />
      </div>
    </section>
  );
}
