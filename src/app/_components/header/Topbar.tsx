import { Link } from "@/i18n/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Topbar = () => {
  return (
    <div className=" hidden md:block  bg-deep-navy">
      <div className="container-lg py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="tel:01507839478"
            className="flex items-center gap-2 group"
          >
            <div
              className="rounded-full flex items-center justify-center border border-ant-gold w-8 h-8 
                    transition-all duration-300 ease-in-out 
                    group-hover:bg-ant-gold"
            >
              <FaPhoneAlt
                className="text-xl text-ant-gold 
                             transition-colors duration-300 ease-in-out 
                             group-hover:text-white"
              />
            </div>
            <span
              className="text-sm text-ant-gold font-bold 
                     transition-colors duration-300 ease-in-out "
            >
              015 078 39478
            </span>
          </Link>
          <Link
            href="mailto:sirrushsolutions@gmail.com"
            className="flex items-center gap-2 group"
          >
            <div
              className="rounded-full flex items-center justify-center border border-ant-gold w-8 h-8 
                    transition-all duration-300 ease-in-out 
                    group-hover:bg-ant-gold"
            >
              <MdEmail
                className="text-2xl text-ant-gold 
                          transition-colors duration-300 ease-in-out 
                          group-hover:text-white"
              />
            </div>
            <span
              className="text-sm text-ant-gold font-bold 
                     transition-colors duration-300 ease-in-out "
            >
              Sirrush
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://www.facebook.com/profile.php?id=61574370509901"
            target="_blank"
            className="group"
          >
            <div
              className="rounded-full flex items-center justify-center border border-ant-gold w-8 h-8 
                    transition-all duration-300 ease-in-out 
                    group-hover:bg-ant-gold"
            >
              <FaFacebookF
                className=" text-xl text-ant-gold 
                             transition-colors duration-300 ease-in-out 
                             group-hover:text-white"
              />
            </div>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.facebook.com/profile.php?id=61574370509901"
            target="_blank"
            className="group"
          >
            <div
              className="rounded-full flex items-center justify-center border border-ant-gold w-8 h-8 
                    transition-all duration-300 ease-in-out 
                    group-hover:bg-ant-gold"
            >
              <FaInstagram
                className=" text-xl text-ant-gold 
                              transition-colors duration-300 ease-in-out 
                              group-hover:text-white"
              />
            </div>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61574370509901"
            target="_blank"
            className="group"
          >
            <div
              className="rounded-full flex items-center justify-center border border-ant-gold w-8 h-8 
                    transition-all duration-300 ease-in-out 
                    group-hover:bg-ant-gold"
            >
              <FaLinkedinIn
                className=" text-xl text-ant-gold 
                               transition-colors duration-300 ease-in-out 
                               group-hover:text-white"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
