import Home from "@/app/(home)/Home";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <Navbar />
      <Home />
    </div>
  )
}
