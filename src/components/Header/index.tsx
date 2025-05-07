import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-card shadow-sm px-4 py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-end">

        {/* Menu desktop */}
        <div className="hidden sm:flex justify-between items-center gap-[30px]">
          <nav className="flex items-center gap-[15px] text-textColor text-sm font-medium font-body">
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#servicos" className="hover:underline">Serviços</a>
            <a href="#depoimentos" className="hover:underline">Depoimentos</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
          <button className="px-10 py-4 rounded-3xl bg-gradient-to-tr from-tiffany to-linearTiffany text-white text-sm font-semibold font-body">
            Agendar atendimento
          </button>
        </div>

        {/* Botão hambúrguer */}
        {!menuOpen && (
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="relative group z-50"
            >
              <span className="absolute inset-0 rounded-full scale-0 group-active:scale-150 bg-white transition-transform duration-500 ease-out"></span>
              <Menu
                size={28}
                className="relative z-10 text-tiffany group-active:text-white transition-colors duration-300"
              />
            </button>
          </div>
        )}
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-start pt-[160px] gap-6 p-6 animate-slideIn">

          {/* Faixa Tiffany com Logo e Nome */}
          <div className="fixed top-0 left-0 w-full h-[180px] bg-gradient-to-tr from-tiffany to-linearTiffany flex flex-col items-center justify-center px-4">
            <img
              src="/src/assets/imagens/logo-nc-sem-fundo.png"
              alt="Logo NC"
              className="w-[91px] h-[79px] object-contain ml-6"
            />
            <div className="text-white text-3xl font-serif font-light leading-none">
              NATHALIA CREDIDIO
            </div>
            <div className="text-white text-sm tracking-[3px] uppercase font-light mt-1">
              studio
            </div>
          </div>

          {/* Botão fechar */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 z-50 group"
          >
            <span className="absolute inset-0 rounded-full scale-0 group-active:scale-150 bg-white transition-transform duration-500 ease-out"></span>
            <X
              size={28}
              className="relative z-10 text-tiffany group-active:text-white transition-colors duration-300"
            />
          </button>

          {/* Itens do menu */}
          <nav className="flex flex-col items-center gap-4 text-textColor text-lg font-medium font-body mt-20">
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
            <a href="#depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>

          {/* Botão agendar */}
          <button
            className="mt-10 px-8 py-3 rounded-3xl bg-gradient-to-tr from-tiffany to-linearTiffany text-white text-sm font-semibold font-body"
            onClick={() => setMenuOpen(false)}
          >
            Agendar atendimento
          </button>
        </div>
      )}
    </header>
  )
}
