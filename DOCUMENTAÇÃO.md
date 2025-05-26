# Documentação Técnica - Landing Page Nathalia Credidio Studio

## 1. Introdução

Este projeto foi desenvolvido como parte de um projeto de extensão universitária, com o objetivo de criar uma landing page institucional para o estúdio de beleza **Nathalia Credidio Studio**.

A landing page foi pensada com foco na marca do estúdio, e não exclusivamente na profissional Nathalia, considerando planos de expansão do negócio no futuro. O principal objetivo é promover o espaço, apresentar os serviços prestados, criar uma boa impressão e incentivar o agendamento.



## 2. Tecnologias Utilizadas

* **React**: Criação de componentes reutilizáveis para a interface.
* **TypeScript**: Tipagem estática para maior confiabilidade.
* **Vite**: Ferramenta moderna de build, com foco em desempenho.
* **Tailwind CSS**: Estilização responsiva com classes utilitárias.



## 3. Estrutura de Pastas

```bash
src/
├── assets/             # Imagens e elementos visuais
├── components/
│   ├── About/          # Seção sobre a Nathalia e o estúdio
│   ├── FAQ/            # Perguntas frequentes com layout interativo
│   ├── Footer/         # Rodapé com informações de contato e localização
│   ├── Header/         # Cabeçalho com navegação e botão de agendamento
│   ├── Hero/           # Destaque principal com imagens e frases-chave
│   ├── Services/       # Seção com carrossel de serviços
│   └── Testimonials/   # Depoimentos de clientes
├── App.tsx             # Componente principal da aplicação
└── main.tsx            # Ponto de entrada da aplicação.
```



## 4. Componentes Principais

### **Header**

*Caminho*
src/components/Header/index.tsx

*Função*
Exibe o cabeçalho principal com a logo da marca e o menu de navegação. O header é fixo no topo e esconde-se automaticamente ao rolar para baixo, reaparecendo ao rolar para cima. Possui menus adaptáveis para desktop e mobile.

