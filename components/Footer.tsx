import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#fbf9f6] min-h-[30vh] px-[4vw] py-14 flex items-center border-t border-neutral-200/50 scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-[1665px] w-full mx-auto flex justify-between flex-col md:flex-row gap-y-10 items-start md:items-center">
        {/* Left: Brand / Team */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-medium tracking-[0.22em] text-neutral-900 uppercase">
            MIKE BENEDETTO
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
            RE/MAX Premier Inc., Brokerage — The OP Team
          </span>
          <p className="text-xs text-neutral-500 mt-2">
            3550 Rutherford Road, Unit 80, Vaughan, ON L4H 3T8
          </p>
        </div>

        {/* Right: Contact & Socials */}
        <div className="flex flex-col md:items-end gap-5">
          <div className="flex gap-4 items-center">
            {/* Facebook Link provided by user */}
            <a
              href="https://www.facebook.com/share/1cfZic1tZu/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mike Benedetto on Facebook"
              className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
            >
              <FaFacebookF size={15} />
            </a>

            {/* Realtor.ca Profile */}
            <a
              href="https://www.realtor.ca/agent/2143406/mike-benedetto-3550-rutherford-rd-80-vaughan-ontario-l4h3t8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mike Benedetto on Realtor.ca"
              className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 font-bold text-xs"
            >
              R
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
            >
              <FaLinkedinIn size={15} />
            </a>
          </div>

          <p className="md:text-right text-sm text-neutral-700 leading-relaxed">
            <strong>Cell: </strong>{" "}
            <a href="tel:4165234377" className="hover:underline font-medium text-black">
              (416) 523-4377
            </a>{" "}
            | <strong>Office: </strong>{" "}
            <a href="tel:9058561188" className="hover:underline font-medium text-black">
              (905) 856-1188
            </a>
            <br />
            <a
              href="mailto:mike@theopteam.ca"
              className="inline-block underline text-[#4a5337] hover:text-black font-medium mt-1"
            >
              mike@theopteam.ca
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
