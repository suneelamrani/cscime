'use client';

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="w-full bg-[#4A5337] py-[70px] px-[4vw] scroll-mt-24 sm:scroll-mt-28">
      <form onSubmit={(e) => e.preventDefault()}>
        <h3 className="mb-4 text-center text-2xl leading-[1.2em] tracking-[.13em] uppercase text-white">
          Subscribe to our newsletter
        </h3>

        <p className="text-center text-white text-sm mb-4">
          Sign up with your email address to receive news and updates.
        </p>

        <div className="flex w-full justify-center items-center flex-wrap flex-col sm:flex-row gap-4 mt-12">
          <div className="max-w-[18rem] w-full">
            <input
              className="w-full border-b border-transparent focus:border-white bg-white focus:bg-transparent text-white focus:text-white placeholder:text-white focus:placeholder:text-white/70 py-[1.4rem] px-[2rem] leading-[1.2rem] text-sm transition-all duration-300 ease-out outline-none font-medium"
              name="fname"
              type="text"
              spellCheck="false"
              placeholder="First Name"
              maxLength={30}
              title="First"
            />
          </div>

          <div className="max-w-[18rem] w-full">
            <input
              className="w-full border-b border-transparent focus:border-white bg-white focus:bg-transparent text-white focus:text-white placeholder:text-white focus:placeholder:text-white/70 py-[1.4rem] px-[2rem] leading-[1.2rem] text-sm transition-all duration-300 ease-out outline-none font-medium"
              name="lname"
              type="text"
              spellCheck="false"
              placeholder="Last Name"
              maxLength={30}
              title="Last"
            />
          </div>

          <div className="max-w-[18rem] w-full">
            <input
              className="w-full border-b border-transparent focus:border-white bg-white focus:bg-transparent text-white focus:text-white placeholder:text-white focus:placeholder:text-white/70 py-[1.4rem] px-[2rem] leading-[1.2rem] text-sm transition-all duration-300 ease-out outline-none font-medium"
              name="email"
              type="email"
              spellCheck="false"
              placeholder="Email Address"
              maxLength={50}
              title="Email"
            />
          </div>

          <button
            className="border border-white w-fit whitespace-nowrap bg-transparent uppercase tracking-[.3em] text-white py-[1.4rem] px-[2rem] leading-[1.2rem] text-sm transition-all duration-300 ease-out hover:bg-white hover:text-[#4A5337] font-medium cursor-pointer"
          >
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
}
