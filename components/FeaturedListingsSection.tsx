export default function FeaturedListingsSection() {
  return (
    <section className="w-full py-[3.3vmax] px-[4vw] max-w-[1665px] mx-auto">
      <div className="grid lg:grid-cols-4 gap-12">
        <div className="col-span-4 md:col-span-1 space-y-6 sm:space-y-10 pt-12">
          <h3 className="text-xl md:text-[26px] font-medium text-black tracking-[.13em] uppercase break-words">
            View current listings
          </h3>

          <button className="border border-[#000000e8] cursor-pointer text-left text-[#000000e8] uppercase px-[2.2em] py-[1.2em] tracking-[.3em] text-xl md:text-[25px] hover:bg-[#000000e8] hover:text-white transition-all duration-300 ease-in-out" style={{ borderWidth: "1.5px" }}>
            Learn more
          </button>
        </div>

        <div className="col-span-4 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <a href="#">
            <div className="flex flex-col gap-7 text-center">
              <img src="/assets/1.webp" alt="13570 7TH CONCESSION ROAD, KING, ON" className="h-[242px] sm:h-[159px] w-full object-cover" />

              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                13570 7TH CONCESSION ROAD, KING, ON
              </p>
            </div>
          </a>

          <a href="#">
            <div className="flex flex-col gap-7 text-center">
              <img src="/assets/2.webp" alt="908 VANDORF SIDEROAD, AURORA, ON" className="h-[242px] sm:h-[159px] w-full object-cover" />

              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                908 VANDORF SIDEROAD, AURORA, ON
              </p>
            </div>
          </a>

          <a href="#">
            <div className="flex flex-col gap-7 text-center">
              <img src="/assets/3.webp" alt="7995 19th SIDEROAD, KING TOWNSHIP, ON" className="h-[242px] sm:h-[159px] w-full object-cover" />

              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                7995 19th SIDEROAD, KING TOWNSHIP, ON
              </p>
            </div>
          </a>

          <a href="#">
            <div className="flex flex-col gap-7 text-center">
              <img src="/assets/4.webp" alt="347036 MONO CENTRE ROAD, MONO, ON" className="h-[242px] sm:h-[159px] w-full object-cover" />

              <p className="text-xl leading-[1.2em] text-black text-center font-medium px-6">
                347036 MONO CENTRE ROAD, MONO, ON
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
