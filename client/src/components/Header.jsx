import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <header className="flex justify-between p-4 text-xl bg-black text-white">
        <Link to={"/"} className="flex flex-col justify-center items-center">
          <h1 className="text-3xl">Vũ Minh Đức</h1>
          <h2 className="text-2xl">MSSV: 20204726</h2>
        </Link>
      </header>
    </section>
  );
};

export default Header;
