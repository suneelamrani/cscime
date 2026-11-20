import Link from "next/link";

export default function InstagramSection() {
  return (
    <section className="w-full bg-[#FBF9F6] py-[70px] px-[4vw]">
      <div className="max-w-[1665px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <h3 className="text-xl md:text-[26px] font-medium text-black tracking-[.13em] uppercase break-words">
            Keep up with us on Instagram
          </h3>

          <button className="border border-[#000000e8] cursor-pointer text-left text-[#000000e8] uppercase px-[2.2em] py-[1.2em] tracking-[.3em] text-xl md:text-[25px] hover:bg-[#000000e8] hover:text-white transition-all duration-300 ease-in-out" style={{ borderWidth: "1.5px" }}>
            Learn more
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:gird-cols-6 xl:grid-cols-8 gap-4 sm:gap-5">
          <Link href="#" className="block">
            <div className="relative overflow-hidden group">
              <img src="/assets/instagram-post-1.webp" alt="instagram post" className="w-full h-[160px] sm:h-[177px] object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>

          <Link href="#" className="block">
            <div className="relative overflow-hidden group">
              <img src="/assets/instagram-post-2.webp" alt="instagram post" className="w-full h-[160px] sm:h-[177px] object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>

          <Link href="#" className="block">
            <div className="relative overflow-hidden group">
              <img src="/assets/instagram-post-1.webp" alt="instagram post" className="w-full h-[160px] sm:h-[177px] object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src="/assets/play-button.png"
                  alt="Play video"
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              </div>
            </div>
          </Link>

          <Link href="#" className="block">
            <div className="relative overflow-hidden group">
              <img src="/assets/instagram-post-2.webp" alt="instagram post" className="w-full h-[160px] sm:h-[177px] object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src="/assets/play-button.png"
                  alt="Play video"
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              </div>
            </div>
          </Link>

          <Link href="#" className="block">
            <div className="relative overflow-hidden group">
              <img src="/assets/instagram-post-1.webp" alt="instagram post" className="w-full h-[160px] sm:h-[177px] object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>

          {/* Post 6 */}
          <Link href="#" className="block">
            <div className="relative overflow-hidden group">
              <img src="/assets/instagram-post-2.webp" alt="instagram post" className="w-full h-[160px] sm:h-[177px] object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>

          <Link href="#" className="block">
            <div className="relative overflow-hidden group">
              <img src="/assets/instagram-post-1.webp" alt="instagram post" className="w-full h-[160px] sm:h-[177px] object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src="/assets/play-button.png"
                  alt="Play video"
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              </div>
            </div>
          </Link>

          <Link href="#" className="block">
            <div className="relative overflow-hidden group">
              <img src="/assets/instagram-post-2.webp" alt="instagram post" className="w-full h-[160px] sm:h-[177px] object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
