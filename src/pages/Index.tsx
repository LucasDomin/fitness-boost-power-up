
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Products from "../components/Products";
import CallToAction from "../components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Products />
        <CallToAction />
      </main>
      <footer className="w-full py-6 px-4 bg-black border-t border-zinc-800">
        <div className="container mx-auto text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} Suplementar Fitness. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;
