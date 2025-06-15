import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { SiYoutube } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="h-fit pt-20 pb-0 p-4">
      <div className="w-full h-full flex justify-between items-end px-10 py-10 border-b-[1px] border-white ">
        <div className="space-y-4 ">
          {" "}
          <h1 className="text-5xl font-bold ">
            Let’s connect and create <br /> something awesome together! <br />{" "}
          </h1>
          <div>
            {" "}
            <a className="text-3xl font-semibold underline" href="#">
              hi@johnsmith.dev
            </a>
          </div>
        </div>

        <div className="flex gap-5 text-2xl text-white ">
          <FaTwitter /> <FaFacebook /> <IoLogoDiscord /> <SiYoutube />
        </div>
      </div>

      <div className="py-5 text-center "> &copy; 2025 web developer</div>
    </footer>
  );
};

export default Footer;