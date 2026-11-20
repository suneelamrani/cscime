import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fbf9f6] min-h-[35vh] px-[4vw] py-10 flex items-center">
      <div className="max-w-[1665px] w-full mx-auto flex justify-between flex-col sm:flex-row gap-y-12">
        <div className="flex items-center justify-center">
          <img src="/assets/ChestnutPark_logo_Christies_Horz_green.webp" alt="Chestnut Park Christie's International Real Estate Logo" className="h-24 object-contain" />
        </div>


        <div className="flex items-center justify-center">
          <img src="/assets/Carolyn+Scime+Distinctive+Properties+Icon+Footer.webp" alt="Carolyn Scime Distinctive Properties" className="h-[150px] object-contain" />
        </div>

        <div className="flex flex-col gap-8.5">
          <div className="flex gap-4 items-center justify-end">
            <Link href="#" className="hover:fill-[#7a7a7a] hover:opacity-70 transition-all duration-300 ease-in-out">
              <FaInstagram size={20} />
            </Link>

            <Link href="#" className="hover:fill-[#7a7a7a] hover:opacity-70 transition-all duration-300 ease-in-out">
              <FaFacebookF size={18} />
            </Link>

            <Link href="#" className="hover:fill-[#7a7a7a] hover:opacity-70 transition-all duration-300 ease-in-out">
              <FaLinkedinIn size={18} />
            </Link>

            <Link href="#" className="hover:fill-[#7a7a7a] hover:opacity-70 transition-all duration-300 ease-in-out">
              <IoMdLink size={24} />
            </Link>
          </div>

          <p className="text-right text-sm">
            Carolyn Scime, Broker <br />
            Chestnut Park Real Estate Limited, Brokerage <br />
            <strong>Office: </strong> (519) 316-9797 | <strong>Cell: </strong> (905) 717-6774
            <Link href="mailto:carolyn@chestnutpark.com" className="block underline text-[#4a5337]">carolyn@chestnutpark.com</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
