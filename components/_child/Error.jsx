import Image from "next/image";

export default function Error() {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold text-orange-600 py-10">
        Something went wrong
      </h2>
      <Image
        src={"/images/not_found.png"}
        width={400}
        height={400}
        alt="not found"
        className="inline-block"
      />
    </div>
  );
}
