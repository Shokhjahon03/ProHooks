import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col gap-[100px] pt-[150px] items-center h-dvh">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[40px]">Hush Kelibsiz</h1>
          <p className="text-[20px]">Biz bilan osonroq :)</p>
          <button className="btn-17">
            <span className="text-container">
              <span className="text">Boshlash</span>
            </span>
          </button>
        </div>
        <div className="flex gap-5">
          <div className="card">
            <h2 className="mb-[40px]">: Yangi va Samarali hooklar</h2>
            <p>
              -Siz uchun moslashuvchan{" "}
              <span className="text-[17px] font-bold text-gray-600">
                Hooklar
              </span>
            </p>
            <span className="block border border-gray-300"></span>
            <p>-Ularning ochiq kodlari</p>
            <span className="block border border-gray-300"></span>
          </div>
          <div className="card">
            <h2 className="mb-[40px]">: Moslashuvchan Componentlar</h2>
            <p>
              -Siz uchun moslashuvchan{" "}
              <span className="text-[17px] font-bold text-gray-600">
                Komponentlar
              </span>
            </p>
            <span className="block border border-gray-300"></span>
            <p>-Ularning ochiq kodlari</p>
            <span className="block border border-gray-300"></span>
          </div>
          <div className="card">
            <h2 className="mb-[40px]">: Ajoyib maslahatlar</h2>
            <p>
              -Siz uchun kerakli{" "}
              <span className="text-[17px] font-bold text-gray-600">
                Maslahatlar
              </span>
            </p>
            <span className="block border border-gray-300"></span>
            <p>-Ularning ochiq kodlari</p>
            <span className="block border border-gray-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
