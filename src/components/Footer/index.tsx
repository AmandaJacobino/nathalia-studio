import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-r from-[#00c2cb] to-[#00c2cb] text-white">
      <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Mapa */}
          <div className="flex justify-center md:justify-start">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0249876991747!2d-47.45894742391588!3d-23.498621259686637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58abceb48f303%3A0xe3cea33527536979!2sR.%20Catalunha%2C%20212%20-%20Vila%20Hortencia%2C%20Sorocaba%20-%20SP%2C%2018020-268!5e0!3m2!1spt-BR!2sbr!4v1716084847957!5m2!1spt-BR!2sbr" 
              className="w-full h-52 max-w-xs rounded-md shadow-md border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do estúdio"
            ></iframe>
          </div>

          {/* Coluna central - Horário e Endereço */}
          <div className="space-y-8">
            {/* Horário de Atendimento */}
            <div className="flex">
              <svg className="w-6 h-6 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="[font-family:'Poppins',sans-serif] font-medium text-base mb-1">
                  Horário de Atendimento
                </h3>
                <p className="[font-family:'Poppins',sans-serif] font-normal text-sm">
                  Seg a Sex: 9h às 18h
                </p>
                <p className="[font-family:'Poppins',sans-serif] font-normal text-sm">
                  Sábado: 9h às 15h
                </p>
              </div>
            </div>

            {/* Endereço */}
            <div className="flex">
              <svg className="w-6 h-6 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="[font-family:'Poppins',sans-serif] font-medium text-base mb-1">
                  Endereço
                </h3>
                <p className="[font-family:'Poppins',sans-serif] font-normal text-sm">
                  Rua Catalunha, 212, <br />
                  Vila Hortencia - Sorocaba/SP
                </p>
              </div>
            </div>
          </div>

          {/* Coluna direita - Contatos */}
          <div className="space-y-8">
            {/* WhatsApp */}
            <div className="flex">
              <svg className="w-6 h-6 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              <div>
                <h3 className="[font-family:'Poppins',sans-serif] font-medium text-base mb-1">
                  WhatsApp
                </h3>
                <p className="[font-family:'Poppins',sans-serif] font-normal text-sm">
                  (00) 0000-0000
                </p>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex">
              <svg className="w-6 h-6 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="[font-family:'Poppins',sans-serif] font-medium text-base mb-1">
                  E-mail
                </h3>
                <p className="[font-family:'Poppins',sans-serif] font-normal text-sm">
                  nahcredidio@gmail.com
                </p>
              </div>
            </div>

            {/* Aviso importante */}
            <div className="flex">
              <svg className="w-6 h-6 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="[font-family:'Poppins',sans-serif] font-semibold text-base">
                Atendimento com hora marcada.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center mt-10">
          <svg className="w-3 h-3 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
          <p className="[font-family:'Poppins',sans-serif] font-normal text-xs opacity-70">
            {currentYear} Nathalia Credidio Studio - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}