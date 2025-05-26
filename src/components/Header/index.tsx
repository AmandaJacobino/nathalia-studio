import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
        if (menuOpen) {
          setMenuOpen(false)
        }
      } else {
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlHeader)
    return () => window.removeEventListener('scroll', controlHeader)
  }, [lastScrollY, menuOpen])

  return (
    <section id="header">
      <header className={`w-full bg-gradient-to-r from-[#00c1cbdc] to-[#00c1cb8c] shadow-md px-4 py-4 sticky top-0 z-30 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex flex-col items-center justify-center sm:py-0  mx-auto sm:mx-0 ml-32">
            <img
              src="/src/assets/imagens/logo-nc-sem-fundo.png"
              alt="Logo Nathalia Credidio"
              className="h-12 w-auto"
            />
            <div className="flex flex-col items-center">
              <div className="text-white text-xl font-serif font-light leading-none mb-1">
                NATHALIA CREDIDIO
              </div>
              <div className="w-56 h-px bg-white mx-auto mb-1"></div>
              <div className="text-white text-xs tracking-[4px] uppercase font-extralight text-center w-full">
                studio
              </div>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <div className="relative">
            <div className="hidden sm:flex items-center gap-6">
              <nav className="flex items-center gap-6 text-white text-sm font-medium font-body">
                {['sobre', 'servicos', 'depoimentos', 'contato'].map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="hover:text-white transition-colors duration-300 relative group"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tiffany transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
              <a
                href="https://api.whatsapp.com/message/NXKDWYFV7D5UF1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-tiffany font-medium py-2.5 px-8 rounded-full transition duration-300 text-sm border-2 border-transparent hover:border-tiffany shadow-sm hover:shadow-md ml-4"
              >
                Agendar atendimento
              </a>
            </div>

            {/* MENU HAMBÚRGUER MOBILE */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative group z-50"
              >
                {menuOpen ? (
                  <X size={28} className="text-white group-active:text-tiffany transition-colors duration-300" />
                ) : (
                  <Menu size={28} className="text-white group-active:text-tiffany transition-colors duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MENU MOBILE DROPDOWN */}
        <div 
          className={`absolute left-0 right-0 bg-white shadow-lg rounded-b-lg transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4">
            <nav className="flex flex-col items-center gap-4 text-textColor text-lg font-medium font-body">
              {['sobre', 'servicos', 'depoimentos', 'contato'].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="relative group py-2 w-full text-center text-tiffany hover:text-tiffany transition-colors duration-300"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-tiffany transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="https://api.whatsapp.com/message/NXKDWYFV7D5UF1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 w-full group bg-gradient-to-tr from-tiffany to-linearTiffany text-white font-medium py-3 rounded-full transition duration-300 text-sm border-2 border-transparent hover:from-white hover:to-white hover:text-tiffany hover:border-tiffany shadow-md text-center"
              >
                Agendar atendimento
              </a>
            </nav>
          </div>
        </div>
      </header>
    </section>
  )
}
