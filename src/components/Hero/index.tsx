import React from 'react';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">

      {/* Blob esquerdo - principal (responsivo) */}
      <div className="absolute top-0 left-0 z-0 w-/5 sm:w-2/5 md:w-1/3">

        <svg className="w-full h-auto" preserveAspectRatio="xMinYMin slice" width="500" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,0 C50,0 150,50 200,100 C250,150 300,250 300,350 C300,450 200,550 100,500 C0,450 -50,350 -50,250 C-50,150 -50,0 0,0Z"
            fill="#00C2CB"
          />
        </svg>
      </div>
      
      {/* Blob inferior - mais claro (responsivo) */}
      <div className="absolute bottom-0 right-0 z-0 w-full">
        
        <svg className="w-full h-auto" preserveAspectRatio="xMaxYMax slice" width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,400 C100,350 200,300 400,350 C600,400 700,300 800,200 C800,300 800,400 800,400 L0,400 Z"
            fill="#00C2CB"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Conteúdo principal */}

      <div className="relative z-10 flex flex-col lg:flex-row w-full min-h-screen">
        {/* Lado esquerdo - Logo e informações */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-10 pt-20 lg:pt-10">
          <div className="text-white max-w-md">
            {/* Logo NC */}
            <div className="text-center mb-6">
              <h2 className="text-4xl font-light italic">NC</h2>
              <h1 className="text-xl font-thin tracking-widest">NATHALIA CREDIDIO</h1>
              <div className="border-t border-white w-full my-2"></div>
              <p className="text-sm tracking-wider">studio</p>
            </div>
          </div>
        </div>
        
        {/* Lado direito - Imagem e título */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-50">
          {/* Imagem do estúdio - com cantos arredondados específicos */}
          <div className="mb-8 shadow-lg relative w-[700px] -mt-20">
            <div className="overflow-hidden" style={{
              borderTopLeftRadius: '20px',
              borderBottomRightRadius: '20px',
            }}>
              <img 
                src="src/assets/imagens/foto-studio01.jpeg" 
                alt="Estúdio Nathalia Credidio" 
                className="w-[700px] max-h-[400px] object-cover"
              />
            </div>
          </div>
          
          {/* Título e subtítulo */}
          <div className="mb-8 lg:mb-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-family mb-1 sm:mb-2">
              Sua beleza
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-family">
              é o melhor padrão
            </h3>
          </div>
          
          {/* Descrição */}
          <p className="text-gray-600 mb-5 lg:mb-5 text-sm sm:text-base">
            Estúdio especializado em tratamentos faciais, corporais e bem-estar
          </p>
          
          {/* Botão de agendamento */}
          <div className="flex justify-center sm:justify-start">

            <button className="bg-gradient-to-tr from-tiffany to-linearTiffany text-white font-medium py-2 sm:py-3 px-8 sm:px-10 rounded-full transition duration-300 text-sm sm:text-base">
              Agendar atendimento
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;