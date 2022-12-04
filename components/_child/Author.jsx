import Image from "next/image";
import Link from "next/link";

export default function Author({ name, img, designation }) {
  if (!name && !img) return <></>;
  return (
    <div className="author flex py-5">
      <Image
        src={img}
        className="rounded-full"
        width={60}
        height={60}
        alt="author"
      />
      <div className="flex flex-col justify-center px-4">
        <Link href="/">
          <span className="text-md font-bold text-gray-800">{name}</span>
        </Link>
        <span className="text-sm text-gray-500">{designation}</span>
      </div>
    </div>
  );
}
