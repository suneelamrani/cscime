import Link from "next/link";

export default function FeaturedListingsSection() {
  return (
    <section id="current-offerings" className="w-full py-[3.3vmax] px-[4vw] max-w-[1665px] mx-auto scroll-mt-24 sm:scroll-mt-28 relative">
      <span id="featured-listings" className="sr-only" />

      {/* Current Offerings */}
      <div className="grid lg:grid-cols-4 gap-12">
        <div className="col-span-4 md:col-span-1 space-y-6 sm:space-y-10 pt-12">
          <h3 className="text-xl md:text-[26px] font-medium text-black tracking-[.13em] uppercase break-words">
            View current listings
          </h3>

          <a
            href="#contact"
            className="inline-block border border-[#000000e8] cursor-pointer text-left text-[#000000e8] uppercase px-[2.2em] py-[1.2em] tracking-[.3em] text-xl md:text-[25px] hover:bg-[#000000e8] hover:text-white transition-all duration-300 ease-in-out font-normal"
            style={{ borderWidth: "1.5px" }}
          >
            Learn more
          </a>
        </div>

        <div className="col-span-4 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <a href="#contact" className="group">
            <div className="flex flex-col gap-7 text-center">
              <div className="relative overflow-hidden">
                <img src="/assets/1.webp" alt="13570 7TH CONCESSION ROAD, KING, ON" className="h-[242px] sm:h-[159px] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                13570 7TH CONCESSION ROAD, KING, ON
              </p>
            </div>
          </a>

          <a href="#contact" className="group">
            <div className="flex flex-col gap-7 text-center">
              <div className="relative overflow-hidden">
                <img src="/assets/2.webp" alt="908 VANDORF SIDEROAD, AURORA, ON" className="h-[242px] sm:h-[159px] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                908 VANDORF SIDEROAD, AURORA, ON
              </p>
            </div>
          </a>

          <a href="#contact" className="group">
            <div className="flex flex-col gap-7 text-center">
              <div className="relative overflow-hidden">
                <img src="/assets/3.webp" alt="7995 19th SIDEROAD, KING TOWNSHIP, ON" className="h-[242px] sm:h-[159px] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                7995 19th SIDEROAD, KING TOWNSHIP, ON
              </p>
            </div>
          </a>

          <a href="#contact" className="group">
            <div className="flex flex-col gap-7 text-center">
              <div className="relative overflow-hidden">
                <img src="/assets/4.webp" alt="347036 MONO CENTRE ROAD, MONO, ON" className="h-[242px] sm:h-[159px] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                347036 MONO CENTRE ROAD, MONO, ON
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Sold Section */}
      <div id="sold" className="mt-20 pt-16 border-t border-neutral-300/80 scroll-mt-24 sm:scroll-mt-28">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="col-span-4 md:col-span-1 space-y-6 sm:space-y-10 pt-4">
            <div className="inline-block bg-[#4a5337] text-white text-[10px] tracking-[0.25em] uppercase font-semibold px-3 py-1">
              Sold Portfolio
            </div>

            <h3 className="text-xl md:text-[26px] font-medium text-black tracking-[.13em] uppercase break-words">
              Recent Notable Sales
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Demonstrated success across King City, Kleinburg, Vaughan, and the Greater Toronto Area.
            </p>

            <a
              href="#contact"
              className="inline-block border border-[#000000e8] cursor-pointer text-left text-[#000000e8] uppercase px-[2.2em] py-[1.2em] tracking-[.3em] text-xl md:text-[25px] hover:bg-[#000000e8] hover:text-white transition-all duration-300 ease-in-out font-normal"
              style={{ borderWidth: "1.5px" }}
            >
              Contact Mike
            </a>
          </div>

          <div className="col-span-4 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="flex flex-col gap-7 text-center group">
              <div className="relative overflow-hidden">
                <img src="/assets/slide-4.webp" alt="14200 Keele St, King City" className="h-[242px] sm:h-[159px] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 right-2 bg-neutral-900/90 text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1">
                  SOLD
                </span>
              </div>
              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                14200 KEELE STREET, KING CITY, ON
              </p>
            </div>

            <div className="flex flex-col gap-7 text-center group">
              <div className="relative overflow-hidden">
                <img src="/assets/slide-5.webp" alt="88 Nashville Rd, Kleinburg" className="h-[242px] sm:h-[159px] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 right-2 bg-neutral-900/90 text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1">
                  SOLD
                </span>
              </div>
              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                88 NASHVILLE ROAD, KLEINBURG, ON
              </p>
            </div>

            <div className="flex flex-col gap-7 text-center group">
              <div className="relative overflow-hidden">
                <img src="/assets/slide-6.webp" alt="24 Pine Valley Dr, Vaughan" className="h-[242px] sm:h-[159px] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 right-2 bg-neutral-900/90 text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1">
                  SOLD
                </span>
              </div>
              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                24 PINE VALLEY DRIVE, VAUGHAN, ON
              </p>
            </div>

            <div className="flex flex-col gap-7 text-center group">
              <div className="relative overflow-hidden">
                <img src="/assets/slide-7.webp" alt="615 Mill Rd, King Township" className="h-[242px] sm:h-[159px] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 right-2 bg-neutral-900/90 text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1">
                  SOLD
                </span>
              </div>
              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                615 MILL ROAD, KING TOWNSHIP, ON
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
