import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "O que é o dermaplaning e quais os seus benefícios?",
    answer: "O dermaplaning é um procedimento de esfoliação física que utiliza uma lâmina especial para remover as células mortas da pele e os pelos faciais mais finos. Os benefícios incluem textura mais suave, melhor absorção de produtos, redução de linhas finas e uma aplicação de maquiagem mais uniforme."
  },
  {
    question: "Com que frequência posso fazer limpeza de pele?",
    answer: "Recomenda-se fazer limpeza de pele profissional a cada 30 a 45 dias, dependendo do seu tipo de pele. Peles oleosas ou com tendência a acne podem se beneficiar de sessões mais frequentes, enquanto peles secas ou sensíveis podem necessitar de intervalos maiores."
  },
  {
    question: "A maquiagem personalizada dura quanto tempo na pele?",
    answer: "A duração da maquiagem personalizada varia conforme o tipo de pele, produtos utilizados e condições ambientais. Em geral, pode durar de 8 a 12 horas com a aplicação correta de primers e fixadores. Para eventos especiais, podemos utilizar técnicas específicas que garantem ainda mais durabilidade."
  },
  {
    question: "O brow lamination é indicado para todos os tipos de sobrancelhas?",
    answer: "O brow lamination é versátil e pode beneficiar diversos tipos de sobrancelhas, especialmente aquelas que são muito espessas, rebeldes ou com falhas. No entanto, não é recomendado para pessoas com pele extremamente sensível, alergias a determinados produtos ou com condições dermatológicas ativas na região."
  },
  {
    question: "Preciso ter algum preparo antes dos procedimentos faciais?",
    answer: "Sim, é recomendado evitar exposição solar intensa na semana anterior, suspender o uso de produtos com ativos como retinol e ácidos 48h antes, e informar sobre quaisquer alergias ou condições de pele. É importante também estar bem hidratado e comparecer sem maquiagem para procedimentos faciais."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="w-full py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-white">
      {/* Título da seção */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium [font-family:'Playfair_Display',serif] text-[#444444]">
          Perguntas frequentes
        </h2>
        <div className="w-24 h-1 bg-[#00c2cb] mx-auto mt-6"></div>
      </div>
      
      {/* Container das perguntas */}
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="mb-6"
          >
            {/* Botão de pergunta */}
            <button
              onClick={() => toggleQuestion(index)}
              className={`w-full p-5 rounded-3xl transition-all duration-300 ${
                openIndex === index 
                ? "bg-[#00c2cb] shadow-md mb-2" 
                : "bg-[#eaeaea] border border-solid border-[#b2f4f6] hover:bg-[#b2f4f6] hover:bg-opacity-30"
              }`}
            >
              <p className={`text-center [font-family:'Playfair_Display',serif] font-semibold text-base md:text-lg ${
                openIndex === index ? "text-white" : "text-[#444444]"
              }`}>
                {faq.question}
              </p>
              <span className={`block mx-auto mt-2 text-2xl transition-transform duration-300 ${
                openIndex === index 
                ? "text-white transform rotate-180" 
                : "text-[#00c2cb]"
              }`}>
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            
            {/* Conteúdo da resposta */}
            {openIndex === index && (
              <div className="bg-white rounded-3xl p-6 mt-2 shadow-md border border-solid border-[#b2f4f6] transition-all duration-500 animate-fadeIn">
                <p className="[font-family:'Inter',sans-serif] text-sm md:text-base text-[#444444] leading-6 text-center">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}