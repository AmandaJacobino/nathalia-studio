import React from "react";

export default function About() {
  return (
    <section id="sobre" className="w-full bg-white py-16 md:py-32 mt-12 md:mt-24 px-4 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="md:hidden flex flex-col items-center">
          
          {/* Imagem da nathalia */}
          <div className="mt-4 w-56 h-[330px] rounded-full overflow-hidden bg-cyan-100 shadow-lg z-10">
            <img
              src="src/assets/imagens/foto-nathalia.png"
              alt="Nathalia"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Título */}
          <h1 className="mt-8 w-full text-3xl font-normal leading-snug [font-family:'Playfair_Display',serif] text-[#444444] text-center">
            Olá, sou a <span className="text-[#00c2cb]">Nathalia</span>.<br />
            Seja <span className="text-[#00c2cb]">bem-vinda</span> ao <br /> 
            meu studio.
          </h1>
          
          {/* Texto descritivo */}
          <p className="mt-6 text-justify leading-[28px] text-[#444444] [font-family:'Inter',sans-serif] px-4 min-w-[300px]">
            Sou especialista em massoterapia e atuo na área de estética há 4 anos.
            Meu objetivo é proporcionar cuidado e bem estar, realçando a beleza
            natural com técnicas adequadas a cada caso e atendimento personalizado.
          </p>
          
          {/* Imagens do estúdio */}
          <div className="mt-8 flex flex-col gap-2 items-center">
            <img
              src="src/assets/imagens/foto-studio01.jpeg"
              alt="Studio 1"
              className="rounded-xl w-64 h-40 object-cover"
            />
            <img
              src="src/assets/imagens/foto-studio02.jpeg"
              alt="Studio 2"
              className="rounded-xl w-64 h-40 object-cover"
            />
            <img
              src="src/assets/imagens/foto-studio03.jpeg"
              alt="Studio 3"
              className="rounded-xl w-64 h-40 object-cover"
            />
          </div>
        </div>
        
        <div className="hidden md:flex flex-row gap-10 items-start justify-between">
          {/* Coluna esquerda: */}
          <div className="flex flex-col gap-6 ml-72">
            {/* Título */}
            <h1 className="w-[22rem] text-4xl font-normal leading-snug [font-family:'Playfair_Display',serif] text-[#444444]">
              Olá, sou a <span className="text-[#00c2cb]">Nathalia</span>.<br />
              Seja <span className="text-[#00c2cb]">bem-vinda</span> ao <br /> 
              meu studio.
            </h1>

            {/* Imagens do estúdio */}
            <div className="flex flex-col gap-2">
              <img
                src="src/assets/imagens/foto-studio01.jpeg"
                alt="Studio 1"
                className="rounded-xl w-64 h-40 object-cover"
              />
              <img
                src="src/assets/imagens/foto-studio02.jpeg"
                alt="Studio 2"
                className="rounded-xl w-64 h-40 object-cover"
              />
              <img
                src="src/assets/imagens/foto-studio03.jpeg"
                alt="Studio 3"
                className="rounded-xl w-64 h-40 object-cover"
              />
            </div>
          </div>

          {/* Coluna da direita: */}
          <div className="flex flex-col items-start justify-start w-1/2 relative z-10 -ml-20">
            {/* Imagem da nathalia */}
            <div className="mt-24 w-64 h-[380px] rounded-full overflow-hidden bg-cyan-100 shadow-lg">
              <img
                src="src/assets/imagens/foto-nathalia.png"
                alt="Nathalia"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texto descritivo */}
            <p className="mt-10 text-lg leading-[30px] text-[#444444] [font-family:'Inter',sans-serif] max-w-md">
              Sou especialista em massoterapia e atuo na área de estética há 4 anos.
              Meu objetivo é proporcionar cuidado e bem estar, realçando a beleza
              natural com técnicas adequadas a cada caso e atendimento personalizado.
            </p>
          </div>
        </div>
      </div>

      {/* Flor decorativa */}
      <div className="absolute right-0 md:top-11 bottom-0 md:bottom-auto w-full md:w-3/4 translate-x-1/4 md:translate-x-1/3 opacity-10 md:opacity-20 pointer-events-none z-0">
        <img
          src="src/assets/imagens/flor-de-fundo-opaca.png"
          alt="Flor decorativa"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}