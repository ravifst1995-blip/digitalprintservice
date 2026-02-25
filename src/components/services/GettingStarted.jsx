

import bg1 from "../../img/bg1.jpg";
export default function GettingStarted({ links }) {
  return (
    <div className="relative bg-blue-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style=
          {{ backgroundImage: `url(${bg1})` }} 
      ></div>
      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-60">
        <h2 className="text-3xl md:text-6xl font-bold mb-4">
          Getting Started With Printing
        </h2>
        <p className="text-sm md:text-2xl mb-8 max-w-2xl">
          Select the operating system from below options to start the right printer driver installation of your product.
        </p>

          <div className="flex flex-wrap justify-center gap-6">
          {links?.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="bg-white text-black px-16 py-6 rounded-full font-semibold 
                         text-lg md:text-xl 
                         border-2 border-transparent 
                         hover:border-blue-500 hover:bg-white/90 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
