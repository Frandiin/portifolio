# 💼 Portfólio - Wellington Frandin

> Portfólio moderno e responsivo apresentando minha jornada como Desenvolvedor Full Stack, construído com tecnologias de ponta e melhores práticas.

## ✨ Funcionalidades

- 🌐 **Internacionalização (i18n)** - Suporte completo para Português e Inglês com detecção automática de idioma
- 🎨 **UI/UX Moderna** - Design elegante com animações suaves powered by Framer Motion
- 📱 **Totalmente Responsivo** - Otimizado para todos os dispositivos (mobile, tablet, desktop)
- ⚡ **Alta Performance** - Construído com Vite para desenvolvimento ultra-rápido e builds de produção otimizados
- 🎯 **Otimizado para SEO** - Estruturado para melhor visibilidade em mecanismos de busca
- ♿ **Acessível** - Seguindo diretrizes WCAG para design inclusivo
- 🔄 **Conteúdo Dinâmico** - Componentes de texto expansível com funcionalidade "Ler mais/menos"
- 📊 **Pronto para Analytics** - Integrado com Vercel Analytics para insights

## 🚀 Stack Tecnológica

### Frontend

- **React 19.2** - Versão mais recente com hooks e recursos modernos
- **TypeScript** - Desenvolvimento type-safe
- **Vite** - Ferramenta de frontend de próxima geração
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animação production-ready

### Internacionalização

- **i18next** - Framework de internacionalização
- **react-i18next** - Integração React para i18next
- **i18next-browser-languagedetector** - Detecção automática de idioma

### UI & Ícones

- **Lucide React** - Conjunto de ícones bonito e consistente
- **React Icons** - Biblioteca de ícones popular

### Qualidade de Código

- **ESLint** - Linting e aplicação de qualidade de código
- **Prettier** - Formatação de código com plugin Tailwind
- **TypeScript ESLint** - Regras de linting específicas para TypeScript

## 📂 Estrutura do Projeto

```
portfolio/
├── public/
│   ├── cv.pdf              # CV em Português
│   ├── cv_en.pdf           # CV em Inglês
│   └── [imagens-projetos]  # Screenshots dos projetos
├── src/
│   ├── components/         # Componentes React
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── ExpandableText.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── RichText.tsx
│   │   └── TechStack.tsx
│   ├── constants/
│   │   └── index.ts        # Dados dos projetos & constantes
│   ├── locales/
│   │   ├── en.json         # Traduções em Inglês
│   │   └── pt.json         # Traduções em Português
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🛠️ Instalação & Configuração

### Pré-requisitos

- Node.js (v18 ou superior)
- pnpm (recomendado) ou npm

### Passos

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Frandiin/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**

   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Build para produção**

   ```bash
   pnpm build
   # ou
   npm run build
   ```

5. **Preview do build de produção**
   ```bash
   pnpm preview
   # ou
   npm run preview
   ```

## 📜 Scripts Disponíveis

| Comando        | Descrição                                                     |
| -------------- | ------------------------------------------------------------- |
| `pnpm dev`     | Inicia servidor de desenvolvimento em `http://localhost:5173` |
| `pnpm build`   | Build para produção (output: `dist/`)                         |
| `pnpm preview` | Preview do build de produção localmente                       |
| `pnpm lint`    | Executa ESLint para verificar qualidade do código             |

## 🌍 Internacionalização

O portfólio suporta múltiplos idiomas com detecção automática baseada nas preferências do navegador. Para adicionar um novo idioma:

1. Crie um novo arquivo JSON em `src/locales/` (ex.: `es.json`)
2. Copie a estrutura de `en.json` ou `pt.json`
3. Traduza todas as chaves
4. Importe e configure no seu setup de i18n

### Alternância de Idioma

Os usuários podem alternar manualmente entre idiomas usando o seletor de idioma na barra de navegação.

## 🎨 Customização

### Atualizar Informações Pessoais

Edite `src/constants/index.ts` para atualizar:

- Projetos
- Experiência
- Stack tecnológica
- Informações de contato

### Modificar Traduções

Edite os arquivos em `src/locales/`:

- `pt.json` - Traduções em Português
- `en.json` - Traduções em Inglês

### Alterar Cores do Tema

Modifique `tailwind.config.js` para customizar a paleta de cores.

## 📊 Componentes Principais

### ExpandableText

Componente de texto inteligente que detecta automaticamente overflow e mostra botões "Ler mais/menos":

- Line clamp configurável
- Animações suaves de expandir/recolher
- Detecção de overflow responsiva

### RichText

Componente com suporte a i18n para renderizar conteúdo traduzido com suporte para:

- Interpolação de texto dinâmica
- Composição de componentes (negrito, links, etc.)
- Chaves de tradução type-safe

### Projects

Seção de showcase com:

- Containers de tags com altura fixa para alinhamento consistente
- Descrições expansíveis
- Links para demo ao vivo e GitHub
- Layout em grid responsivo

## 🚀 Deploy

Este projeto está otimizado para deploy em:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- Qualquer serviço de hospedagem estática

### Deploy na Vercel

```bash
pnpm build
vercel --prod
```

## 📝 Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).

## 👤 Autor

**Wellington Frandin**

- LinkedIn: [@wellington-frandin](https://www.linkedin.com/in/wellington-frandin/)
- GitHub: [@Frandiin](https://github.com/Frandiin)
- Email: wellingtonfrandin@gmail.com

## 🙏 Agradecimentos

- Ícones por [Lucide](https://lucide.dev/)
- Animações por [Framer Motion](https://www.framer.com/motion/)
- Inspiração de UI de tendências de design moderno

---

⭐ Se este portfólio foi útil para você, considere dar uma estrela!
