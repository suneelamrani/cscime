export default function AboutSection() {
  return (
    <section className="w-full bg-[#EAE6DB]">
      <div className="max-w-[1665px] mx-auto px-[4vw] py-7">
        <div className="w-full xl:w-[82%] mx-auto flex flex-col lg:flex-row justify-between gap-y-6 items-center">
          <div className="w-full md:w-[41%]">
            <img
              src="/assets/carolyn.webp"
              alt="Buyers"
              className="w-full h-[450px] lg:h-[600px] object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-5">
            <h2 className="uppercase text-3xl md:text-[36px] font-medium text-black tracking-[.13em] mb-4">
              about me
            </h2>

            <div className="w-full bg-black my-4 md:my-8" style={{ height: "1.5px" }}></div>

            <div className="space-y-4 py-[17px] leading-[1.65em] text-base text-black">
              <p>
                With a keen eye for design and a deep passion for the countryside, Carolyn Scime has established herself as a trusted authority in country and rural real estate. As the founder and principal of Carolyn Scime, Distinctive Properties - Town & Country, she specializes in representing exceptional estates that embody the beauty and sophistication of country living.
              </p>
            </div>


            <div className="pt-4.5 flex w-fit">
              <a href='#' className="border border-[#353931] text-[#353931] uppercase px-[2.2em] py-[1.2em] tracking-[.3em] text-xl md:text-[25px] hover:bg-[#353931] hover:text-white transition-all duration-300 ease-in-out" style={{ borderWidth: "1.5px" }}>
                Read my full story
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
