"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-300 border-t-4 border-black px-4 py-2 flex justify-between">
       {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="w-8 h-8 bg-red-600 border-2 border-black rounded-full relative pixelated overflow-hidden"
        >
          <div className="absolute inset-x-0 top-1/2 h-1 bg-black"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
          </div>
        </div>
      ))}
    </footer>
  );
}
