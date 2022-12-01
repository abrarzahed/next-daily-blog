import Image from "next/image";
import Link from "next/link";

export default function Author() {
  return (
    <div className="author flex py-5">
      <Image
        src={"/images/author/author1.jpg"}
        className="rounded-full"
        width={60}
        height={60}
        alt="author"
      />
      <div className="flex flex-col justify-center px-4">
        <Link href="/">
          <span className="text-md font-bold text-gray-800">Flying High</span>
        </Link>
        <span className="text-sm text-gray-500">CEO and Founder</span>
      </div>
    </div>
  );
}
