import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Instagram } from "lucide-react";
import "./index.css";
import "./App.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-5 border-b">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-600">KYRIOS SYSTEMS</div>
        </div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-blue-600">
            SOBRE
          </a>
          <a href="#" className="hover:text-blue-600">
            TECNOLOGIAS
          </a>
          <a href="#" className="hover:text-blue-600">
            PROJETOS
          </a>
        </nav>
        <Button text="FALE CONOSCO" />
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-10">
        <h1 className="text-4xl font-bold">
          OLÁ! SOMOS A <span className="text-blue-600">KYRIOS SYSTEMS</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-lg mx-auto">
          Transformando ideias em Softwares de alto desempenho, sem deixar para
          trás nossos princípios e valores.
        </p>
        <Button text="SAIBA MAIS" />
      </section>

      {/* Social Media Section */}
      <section className="flex justify-center gap-4 py-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="flex items-center gap-2">
          <Instagram size={24} /> <span>@kyriossystems</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={24} /> <span>systemkyrios@gmail.com</span>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">
          SOBRE A <span className="text-blue-600">KYRIOS SYSTEMS</span>
        </h2>
        <div className="flex gap-10 mt-6">
          <Card className="w-1/3 h-60 bg-gray-300"></Card>{" "}
          {/* Placeholder da imagem */}
          <p className="text-gray-600">
            Fundada em março de 2025, a Kyrios Systems é uma empresa brasileira
            especializada no desenvolvimento de softwares inovadores de alto
            desempenho. Nossa missão é transformar ideias em soluções
            tecnológicas eficientes, ajudando empresas e indivíduos a alcançarem
            seus objetivos.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">
          POR QUE OPTAR{" "}
          <span className="text-blue-600">PELA KYRIOS SYSTEMS</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-lg mx-auto">
          Na Kyrios Systems, não apenas desenvolvemos softwares, criamos
          soluções inteligentes que impulsionam negócios e transformam ideias em
          realidade.
        </p>
      </section>
    </div>
  );
};

export default Home;
