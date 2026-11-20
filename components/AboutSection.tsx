import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#EAE6DB] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-[1665px] mx-auto px-[4vw] py-10 md:py-16">
        <div className="w-full xl:w-[85%] mx-auto flex flex-col lg:flex-row justify-between gap-y-10 items-center">
          <div className="w-full md:w-[45%]">
            <div className="relative overflow-hidden shadow-md">
              <img
                src="/assets/mike-benedetto.png"
                alt="Mike Benedetto - Real Estate Sales Representative"
                className="w-full h-[450px] sm:h-[520px] lg:h-[620px] object-cover object-top"
              />
            </div>
          </div>

          <div className="w-full md:w-[50%] md:pl-6 lg:pl-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#555] font-medium block mb-2">
              RE/MAX Premier — The OP Team
            </span>

            <h2 className="uppercase text-3xl md:text-[38px] font-medium text-black tracking-[.13em] mb-4">
              ABOUT MIKE
            </h2>

            <div className="w-full bg-black my-4 md:my-6" style={{ height: "1.5px" }}></div>

            <div className="space-y-4 py-2 leading-[1.7em] text-base text-neutral-800">
              <p>
                Born and raised in King City and backed by an Honours Bachelor of Arts in Economics from York University, Mike Benedetto brings a strategic, analytical, and modern approach to luxury residential and estate real estate.
              </p>

              <p>
                Prior to real estate, Mike honed his negotiation acumen and customer experience standards in the luxury automotive sales sector. With roots in commercial property investment, development, and land banking, he understands property value from the foundation up.
              </p>

              <p>
                Today, partnering with RE/MAX Premier and The OP Team at 3550 Rutherford Road in Vaughan, Mike delivers bespoke client representation, discreet advisory, and exceptional results across Vaughan, Woodbridge, King City, and the Greater Toronto Area.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap gap-4 items-center">
              <a
                href="tel:4165234377"
                className="border border-[#353931] text-[#353931] uppercase px-[2.2em] py-[1.1em] tracking-[.25em] text-sm md:text-base font-medium hover:bg-[#353931] hover:text-white transition-all duration-300 ease-in-out"
                style={{ borderWidth: "1.5px" }}
              >
                Call (416) 523-4377
              </a>

              <a
                href="https://www.realtor.ca/agent/2143406/mike-benedetto-3550-rutherford-rd-80-vaughan-ontario-l4h3t8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-[#4a5337] underline hover:text-black transition-colors py-2"
              >
                View Realtor.ca Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
