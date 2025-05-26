import React from "react";
import star from "../../assets/imagens/star.png";
import avatar1 from "../../assets/imagens/avatar01.jpg";
import avatar2 from "../../assets/imagens/avatar02.jpg";
import avatar3 from "../../assets/imagens/avatar03.jpg";
import avatar4 from "../../assets/imagens/avatar01.jpg";
import flor from "../../assets/imagens/flor-de-fundo-opaca.png";

interface Testimonial {
  name: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Paloma Barbosa",
    text: "Experiência incrível! A Nathalia é super atenciosa e profissional. Saí do estúdio me sentindo renovada, com a pele incrível e o astral lá em cima. Recomendo demais!",
    avatar: avatar1,
  },
  {
    name: "Ana Floriano",
    text: "A Nathalia tem mãos mágicas! O atendimento foi maravilhoso, o ambiente super acolhedor e os resultados foram visíveis já na primeira sessão!",
    avatar: avatar2,
  },
  {
    name: "Juliana Costa",
    text: "Sem palavras para o cuidado da Nathalia. Cada detalhe é pensado com carinho e profissionalismo. Recomendo de olhos fechados!",
    avatar: avatar3,
  },
  {
    name: "Mariana Oliveira",
    text: "Fiquei impressionada com a qualidade do atendimento. A Nathalia explicou tudo com calma e me deixou super confortável durante todo o processo.",
    avatar: avatar4,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="w-full py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-white relative overflow-hidden" >
      {/* Título e subtítulo */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium [font-family:'Playfair_Display',serif] text-[#444444] mb-4">
          Depoimentos
        </h2>
        <p className="text-lg md:text-xl font-medium [font-family:'Inter',sans-serif] text-[#444444] tracking-wider">
          O que nossos clientes estão dizendo
        </p>
      </div>
      
      {/* Container dos depoimentos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-5 justify-items-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#eaeaea] rounded-3xl border border-solid border-[#b2f4f6] p-6 md:p-8 shadow w-full transition-all duration-300 hover:shadow-lg"
          >
            {/* Comentário */}
            <p className="[font-family:'Inter',sans-serif] text-sm md:text-base text-[#444444] leading-6 italic text-justify mb-7
            ">{`"${t.text}"`}</p>

            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#b2f4f6]"
              />
              <div>
                <h3 className="[font-family:'Playfair_Display',serif] font-bold text-[#00c2cb] text-lg md:text-xl">
                  {t.name}
                </h3>
                <div className="flex gap-1 mt-1">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <img key={idx} src={star} alt="star" className="w-4 h-4 md:w-5 md:h-5" />
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flor decorativa */}
      <div className="absolute left-0 top-80 bottom-0 md:bottom-20 w-3/4 sm:w-2/3 md:w-1/2 -translate-x-1/3 sm:-translate-x-1/4 md:-translate-x-1/6 opacity-10 md:opacity-20 pointer-events-none z-0">
        <img
          src={flor}
          alt="Flor decorativa"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}