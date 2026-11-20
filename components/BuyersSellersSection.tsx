import Link from "next/link";

export default function BuyersSellersSection() {
  return (
    <section className="w-full bg-[#EAE6DB]">
      <div className="max-w-[1665px] mx-auto px-[4vw] py-7">
        <div className="w-full xl:w-[82%] mx-auto flex flex-col lg:flex-row justify-between gap-y-6 items-center">
          <div className="w-full md:w-[41%]">
            <h2 className="uppercase text-3xl md:text-[36px] font-medium text-black tracking-[.13em] mb-4">
              buyers
            </h2>

            <div className="w-full bg-black my-4 md:my-8" style={{ height: "1.5px" }}></div>

            <div className="space-y-4 py-[17px] leading-[1.65em] text-base text-black">
              <p>
                For every property, there is a buyer, looking to fulfill a need only they can define.
              </p>

              <p>
                Finding the right country estate isn't about searching, it's about knowing where to look.
              </p>
            </div>


            <div className="pt-4.5 flex w-fit">
              <Link href='#' className="border border-[#000000e8] text-[#000000e8] px-[2.2em] py-[1.2em] tracking-[.3em] text-xl md:text-[25px] hover:bg-[#000000e8] hover:text-white transition-all duration-300 ease-in-out" style={{ borderWidth: "1.5px" }}>
                LEARN MORE
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-4">
            <img
              src="/assets/buyers-picture.webp"
              alt="Buyers"
              className="w-full h-[450px] lg:h-[750px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1665px] mx-auto px-[4vw] py-7">
        <div className="w-full xl:w-[82%] mx-auto flex flex-col lg:flex-row justify-between gap-y-6 items-center">
          <div className="w-full md:w-1/2 md:pr-4">
            <img
              src="/assets/sellers-picture.webp"
              alt="Sellers"
              className="w-full h-[450px] lg:h-[750px] object-cover"
            />
          </div>

          <div className="w-full md:w-[41%]">
            <h2 className="uppercase text-3xl md:text-[36px] font-medium text-black tracking-[.13em] mb-4">
              Sellers
            </h2>

            <div className="w-full bg-black my-4 md:my-8" style={{ height: "1.5px" }}></div>

            <div className="space-y-4 py-[17px] leading-[1.65em] text-base text-black">
              <p>
                Selling a country or estate property is truly a fine art and requires a specialized and knowledgeable approach.
              </p>

              <p>
                Your property receives a customized sales plan, crafted by our experienced team of experts, ensuring it captures the attention of the right buyers.
              </p>
            </div>


            <div className="pt-4.5 flex w-fit">
              <Link href='#' className="border border-[#000000e8] text-[#000000e8] px-[2.2em] py-[1.2em] tracking-[.3em] text-xl md:text-[25px] hover:bg-[#000000e8] hover:text-white transition-all duration-300 ease-in-out" style={{ borderWidth: "1.5px" }}>
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
