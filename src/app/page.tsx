import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <header className="w-full">
      <Navbar />
      <Header />
    </header>
  );
}
