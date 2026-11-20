export default function MediaSection() {
  return (
    <section className="w-full py-[6.6vmax] px-[4vw] max-w-[1665px] mx-auto">
      <button className="border border-[#4a5337] cursor-pointer text-left text-[#4a5337] uppercase px-[2.2em] py-[1.2em] tracking-[.3em] text-xl md:text-[25px] hover:bg-[#4a5337] hover:text-white transition-all duration-300 ease-in-out" style={{ borderWidth: "1.5px" }}>
        In the media
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-y-10 md:gap-y-6 gap-x-16 lg:gap-x-20 mt-14">
        <div>
          <img className="max-w-full h-auto" src="/assets/The_Globe_and_Mail.webp" alt="" />
        </div>

        <div>
          <img className="max-w-full h-auto" src="/assets/robb-report.webp" alt="" />
        </div>

        <div>
          <img className="max-w-full h-auto" src="/assets/blogTO.webp" alt="" />
        </div>

        <div>
          <img className="max-w-full h-auto" src="/assets/OTB.webp" alt="" />
        </div>

        <div>
          <img className="max-w-full h-auto" src="/assets/totonto-life.webp" alt="" />
        </div>

        <div>
          <img className="max-w-full h-auto" src="/assets/ITH.webp" alt="" />
        </div>

        <div>
          <img className="max-w-full h-auto" src="/assets/Toronto_Star.webp" alt="" />
        </div>

        <div>
          <img className="max-w-full h-auto" src="/assets/storeys.webp" alt="" />
        </div>

        <div>
          <img className="max-w-full h-auto" src="/assets/chestnut-park.webp" alt="" />
        </div>

        <div>
          <img className="max-w-full h-auto" src="/assets/christies.webp" alt="" />
        </div>

        <div>
          <img className="max-w-full h-auto" src="/assets/caledonenterprise.webp" alt="" />
        </div>

        <div>
          <img className="max-w-full h-auto" src="/assets/kariouk-architects.webp" alt="" />
        </div>
      </div>
    </section>
  );
}
