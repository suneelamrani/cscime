import Link from "next/link";

export default function FeaturedPropertySection() {
  return (
    <section id="featured-property" className="w-full overflow-x-hidden relative py-4 md:py-0 bg-[#FBF9F6]">
      <div className="md:pr-[10%]">
        <div className="flex relative w-full flex-col md:flex-row">
          <div className="w-[65%] md:w-1/2">
            <div className="intrinsic w-[calc(100% +calc((68% - 50%) * 2))]">
              <img src="/assets/featured-property.webp" alt="featured property" className="w-full h-full" />
            </div>
          </div>

          <div className="w-[90%] md:w-1/2 mx-auto md:mx-left flex items-center justify-start -mt-[73px] md:mt-0">
            <div className="bg-[#eae6db] p-[8%] w-full">
              <h3 className="text-xl md:text-2xl tracking-[.13em] font-medium text-black">
                EXPERTS IN REFINED COUNTRY LIVING
              </h3>

              <p className="leading-[1.65em] text-sm mt-[4%] mb-[5%] text-black">
                Country properties offer more than just a place to live; they represent a way of life with a slower pace and a connection to nature. With over 17 years of specialized experience in this unique niche, Carolyn and her team bring a deep understanding of these special properties and the lifestyle that comes along with them, delivering a modern, connected approach to the transaction with unmatched dedication and expertise.
              </p>

              <Link href='#' className="block w-full sm:w-fit border border-[#000000e8] text-[#000000e8] px-[2.2em] py-[1.2em] tracking-[.3em] text-xl md:text-[25px] hover:bg-[#000000e8] hover:text-white transition-all duration-300 ease-in-out" style={{ borderWidth: "1.5px" }}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
