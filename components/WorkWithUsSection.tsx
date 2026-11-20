import Link from "next/link";

export default function WorkWithUsSection() {
  return (
    <section id="work-with-us" className="relative w-full h-[60vh] md:h-[73vh] px-[4vw] bg-cover bg-center bg-no-repeat overflow-hidden flex justify-end items-center"
      style={{ backgroundImage: "url('/assets/Modern-Movement-Creative-Inc.webp')" }}>
      <div className="bg-[#E8E5DA] max-w-full md:max-w-[600px] w-full px-4 sm:px-20 py-20 flex flex-col items-center justify-center text-center shadow-lg">
        <span className="text-xs uppercase tracking-[0.25em] text-neutral-600 mb-2 font-medium">
          Mike Benedetto | RE/MAX Premier
        </span>

        <h3 className="text-2xl md:text-[32px] font-medium text-black tracking-[.13em] uppercase break-words mb-6">
          Work With Mike
        </h3>

        <p className="text-sm text-neutral-800 leading-relaxed mb-8 max-w-md">
          Ready to discover your next luxury estate or sell with strategic confidence? Connect directly with Mike Benedetto today.
        </p>

        <a
          href="tel:4165234377"
          className="border border-[#000000e8] cursor-pointer text-center text-[#000000e8] uppercase px-[2.2em] py-[1.2em] tracking-[.3em] text-base md:text-lg hover:bg-[#000000e8] hover:text-white transition-all duration-300 ease-in-out font-medium"
          style={{ borderWidth: "1.5px" }}
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
