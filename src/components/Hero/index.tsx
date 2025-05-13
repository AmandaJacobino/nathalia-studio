import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  {/* Array das imagens para o carrossel */} 
  const images = [
    "src/assets/imagens/foto-studio01.jpeg",
    "src/assets/imagens/foto-studio02.jpeg",
    "src/assets/imagens/foto-studio03.jpeg",

  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full bg-white relative overflow-hidden pb-2.5">
      {/* Blob inferior */}
      <div className="absolute bottom-0 right-0 z-0 w-full translate-y-[20px] ">
        <svg
          className="w-full h-auto"
          preserveAspectRatio="xMaxYMax slice"
          width="600"
          height="400"
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,400 C100,350 200,300 400,350 C600,400 700,300 800,200 C800,300 800,400 800,400 L0,400 Z"
            fill="#00C2CB"
          />
        </svg>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center py-6 sm:py-10 lg:py-12">
        <div className="w-full flex flex-col justify-center p-6 sm:p-8 lg:p-12">
          {/* Carrossel de Imagens */}
          <div 
            className="mb-6 shadow-lg relative w-full sm:w-[90%] md:w-[80%] lg:w-[700px] mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              className="overflow-hidden relative"
              style={{
                borderTopLeftRadius: '20px',
                borderBottomRightRadius: '20px',
              }}
            >
              <div className="relative">
                <img
                  src={images[currentIndex]}
                  alt={`Estúdio Nathalia Credidio - Slide ${currentIndex + 1}`}
                  className="w-full h-56 sm:h-64 md:h-80 lg:h-[400px] object-cover transition-opacity duration-500"
                />
                
                {/* Botões de navegação - aparecem no hover em desktop, sempre visíveis em mobile */}
                <div className={`absolute inset-0 flex justify-between items-center px-4 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'md:opacity-0 opacity-100'}`}>
                  {/* Anterior */}
                  <button 
                    onClick={prevSlide}
                    className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-1 sm:p-2 transition-all duration-300"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                  </button>
                  
                  {/* Próximo */}
                  <button 
                    onClick={nextSlide}
                    className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-1 sm:p-2 transition-all duration-300"
                    aria-label="Próximo slide"
                  >
                    <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                  </button>
                </div>
                
                {/* Indicadores de slide */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Título */}
          <div className="mb-4 lg:mb-5 text-center">
            <h2 className="font-title font-light text-3xl sm:text-4xl lg:text-5xl text-gray-700 tracking-wide">
              Sua beleza é o melhor padrão
            </h2>
          </div>

          {/* Parágrafo */}
          <p className="text-gray-600 mb-4 lg:mb-5 text-sm sm:text-base text-center">
            Estúdio especializado em tratamentos faciais, corporais e bem-estar
          </p>

          {/* Botões */}
          <div className="flex justify-center items-center gap-4 flex-wrap mb-8 sm:mb-10 lg:mb-12">
            {/* Agendar Atendimento */}
            <button className="group bg-gradient-to-tr from-tiffany to-linearTiffany text-white font-medium py-2 sm:py-3 px-8 sm:px-10 rounded-full transition duration-300 text-sm sm:text-base border-2 border-transparent hover:from-white hover:to-white hover:text-tiffany hover:border-tiffany">
              Agendar atendimento
            </button>

            {/* Conheça nossos serviços */}
            <button className="bg-white text-tiffany font-medium py-2 sm:py-3 px-8 sm:px-10 rounded-full transition duration-300 text-sm sm:text-base border-2 border-tiffany hover:bg-gradient-to-tr hover:from-tiffany hover:to-linearTiffany hover:text-white hover:border-transparent">
              Conheça nossos serviços
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;