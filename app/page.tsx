import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Homepage from "./components/home/Homepage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-300 font-sans">
      <Header />
      <main className="flex-1 flex w-full max-w-3xl flex-col items-center mx-auto pt-14 px-12 
                      bg-yellow-200 rounded-xl shadow-xl border-4 border-black">
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}
