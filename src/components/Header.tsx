import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row container m-auto gap-4 p-4 mt-3">
      <img
        src="https://picsum.photos/900/400"
        alt="header"
        className="w-full lg:w-7/12 object-cover px-2"
      />
      <article className="w-full lg:w-5/12 text-lg flex flex-col items-center lg:items-start justify-center px-1">
        <h3 className="text-3xl font-bold">SandBox</h3>
        <p className="py-2"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, earum. Officiis dolorum neque hic, repellendus nemo ipsa totam omnis voluptas a laboriosam ipsum obcaecati quia veniam quis distinctio, aspernatur atque rerum ea! Commodi perspiciatis facilis eaque nt dolor! Blanditiis modi aliquid consectetur alias beatae maxime voluptatem consequatur  quibusdam illo maxime hic quos culpa veritatis, labore, </p>
        <Link to="/about" className="bg-red-400 font-semibold px-5">About Us</Link> 
      </article>
    </header>
  );
};

export default Header;