### Estrutura
    Mobile (até 639px):
        Mostra apenas a logo centralizada e o botão de menu hambúrguer.
        Ao abrir o menu, um dropdown com fundo branco aparece, com links verticais:
        Sobre, Serviços, Depoimentos, Contato.
        Botão "Agendar atendimento" estilizado com gradiente.
        O menu dropdown fecha automaticamente ao clicar em qualquer link.

    Tablet/Desktop (a partir de 640px):
    
        Cabeçalho em flex com:
        Logo à esquerda (margem lateral customizada).
        Menu horizontal com espaçamento entre itens.
        Botão “Agendar atendimento” ao lado direito.
        Hover nos links ativa uma barra inferior animada (group-hover:w-full).

    Funcionalidades Dinâmicas
        Ocultar header ao rolar:
        
            Se o usuário rola a página para baixo e está além de 100px, o header se oculta com -translate-y-full.
            Se rola para cima, o header reaparece com translate-y-0.
            Esse comportamento é controlado pelo hook useEffect que escuta o scroll e compara o valor com lastScrollY.
        
        Menu mobile responsivo:
        
            O ícone alterna entre Menu (hambúrguer) e X (fechar).
            A transição do dropdown é animada com max-height e opacity.
            O botão usa z-50 para ficar acima dos demais elementos.

    Observações
       - A logo é centralizada em mobile e à esquerda no desktop.
       - O cabeçalho usa um gradiente de fundo from-[#00c1cbdc] to-[#00c1cb8c] e shadow-md.
       - A seção é identificada com o id: header.
       

---

### **Hero**

*Caminho*
src/components/Hero/index.tsx

*Função*
Exibe a seção principal da landing page com foco em causar boa impressão visual do estúdio, apresentar a identidade da marca e incentivar o agendamento de serviços. Contém um carrossel de imagens do estúdio, título, descrição e botões de ação.

### Estrutura

    Mobile (até 639px):
       - Carrossel com 1 imagem visível por vez.
       - Botões de navegação sempre visíveis.
       - Indicadores de slide posicionados abaixo da imagem.
       - Título centralizado: "Sua beleza é o melhor padrão".
       - Parágrafo descritivo abaixo do título.
        
    Dois botões:
       - Agendar atendimento (link para WhatsApp).
       - Conheça nossos serviços (âncora para a seção de serviços).
    
    Tablet (640px a 1023px):
       - Carrossel ocupa 90% da largura.
       - Altura da imagem adaptada para sm:h-64.
       - Botões e indicadores funcionam da mesma forma que no mobile.
    
    Desktop (a partir de 1024px):
       - Carrossel com largura fixa (lg:w-[700px]) e altura lg:h-[400px].
       - Botões de navegação só aparecem ao passar o mouse (md:opacity-0 com hover).
       - Elemento decorativo em forma de blob azul posicionado com absolute no canto inferior direito.
       - Título e parágrafo com tamanhos ampliados.
    
    Botões centralizados, com hover diferenciado:
       - Gradiente para Agendar atendimento.
       - Inversão de cores para Conheça nossos serviços.
    
    Observações
       - O carrossel é controlado por useState, e troca as imagens com os botões ou indicadores.
       - As imagens estão na pasta src/assets/imagens/.
       - Os botões usam estilos com gradientes (from-tiffany to-linearTiffany) e efeitos de hover.
       - As fontes utilizadas são Playfair Display para os títulos e Inter para os textos.
       - O carrossel possui transição suave na troca de imagens.
       - A imagem visível recebe uma transição com transition-opacity duration-500.
       - O botão “Agendar atendimento” abre o WhatsApp com link pré-formatado.
       - A âncora “Conheça nossos serviços” navega até a seção com id #servicos.

---

### **About**

*Caminho*
src/components/About/index.tsx

*Função*
Apresenta a fundadora do estúdio, Nathalia, e mostra imagens do espaço físico. É responsivo, com versões adaptadas para mobile e desktop.


### Estrutura

    *Mobile (md:hidden):*

        - Foto da Nathalia.
        - Título com destaque no nome e boas-vindas.
        - Descrição da atuação profissional.
        - Galeria com 3 imagens do estúdio.

    *Desktop (md:flex):*

        - Coluna esquerda: Título e galeria de imagens.
        - Coluna direita: Foto da Nathalia e parágrafo descritivo.
        - Elemento decorativo: Flor opaca posicionada com absolute no fundo direito.

    *Observações*

        - As fontes são customizadas com Playfair Display e Inter.

    *Imagens estão na pasta src/assets/imagens/.*

    *A seção é identificada com o id: sobre.*
    
---

### **Services**

*Caminho*
src/components/Services/index.tsx

*Função*
Exibe um carrossel com os principais serviços oferecidos pelo estúdio. A navegação entre os serviços é feita por botões laterais ou indicadores de slide. O componente é responsivo, adaptando o número de cards visíveis conforme a largura da tela.

### Estrutura

    *Mobile (até 639px):*
       - Título e subtítulo centralizados.
       - Apenas 1 card visível por vez.
       - Botões de navegação são sempre visíveis.
       - Indicadores de slide abaixo dos cards.

    *Tablet (640px a 1023px):*
       - Exibe 2 cards por vez.
       - Botões de navegação são sempre visíveis.
       - Indicadores ajustados conforme a quantidade de slides visíveis.
    
    *Desktop (a partir de 1024px):*
       - Exibe 3 cards por vez.
       - Botões de navegação aparecem apenas ao passar o mouse sobre o carrossel.
       - Indicadores permanecem visíveis abaixo dos cards.

    *Observações*
       - O número de cards visíveis é calculado dinamicamente com base na largura da janela.
       - Cada card de serviço contém:
       - Imagem do serviço.
       - Ícone centralizado.
       - Nome do serviço.
       

*Descrição principal.*
   -  Campos opcionais: bônus e combos.
   - Ao clicar nos pontos indicadores, o carrossel é reposicionado.
   - A posição vertical dos botões de navegação é ajustada automaticamente.
   - As fontes utilizadas são Playfair Display para os títulos e Inter para os textos.
   - A seção é identificada com o id: servicos.
   - As imagens utilizadas estão na pasta src/assets/imagens/.

*Estados e Refs*
   - Estado / Ref	Tipo	Descrição
   - currentIndex	number	Índice do primeiro serviço exibido no carrossel.
   - showControls	boolean	Determina se os botões de navegação devem estar visíveis.
   - windowWidth	number	Armazena a largura atual da janela.
   - topPosition	number	Posição vertical dos botões de navegação.
   - carouselRef	useRef<HTMLElement>	Referência ao container principal do carrossel. Usado para detectar mouseenter e mouseleave.

*Lógica interna*
   -  services: array de objetos com informações dos serviços, como imagem, descrição, bônus, combos, etc.
   - useEffect(handleResize): escuta alterações na largura da janela e define o número de cards visíveis e a posição dos botões.
   - useEffect(carousel mouse events): mostra ou esconde os botões ao passar o mouse no carrossel (apenas para telas grandes).
   - getVisibleCards(): determina quantos cards devem ser mostrados com base na largura da tela.
   - maxStartingIndex: calcula o maior índice inicial possível (para evitar que sobrem espaços vazios).
   - nextSlide() / prevSlide(): avançam ou retrocedem os slides.
   - getVisibleIndexes(): retorna os índices dos cards que devem estar visíveis atualmente.
   - isIndexVisible(index): verifica se o índice fornecido está sendo exibido.
    
*Estilo*
   - Responsividade com breakpoints (sm, md, lg).
   - Transições suaves nos botões e nos slides.
   - Cores específicas do branding (#00c2cb e #eaeaea).
   - Fontes customizadas (Playfair Display e Inter).

*Acessibilidade*
   - Cada botão de navegação e slide indicador possui aria-label descritivo.
   - O uso de alt nas imagens garante descrição visual acessível.

*Dependências externas*
   - react, react-dom
   - lucide-react → ícones ChevronLeft e ChevronRight

---

### **Testimonials**

*Caminho*
src/components/Testimonials/index.tsx

*Função*
Exibe depoimentos de clientes que já passaram pelo estúdio, reforçando a credibilidade e a qualidade dos serviços. A seção é responsiva, adaptando-se para visualização em dispositivos móveis e desktops.

### Estrutura

    *Mobile (md:grid-cols-1):*
    
    *Título “Depoimentos” centralizado.*
       - Subtítulo “O que nossos clientes estão dizendo”.
       - Lista de depoimentos em uma única coluna.
    
    *Cada depoimento contém:*
      -  Texto do cliente (itálico e justificado).
      -  Avatar circular da cliente.
      -  Nome em destaque.
      -  Avaliação com 5 estrelas.
    
    *Desktop (md:grid-cols-2):*
      -  Layout com duas colunas de depoimentos.
      -  Títulos com destaque tipográfico.
      -  Cards de depoimento com espaçamento e sombra ao passar o mouse.
      -  Avatar maior com borda destacada.
    
    *Elemento decorativo:*
       - Imagem de uma flor opaca posicionada no fundo esquerdo, com absolute, sem interferência na interação (usando pointer-events-none).

    *Observações*
        - As fontes utilizadas são Playfair Display e Inter.
        - Os depoimentos estão definidos como objetos TypeScript no próprio arquivo.
        - As estrelas de avaliação são imagens repetidas 5 vezes por cliente.
        - Todas as imagens estão na pasta: src/assets/imagens/.
        - A seção é identificada com o id: depoimentos.
---

### **FAQ**

*Caminho*
src/components/FAQ/index.tsx

*Função*
Exibe uma lista de perguntas frequentes relacionadas aos serviços prestados pelo estúdio, com respostas expansíveis.

*Lógica*
Uso de useState para controlar qual pergunta está aberta.

*Ao clicar em uma pergunta:*
    - Se estiver fechada, abre.
    - Se estiver aberta, fecha.

### Estrutura

    *Título centralizado.*
        - Cada pergunta é um botão com animação de expansão.
        - Ao abrir, a resposta aparece abaixo com animação de transição (animate-fadeIn).
    
    *Props/Estado*
        Estado interno:
    
    *openIndex*
        número da pergunta atualmente aberta (ou null).
    
    *Observações*
        - O ícone de seta muda visualmente conforme o estado da pergunta.
---

### **Footer**

*Caminho*
src/components/Footer/index.tsx

*Função*
Renderiza o rodapé da landing page com informações de contato e localização.

### Estrutura

    Mapa (Google Maps) com localização do estúdio.
    
    *Informações centrais:*
        - Horário de atendimento.
        - Endereço.
        - Coluna de contatos e redes sociais.
        - Copyright e direitos de uso. 
    
    *Estilo*
        - Fundo com gradiente from-[#00c2cb] to-[#00c2cb].
        - Ícones SVG para horário e localização.
        - Tipografia com Inter.

    *Observações*
        - O ano é atualizado automaticamente via new Date().getFullYear().
        - Layout responsivo com grid.
---

## 5. Estilização
A estilização da landing page foi feita utilizando exclusivamente o Tailwind CSS, priorizando responsividade, acessibilidade e consistência visual.

### Padrões de Estilo

*Cores principais:*
    - card: '#EAEAEA',
    - linearTiffany: '#00E0E4',
    - tiffany: '#00C2CB',
    - white: '#FFFFFF',
    - textColor: '#444444',

*Fontes:*
   - Títulos: Playfair Display
   - Textos e subtítulos: Inter

*Breakpoints responsivos:*
   - sm: 640px
   - md: 768px
   - lg: 1024px

*Animações e transições:*
   - Utilizadas em menus, carrosséis, botões e colapsos.
   - Clases como transition-all, duration-300, ease-in-out, animate-fadeIn.

Elementos decorativos:
   - Blobs e flores opacas com absolute e pointer-events-none.
   - Evita interferência com interações do usuário.

Botões:
   - Estilizados com gradientes e hover: interativo.
   - Espaçamento e cantos arredondados com px-4 py-2 rounded-lg.
---
## 6. Boas Práticas
Durante o desenvolvimento, foram seguidas práticas recomendadas de organização e manutenção de código:

*Componentização:*
   - Cada seção possui seu próprio componente.
   - Facilita manutenção e reuso.

*Semântica:*
   - Uso de section, header, main, footer, nav, entre outras tags semânticas para acessibilidade.

*Responsividade:*
   - Layouts otimizados para mobile-first.
   - Testes em diferentes tamanhos de tela.

*Acessibilidade:*
   - Uso de alt em todas as imagens.
   - Botões e navegação com aria-label apropriados.

*Manutenção:*
   - Códigos organizados com indentação clara.
   - Comentários descritivos apenas onde necessário.
---
## 7. Considerações Finais
A landing page do Nathalia Credidio Studio foi desenvolvida com foco em clareza, estética e eficiência. O objetivo principal foi transmitir confiança e acolhimento, refletindo a proposta do estúdio e incentivando novos agendamentos.
Todos os elementos foram pensados para serem facilmente escaláveis, possibilitando a ampliação futura de serviços.
---
## 8. Direitos Autorais

Todo o conteúdo visual e textual da landing page pertence à marca Nathalia Credidio Studio. O código-fonte é reservado exclusivamente para uso interno do projeto de extensão e não deve ser utilizado comercialmente sem autorização da responsável pela marca.
---

Fim do documento.
