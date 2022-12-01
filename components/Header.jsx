import { ImFacebook2, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input className="input-text" type="text" placeholder="search" />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href="/">
            <span className="font-bold uppercase text-3xl">Design</span>
          </Link>
        </div>
        <div className="flex w-96 order-3 gap-6 justify-center">
          <a>
            <ImFacebook2 color="#888" />
          </a>
          <a>
            <ImTwitter color="#888" />
          </a>
          <a>
            <ImYoutube color="#888" />
          </a>
        </div>
      </div>
    </header>
  );
}
