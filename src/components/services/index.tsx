import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const carouselRef = useRef(null);
  const [topPosition, setTopPosition] = useState(200);
  
  
  // Dados dos serviços
  const services = [
    {
      id: 1,
      title: "Limpeza de pele",
      image: "src/assets/imagens/foto-studio01.jpeg", 
      mainDescription: (
        <>
          <span className="font-semibold text-[#00c2cb]">Higienização</span>,{" "}
          <span className="font-semibold text-[#00c2cb]">esfoliação</span> e{" "}
          <span className="font-semibold text-[#00c2cb]">hidratação</span> feitas 
          com conforto e cuidado. Um{" "}
          <span className="font-semibold text-[#00c2cb]">atendimento personalizado</span>{" "}
          para as necessidades da sua pele.
        </>
      ),
      bonus: (
        <>
          SPA facial + massagem<br />
          relaxante facial.
        </>
      ),
      icon: "src/assets/imagens/icone-flor-servicos.png", 
    },
    {
      id: 2,
      title: "Dermaplaning",
      image: "src/assets/imagens/foto-studio03.jpeg", 
      mainDescription: (
        <>
          Promove a <span className="font-semibold text-[#00c2cb]">remoção</span> da 
          camada superficial ressecada,{" "}
          <span className="font-semibold text-[#00c2cb]">elimina os pelinhos</span> e{" "}
          <span className="font-semibold text-[#00c2cb]">potencializa</span>{" "}
          <span className="font-semibold text-[#00c2cb]">a absorção dos cosméticos</span>{" "}
          com limpeza e hidratação profunda.
        </>
      ),
      bonus: (
        <>
          Limpeza de pele + drenagem facial.
        </>
      ),
      icon: "src/assets/imagens/icone-flor-servicos.png", 
    },
    {
      id: 3,
      title: "Maquiagem",
      image: "src/assets/imagens/foto-studio02.jpeg", 
      mainDescription: (
        <>
          Realce sua beleza com{" "}
          <span className="font-semibold text-[#00c2cb]">técnicas adequadas</span>{" "}
          para cada ocasião, em uma maquiagem{" "}
          <span className="font-semibold text-[#00c2cb]">feita sob medida</span>{" "}
          para você.
        </>
      ),
      bonus: null,
      icon: "src/assets/imagens/icone-flor-servicos.png", 
    },
    {
      id: 4,
      title: "Design de sobrancelhas",
      image: "src/assets/imagens/foto-studio01.jpeg", 
      mainDescription: (
        <>
          Design personalizado para{" "}
          <span className="font-semibold text-[#00c2cb]">realçar sua beleza natural</span>{" "}
          e harmonia ao rosto.
        </>
      ),
      combos: (
        <>
          Design + SPA labial<br />
          Design + Buço<br />
          Design + brow lamination
        </>
      ),
      icon: "src/assets/imagens/icone-flor-servicos.png", 
    },
    {
      id: 5,
      title: "SPA da pele",
      image: "src/assets/imagens/foto-studio03.jpeg", 
      mainDescription: (
        <>
          Tratamento completo para revitalizar sua pele com produtos naturais e técnicas relaxantes.
        </>
      ),
      bonus: (
        <>
          Massagem facial + Máscara hidratante
        </>
      ),
      icon: "src/assets/imagens/icone-flor-servicos.png", 
    },
    {
      id: 6,
      title: "Massagem relaxante",
      image: "src/assets/imagens/foto-studio02.jpeg", 
      mainDescription: (
        <>
          Alívio do estresse e tensão muscular com movimentos suaves e óleos essenciais.
        </>
      ),
      bonus: (
        <>
          Aromaterapia + Pedras quentes
        </>
      ),
      icon: "src/assets/imagens/icone-flor-servicos.png", 
    },
    {
      id: 7,
      title: "Massagem modeladora",
      image: "src/assets/imagens/foto-studio01.jpeg", 
      mainDescription: (
        <>
          Técnica que auxilia na redução de medidas e melhora o contorno corporal.
        </>
      ),
      bonus: (
        <>
          Esfoliação corporal + Bandagem
        </>
      ),
      icon: "src/assets/imagens/icone-flor-servicos.png", 
    },
    {
      id: 8,
      title: "Massagem linfática",
      image: "src/assets/imagens/foto-studio03.jpeg", 
      mainDescription: (
        <>
          Drenagem que facilita a eliminação de toxinas e reduz o inchaço corporal.
        </>
      ),
      bonus: (
        <>
          Escalda pés + Chá desintoxicante
        </>
      ),
      icon: "src/assets/imagens/icone-flor-servicos.png", 
    }
  ];

  // Detectar tamanho da tela e ajustar posição dos botões
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      if (window.innerWidth < 640) {
        setTopPosition(180); // Para celulares
      } else if (window.innerWidth < 1024) {
        setTopPosition(220); // Para tablets
      } else {
        setTopPosition(250); // Para desktops
      }
    };

    // Inicialização
    if (typeof window !== "undefined") {
      handleResize(); 
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Lógica para mostrar/esconder controles no desktop
  useEffect(() => {
    const handleMouseEnter = () => setShowControls(true);
    const handleMouseLeave = () => setShowControls(false);

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mouseenter', handleMouseEnter);
      carousel.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Determinar quantos cards mostrar baseado no tamanho da tela
  const getVisibleCards = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  // Número máximo de slides que podem ser exibidos como "início"
  const maxStartingIndex = Math.max(0, services.length - getVisibleCards());

  // Funções para navegação do carrossel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxStartingIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxStartingIndex : prevIndex - 1
    );
  };

  // Array de índices visíveis
  const getVisibleIndexes = () => {
    const visibleCards = getVisibleCards();
    const indexes = [];
    
    // Garante que não excedemos o número de serviços disponíveis
    const numToShow = Math.min(visibleCards, services.length);
    
    for (let i = 0; i < numToShow; i++) {
      // Módulo para garantir que voltamos ao início quando atingirmos o final
      const index = (currentIndex + i) % services.length;
      indexes.push(index);
    }
    
    return indexes;
  };

  // Verifica se o índice está visível atualmente
  const isIndexVisible = (index) => {
    const visibleIndexes = getVisibleIndexes();
    return visibleIndexes.includes(index);
  };

  return (
    <section className="w-full py-16 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-white overflow-visible">
      {/* Título e subtítulo */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium [font-family:'Playfair_Display',serif] text-[#444444] mb-4">
          Conheça nossos serviços mais procurados
        </h2>
        <p className="text-lg md:text-xl font-medium [font-family:'Poppins',sans-serif] text-[#444444] tracking-wider">
          Realce sua beleza e relaxe sua mente
        </p>
      </div>
      
      {/* Container do Carrossel */}
      <div 
        ref={carouselRef}
        className="relative w-full max-w-6xl mx-auto mt-8"
      >
        {/* Controles de navegação */}
        <div className="relative h-0">
          {/* Botão anterior */}
          <div 
            className={`fixed-nav-button z-20 transition-opacity duration-300 ${
              showControls || windowWidth < 1024 ? 'opacity-70 hover:opacity-100' : 'opacity-0'
            }`}
            style={{
              position: 'absolute',
              top: `${topPosition}px`, // Altura 
              left: windowWidth < 640 ? '-10px' : '-40px' // Posicionamento 
            }}
          >
            <button 
              onClick={prevSlide}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all hover:shadow-lg"
              aria-label="Serviço anterior"
            >
              <ChevronLeft size={24} className="text-[#00c2cb]" />
            </button>
          </div>
          
          {/* Botão próximo */}
          <div 
            className={`fixed-nav-button z-20 transition-opacity duration-300 ${
              showControls || windowWidth < 1024 ? 'opacity-70 hover:opacity-100' : 'opacity-0'
            }`}
            style={{
              position: 'absolute',
              top: `${topPosition}px`, // Altura 
              right: windowWidth < 640 ? '-10px' : '-40px' // Posicionamento 
            }}
          >
            <button 
              onClick={nextSlide}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all hover:shadow-lg"
              aria-label="Próximo serviço"
            >
              <ChevronRight size={24} className="text-[#00c2cb]" />
            </button>
          </div>
        </div>
        
        {/* Cards do carrossel */}
        <div className="flex justify-center items-stretch gap-4 md:gap-6 lg:gap-8 overflow-visible transition-transform duration-500 w-full">
          {getVisibleIndexes().map((index) => (
            <div 
              key={services[index].id}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 transition-all duration-300"
            >
              <div className="bg-[#eaeaea] rounded-3xl border border-solid border-[#b2f4f6] shadow overflow-hidden flex flex-col h-full">
                {/* Imagem do serviço */}
                <div className="h-56 sm:h-64 md:h-80 overflow-hidden">
                  <img 
                    src={services[index].image} 
                    alt={`Serviço: ${services[index].title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Ícone */}
                <div className="flex flex-col items-center -mt-8 relative z-10">
                  <div className="bg-white rounded-full p-3 border border-[#b2f4f6] shadow-sm mb-2">
                    <img 
                      src={services[index].icon} 
                      alt="Ícone flor" 
                      className="w-6 h-6"
                    />
                  </div>
                  
                  {/* Nome do serviço */}
                  <div className="bg-white rounded-3xl px-6 py-2 shadow-sm">
                    <h3 className="[font-family:'Playfair_Display',serif] font-bold text-[#00c2cb] text-xl md:text-2xl text-center">
                      {services[index].title}
                    </h3>
                  </div>
                </div>
                
                {/* Descrição principal */}
                <div className="px-5 sm:px-6 md:px-8 pt-2">
                  <p className="[font-family:'Poppins',sans-serif] text-sm md:text-base text-[#555555] leading-6">
                    {services[index].mainDescription}
                  </p>
                </div>
                
                {/* Bônus ou combos */}
                <div className="px-5 sm:px-6 md:px-8 mt-auto pb-6 sm:pb-8 pt-4 sm:pt-6">
                  {services[index].bonus && (
                    <>
                      <p className="[font-family:'Poppins',sans-serif] font-semibold text-[#00c2cb] text-sm md:text-base mb-2">
                        Bônus desse serviço:
                      </p>
                      <p className="[font-family:'Poppins',sans-serif] text-sm md:text-base text-[#555555]">
                        {services[index].bonus}
                      </p>
                    </>
                  )}
                  
                  {services[index].combos && (
                    <>
                      <p className="[font-family:'Poppins',sans-serif] font-semibold text-[#00c2cb] text-sm md:text-base mb-2">
                        Combos desse serviço:
                      </p>
                      <p className="[font-family:'Poppins',sans-serif] text-sm md:text-base text-[#555555]">
                        {services[index].combos}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicadores de slide (pontos) */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxStartingIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "w-6 bg-[#00c2cb]" 
                  : "w-2 bg-gray-300"
              }`}
              aria-label={`Ir para o grupo de serviços ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}