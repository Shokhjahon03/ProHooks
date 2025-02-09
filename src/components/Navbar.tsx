import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../app/favicon.ico";
import { FloatingLabel } from "flowbite-react";
const Navbar = () => {
  return (
    <nav className="pt-2">
      <div className="container">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image className="w-[40px] rounded-full" src={logo} alt="logo" />
            <Link className="text-[40px]" href={"/"}>
              Pro Hooks Hub
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <i className="bx bx-search-alt-2"></i>
            <input
              type="text"
              className="border rounded-lg pl-3"
              placeholder="qidirish"
            />
          </div>
          <ul className="flex gap-[30px]">
            <li>
              <Link href={"/about"}>Hooklar</Link>
            </li>
            <li>
              <Link href={"/blog"}>Componentlar</Link>
            </li>
            <li>
              <Link href={"/docs"}>Maslahatlar</Link>
            </li>
            <li>
              <Link href={"/contact"}>Bog'alnish</Link>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <Link
              className="bg-slate-500 text-white p-1 rounded-lg"
              href={"/login"}
            >
              Biz haqimizda
            </Link>
            <Link href={"/"}>
              <i className="bx bxl-github text-[25px]"></i>
            </Link>
            <p>v-0.0.1</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
