import { ImFacebook2, ImTwitter, ImYoutube } from "react-icons/im";
import Newsletter from "./_child/Newsletter";
export default function Footer() {
  const bg = {
    background: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
    backgroundSize: "400px",
  };
  return (
    <footer style={bg} className="bg-gray-50">
      <Newsletter />
      <div className="container mx-auto flex flex-col justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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
          <p className="py-5 text-center text-gray-400">
            | @Copyright 2022 All rights reserved |
          </p>
          <p className="text-center text-gray-400">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
