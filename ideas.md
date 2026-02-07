# Ideias de Design - RL Manutenções

## Abordagem Escolhida: Industrial Corporativo Moderno

### Design Movement
**Industrial Moderno com Toque Corporativo Sofisticado** - Inspirado em empresas de engenharia e manutenção de alto padrão. Combina elementos técnicos com elegância corporativa, transmitindo confiança, expertise e profissionalismo.

### Core Principles
1. **Autoridade Técnica**: Design que comunica expertise e confiabilidade através de tipografia clara, espaçamento generoso e hierarquia visual bem definida.
2. **Clareza Operacional**: Cada seção é um módulo bem delimitado, refletindo a precisão necessária em operações industriais.
3. **Profundidade Sutil**: Uso de sombras suaves, gradientes discretos e sobreposições para criar dimensão sem parecer excessivo.
4. **Acessibilidade Corporativa**: Design responsivo que funciona perfeitamente em desktop, tablet e mobile, com navegação intuitiva.

### Color Philosophy
- **Primária**: Azul Marinho Escuro (`#0F172A` / `#1E293B`) - Transmite confiança, estabilidade e profissionalismo. Usado em headers, títulos principais e elementos estruturais.
- **Secundária**: Ciano/Verde Água (`#06B6D4` / `#00D9FF`) - Cores de CTA e destaque. Representa energia, inovação e ação. Usada em botões de WhatsApp e chamadas à ação.
- **Fundo**: Branco puro (`#FFFFFF`) para seções claras, alternando com Cinza Azulado muito claro (`#F8FAFC`) para criar ritmo visual.
- **Seções Escuras**: Azul Marinho com gradiente sutil para criar contraste e profundidade em seções de destaque.
- **Texto**: Cinza Escuro (`#1E293B`) em fundos claros, Branco (`#FFFFFF`) em fundos escuros.

### Layout Paradigm
- **One-Page com Seções Modulares**: Navegação por âncoras, cada seção é um "bloco" independente com altura variável.
- **Assimetria Controlada**: Alternância entre layouts full-width e conteúdo centralizado. Imagens industriais à esquerda/direita em seções alternadas.
- **Grid Responsivo**: 1 coluna mobile, 2-3 colunas desktop, com cards de serviços em grid 2x2 ou 1x4 conforme espaço.
- **Sticky Header**: Navigation fixa no topo com logo, menu e botão WhatsApp.
- **Floating CTA**: Botão WhatsApp flutuante no canto inferior direito, sempre acessível.

### Signature Elements
1. **Ícones Técnicos Minimalistas**: Ícones em linha fina (stroke) representando cada especialidade (engrenagem para mecânica, cilindro para hidráulica, etc.). Cor primária com hover em ciano.
2. **Dividers Geométricos**: Linhas diagonais sutis ou formas geométricas simples separando seções, reforçando a identidade técnica.
3. **Badges de Credibilidade**: Pequenos elementos visuais (ex: "Especialistas Certificados", "Garantia Total") com ícones, criando confiança.

### Interaction Philosophy
- **Hover Effects Sofisticados**: Cards de serviço com elevação sutil (shadow), mudança de cor de fundo e ícone em ciano ao passar o mouse.
- **Scroll Animations**: Elementos aparecem com fade-in ou slide-up suave conforme o usuário rola a página.
- **CTA Responsivos**: Botões com transição de cor, ícone animado (ex: WhatsApp pulsando) para chamar atenção.
- **Feedback Visual**: Cliques em botões geram feedback tátil (toast ou mudança de cor) confirmando a ação.

### Animation
- **Entrance Animations**: Seções e cards entram com fade-in + slide-up (200-300ms) ao scrollar para a viewport.
- **Hover Transitions**: 200-250ms para mudanças de cor, elevação e escala em elementos interativos.
- **Floating CTA**: Botão WhatsApp com pulso suave (opacity 0.8 → 1.0) a cada 2s, chamando atenção sem ser agressivo.
- **Scroll Parallax Sutil**: Imagens de fundo se movem levemente diferente do conteúdo, criando profundidade.

### Typography System
- **Display Font**: Fonte sem serifa moderna e robusta (ex: `Poppins` bold 700 ou `Montserrat` bold 700) para títulos principais e seções. Tamanho: 2.5rem-3.5rem desktop, 1.75rem-2.25rem mobile.
- **Heading Font**: `Poppins` semi-bold 600 ou `Roboto` 600 para subtítulos e headings secundários. Tamanho: 1.5rem-2rem desktop, 1.25rem-1.5rem mobile.
- **Body Font**: `Inter` regular 400-500 para corpo de texto. Tamanho: 1rem desktop, 0.95rem mobile. Line-height: 1.6 para legibilidade.
- **Accent Font**: `Poppins` medium 500 para CTAs, badges e destaques. Tamanho: 0.875rem-1rem.
- **Hierarchy**: Títulos em azul marinho escuro, subtítulos em cinza médio, corpo em cinza escuro, CTAs em branco sobre ciano.

---

## Implementação
Este design será implementado através de:
- Tailwind CSS 4 com tokens de cor customizados em `index.css`.
- Componentes React reutilizáveis com shadcn/ui onde aplicável.
- Imagens geradas com IA para hero section e seções de destaque.
- Ícones do Lucide React para especialidades e credenciais.
- Animações com Framer Motion para entrance e hover effects.
