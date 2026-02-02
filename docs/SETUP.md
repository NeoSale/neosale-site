# 🛠️ Setup Detalhado - NeoSale Site

Guia completo para configurar o ambiente de desenvolvimento.

## Pré-requisitos

### Sistema Operacional
- Windows 10+, macOS 11+, ou Linux (Ubuntu 20.04+)
- Terminal/Shell: PowerShell (Windows), Bash/Zsh (Mac/Linux)

### Ferramentas Necessárias

```bash
# Node.js versão 20.x ou superior
node --version    # v20.x.x

# npm versão 10.x ou superior
npm --version     # 10.x.x

# Git 2.30+
git --version     # 2.30+
```

## Instalação Completa

### 1. Clone o Repositório

```bash
# Do monorepo root
cd neosale-site
```

### 2. Instale Dependências

```bash
npm install
```

Se encontrar erros de permissão ou conflito:

```bash
# Limpe cache
npm cache clean --force

# Remova node_modules
rm -rf node_modules
rm package-lock.json

# Reinstale
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie arquivo `.env.local` na raiz do projeto:

```bash
# Desenvolvimento (sem variáveis obrigatórias)
# Este arquivo é ignorado pelo git por segurança
```

Para produção, veja [ENVIRONMENT.md](ENVIRONMENT.md)

### 4. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Output esperado:
```
▲ Next.js 15.1.0
- Local:        http://localhost:3000
- Environment:  .env.local

✓ Ready in 2.5s
```

Abra `http://localhost:3000` no navegador.

## Estrutura de Pastas

```
neosale-site/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Layout raiz
│   │   ├── page.tsx         # Homepage
│   │   ├── contato/
│   │   │   └── page.tsx
│   │   ├── politica-de-privacidade/
│   │   │   └── page.tsx
│   │   └── termos-de-uso/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── ...
│   │   └── ui/              # Componentes @neosale/ui
│   ├── lib/
│   │   ├── utils.ts         # Funções auxiliares
│   │   └── constants.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── tailwind.config.js
│   └── public/
│       ├── images/
│       └── fonts/
├── package.json
├── tsconfig.json
├── next.config.ts
└── .env.local              # Local apenas (git-ignored)
```

## Padrões de Código

### Componentes React

```typescript
// src/components/sections/Hero.tsx
'use client';  // Client-side component

import { Button } from '@neosale/ui';

interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">{title}</h1>
        <p className="text-xl text-gray-600 mt-4">{subtitle}</p>
        <Button className="mt-8">Começar</Button>
      </div>
    </section>
  );
}
```

### Pages (App Router)

```typescript
// src/app/contato/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato | NeoSale',
  description: 'Entre em contato com nossa equipe',
};

export default function ContatoPage() {
  return (
    <main>
      {/* Conteúdo */}
    </main>
  );
}
```

### Utilities

```typescript
// src/lib/utils.ts
export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
```

## Desenvolvendo Localmente

### Adicionando Nova Página

```bash
# 1. Crie diretório
mkdir -p src/app/sua-pagina

# 2. Crie page.tsx
cat > src/app/sua-pagina/page.tsx << 'EOF'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sua Página | NeoSale',
};

export default function SuaPaginaPage() {
  return <main>Conteúdo aqui</main>;
}
EOF

# 3. Acesse http://localhost:3000/sua-pagina
```

### Modificando Componentes

```bash
# 1. Edite o componente
# src/components/sections/Hero.tsx

# 2. Save & refresh automático (Hot Module Replacement)
# O navegador recarrega automaticamente
```

### Importando Componentes da UI Library

```typescript
import { Button, Modal, Card, Badge, Input, Spinner } from '@neosale/ui';
```

## Troubleshooting

### Erro: "Cannot find module '@neosale/ui'"

**Causa:** node_modules corrompido ou fora de sync

**Solução:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Erro: "Port 3000 already in use"

**Solução:**
```bash
# Windows (PowerShell)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>

# Ou usar porta alternativa
npm run dev -- -p 3001
```

### Next.js build lento

**Solução:**
```bash
# Limpe cache de build
rm -rf .next

# Rebuild
npm run build

# Se continuar lento, verifique:
# - Tamanho de node_modules (rm -rf node_modules && npm install)
# - Versão do Node (node --version)
```

### Estilos Tailwind não aplicando

**Causas comuns:**
1. Arquivo não importa `globals.css`
2. Classe Tailwind não existe
3. Cache de build

**Solução:**
```bash
# 1. Verifique imports em app/layout.tsx
import '@/styles/globals.css';

# 2. Limpe .next e rebuild
rm -rf .next
npm run dev
```

### TypeScript errors

**Solução:**
```bash
# Abra terminal TypeScript
npx tsc --noEmit

# Verifique tsconfig.json
cat tsconfig.json | grep paths
```

## Debugging

### Inspecionar Props de Componente

```typescript
export function MyComponent(props: any) {
  console.log('Props:', props);
  console.log('Environment:', process.env.NODE_ENV);
  return <div>Debug aqui</div>;
}
```

### DevTools do Next.js

```bash
# Abra DevTools (F12 no navegador)
# Abas: Console, Network, Performance

# Performance profiling
npm run build  # Gera relatório em .next/analyze
```

### Verificar Build Bundle

```bash
npm run build

# Output mostra:
# Route (pages)                Size    First Load JS
# ┌ ○ /                         12 kB    52 kB
# ├ ○ /404                      193 B   50.5 kB
# ├ ○ /contato                  5.2 kB  55 kB
# └ ○ /politica-de-privacidade  4 kB    54 kB
```

## Scripts de Desenvolvimento

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Dev server com HMR |
| `npm run build` | Build otimizado |
| `npm start` | Serve build local |
| `npm run lint` | ESLint check |
| `npm run type-check` | TypeScript check |

## Ambiente de Produção

Para deployment em produção:
1. Veja [DEPLOYMENT.md](DEPLOYMENT.md)
2. Configure variáveis em [ENVIRONMENT.md](ENVIRONMENT.md)
3. Teste build local: `npm run build && npm start`

## Performance & Otimizações

### Image Optimization

```typescript
import Image from 'next/image';

export function OptimizedImage() {
  return (
    <Image
      src="/images/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
      priority  // Para LCP (Largest Contentful Paint)
    />
  );
}
```

### Code Splitting Automático

Next.js automaticamente faz code splitting por rota. Nenhuma configuração necessária.

### Preload de Recursos

```typescript
// src/app/layout.tsx
<link rel="preload" as="font" href="/fonts/inter.woff2" />
```

## Próximos Passos

1. ✅ Setup completo
2. Leia [PROJECT-STRUCTURE.md](PROJECT-STRUCTURE.md)
3. Comece a desenvolver
4. Veja [ENVIRONMENT.md](ENVIRONMENT.md) para produção

---

**Dúvidas?** Abra issue em [GitHub](https://github.com/NeoSale/neosale-monorepo/issues)
