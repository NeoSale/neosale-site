# 📐 Estrutura do Projeto - NeoSale Site

Explicação detalhada da organização e propósito de cada pasta e arquivo.

## Visão Geral

```
neosale-site/
├── src/                    # Código-fonte principal
├── public/                 # Assets estáticos
├── docs/                   # Documentação
├── node_modules/           # Dependências (ignorado no git)
├── .next/                  # Build artifacts (ignorado no git)
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
├── next.config.ts          # Configuração Next.js
├── tailwind.config.js      # Configuração Tailwind CSS
├── .env.local              # Variáveis locais (ignorado)
├── .gitignore              # Arquivos ignorados pelo git
└── README.md               # Documentação principal
```

## Diretório `src/`

### `src/app/`

Next.js App Router - Define as rotas e páginas da aplicação.

```
src/app/
├── layout.tsx              # Layout raiz (envolve todas as páginas)
├── page.tsx                # Homepage (/)
├── error.tsx               # Página de erro global
├── not-found.tsx           # Página 404
├── contato/
│   └── page.tsx            # Página /contato
├── politica-de-privacidade/
│   └── page.tsx            # Página /politica-de-privacidade
├── termos-de-uso/
│   └── page.tsx            # Página /termos-de-uso
└── globals.css             # CSS global
```

#### `layout.tsx`

Layout raiz que envolve todas as páginas. Define estrutura HTML base.

```typescript
// Estrutura típica
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

#### `page.tsx`

Página homepage. Combina múltiplos components/sections.

```typescript
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </main>
  );
}
```

### `src/components/`

Componentes React reutilizáveis, organizados por tipo.

```
src/components/
├── layout/                 # Layouts principais
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── Sidebar.tsx
├── sections/               # Seções de página completa
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── FAQ.tsx
└── ui/                     # Componentes reutilizáveis
    ├── Button.tsx
    ├── Card.tsx
    ├── Input.tsx
    ├── Modal.tsx
    └── Badge.tsx
```

#### `layout/Header.tsx`

Cabeçalho global com navegação.

```typescript
'use client';

import { useState } from 'react';
import { Button } from '@neosale/ui';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">NeoSale</div>

        {/* Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          ☰
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6">
          <li><a href="/">Home</a></li>
          <li><a href="/contato">Contato</a></li>
          <li><a href="/politica-de-privacidade">Política</a></li>
        </ul>

        <Button variant="primary">Começar</Button>
      </nav>
    </header>
  );
}
```

#### `sections/Hero.tsx`

Seção hero (topo de página) com call-to-action.

```typescript
'use client';

import { motion } from 'framer-motion';
import { Button } from '@neosale/ui';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary mb-4">
          Automação de Vendas com IA
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Qualifique e feche leads 24/7 com agentes de IA inteligentes
        </p>
        <Button size="lg">Comece Agora</Button>
      </div>
    </motion.section>
  );
}
```

### `src/lib/`

Funções utilitárias e helpers reutilizáveis.

```
src/lib/
├── utils.ts                # Funções auxiliares (cn, formatDate, etc)
├── constants.ts            # Constantes (URLs, configs)
└── hooks.ts               # Custom React hooks
```

#### `utils.ts`

```typescript
// Merge de classes CSS (similar ao classnames)
export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// Formatar datas em português
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Validar email
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

#### `constants.ts`

```typescript
export const SITE_NAME = 'NeoSale';
export const SITE_DESCRIPTION = 'Automação de vendas com IA';
export const SITE_URL = 'https://neosale.com';

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/contato', label: 'Contato' },
  { href: '/politica-de-privacidade', label: 'Política' },
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/neosale',
  linkedin: 'https://linkedin.com/company/neosale',
  instagram: 'https://instagram.com/neosale',
};
```

### `src/styles/`

Configuração de CSS e Tailwind.

```
src/styles/
├── globals.css             # CSS global
├── tailwind.config.js      # Configuração Tailwind
└── theme.css              # Tema customizado (opcional)
```

#### `globals.css`

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-gray-900;
  }
}

@layer components {
  .container {
    @apply max-w-6xl mx-auto px-4;
  }

  .btn-primary {
    @apply bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition;
  }
}
```

#### `tailwind.config.js`

```javascript
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#403CCF',      // Roxo NeoSale
        secondary: '#FBFAFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
```

## Diretório `public/`

Assets estáticos servidos diretamente.

```
public/
├── images/                 # Imagens
│   ├── logo.svg
│   ├── hero.jpg
│   ├── features/
│   └── testimonials/
├── icons/                  # Ícones customizados
├── fonts/                  # Web fonts
└── videos/                # Vídeos (opcional)
```

### Acessando Assets

```typescript
// Imagem simples
<img src="/images/hero.jpg" alt="Hero" />

// Imagem Next.js optimizada
<Image src="/images/hero.jpg" alt="Hero" width={1200} height={600} />

// Ícone SVG
<img src="/icons/play.svg" alt="Play" className="w-8 h-8" />
```

## Diretório `docs/`

Documentação do projeto.

```
docs/
├── SETUP.md               # Setup detalhado
├── PROJECT-STRUCTURE.md   # Este arquivo
├── ENVIRONMENT.md         # Variáveis de ambiente
└── DEPLOYMENT.md          # Guia de deployment
```

## Arquivos de Configuração

### `tsconfig.json`

Configuração TypeScript com Next.js.

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "jsxImportSource": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

**Paths Disponíveis:**
```typescript
import Header from '@/components/layout/Header';   // ✅ Funciona
import Header from './components/layout/Header';   // ❌ Não use
```

### `next.config.ts`

Configuração Next.js.

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  // Rewrite para API
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3000/api/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
```

### `package.json`

Dependências e scripts.

```json
{
  "name": "neosale-site",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.15.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "eslint": "^8.0.0"
  }
}
```

## Padrões de Arquivo

### Nomes de Arquivo

```
✅ Correto:
- Header.tsx          (Componente)
- useAuth.ts          (Hook)
- constants.ts        (Constantes)
- utils.ts            (Utilidades)

❌ Evitar:
- header.tsx          (Não use lowercase para componentes)
- HeaderComponent.tsx (Não repita Component)
```

### Estrutura de Componente

```typescript
// 1. Imports
import { ReactNode } from 'react';
import { Button } from '@neosale/ui';
import { cn } from '@/lib/utils';

// 2. Types/Interfaces
interface HeaderProps {
  title: string;
  children?: ReactNode;
}

// 3. Componente
export function Header({ title, children }: HeaderProps) {
  return (
    <header className={cn('bg-white shadow')}>
      <h1>{title}</h1>
      {children}
    </header>
  );
}

// 4. Exports (se usar default, depois named)
export default Header;
```

## Fluxo de Desenvolvimento

```
1. Criar nova página
   └─ src/app/minha-pagina/page.tsx

2. Criar seção reutilizável
   └─ src/components/sections/MinhaSecao.tsx

3. Usar em page.tsx
   └─ import { MinhaSecao } from '@/components/sections';

4. Adicionar estilos
   └─ Usar Tailwind CSS classes

5. Testar
   └─ http://localhost:3000/minha-pagina
```

## Checklist de Setup

- [ ] Node.js 20+ instalado
- [ ] `npm install` executado
- [ ] `npm run dev` funcionando
- [ ] Browser abrindo http://localhost:3000
- [ ] TypeScript sem erros
- [ ] Tailwind CSS classes funcionando

---

**Próximos Passos:** Leia [SETUP.md](SETUP.md) para começar desenvolvimento.
