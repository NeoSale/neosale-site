# 🌐 NeoSale Site

Marketing landing page e site institucional da plataforma NeoSale.

**Versão:** 1.0.0 | **Status:** Ativo | **Stack:** Next.js 15 + React 19 + Tailwind CSS 4

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 20+
- npm 10+

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000`

### Build & Produção

```bash
npm run build
npm start
```

## 📋 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build otimizado para produção |
| `npm start` | Executa aplicação em produção |
| `npm run lint` | ESLint - verificação de código |

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Next.js App Router
│   ├── contato/           # Página de contato
│   ├── politica-de-privacidade/
│   ├── termos-de-uso/
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── sections/          # Hero, Features, CTA, etc
│   └── ui/               # Componentes reutilizáveis
├── lib/                   # Utilities e helpers
├── styles/                # CSS global + Tailwind config
└── public/                # Assets estáticos (imagens, fonts)
```

## 🎨 Recursos

- ✅ **Responsivo** - Mobile-first design
- ✅ **SEO Otimizado** - Metadata dinâmicas
- ✅ **Animações** - Framer Motion
- ✅ **Tema Customizado** - Cor primária: #403CCF (roxo)
- ✅ **Acessibilidade** - WCAG 2.1 AA

## 🔧 Configuração

### Environment Variables

Não há variáveis obrigatórias para desenvolvimento local.

Para produção, veja [docs/ENVIRONMENT.md](docs/ENVIRONMENT.md)

### Tailwind CSS

Configuração customizada em `src/styles/tailwind.config.js`:
- Tema primário: `#403CCF`
- Dark mode: suportado via `dark:` classes
- Breakpoints: padrão Tailwind

## 📦 Dependências Principais

- **next:** Framework React com App Router
- **react/react-dom:** Versão 19
- **framer-motion:** Animações fluidas
- **tailwindcss:** Styling utilitário
- **lucide-react:** Ícones vetoriais

## 🚢 Deployment

O projeto está pronto para deployment via:

- **Vercel** (recomendado para Next.js)
- **Docker** (veja [build-and-push.sh](../build-and-push.sh))
- **EasyPanel** (com script de automação)

### Deploy via Docker

```bash
npm run deploy        # Auto-detecta versão
npm run deploy:patch  # Force patch version
npm run deploy:minor  # Force minor version
npm run deploy:major  # Force major version
```

Veja [DEPLOYMENT.md](docs/DEPLOYMENT.md) para mais detalhes.

## 📚 Documentação

- [SETUP.md](docs/SETUP.md) - Setup detalhado e troubleshooting
- [PROJECT-STRUCTURE.md](docs/PROJECT-STRUCTURE.md) - Explicação da estrutura
- [ENVIRONMENT.md](docs/ENVIRONMENT.md) - Variáveis de ambiente
- [DEPLOYMENT.md](docs/DEPLOYMENT.md) - Guia de deploy

## 🤝 Contribuindo

1. Crie branch: `git checkout -b feature/minha-feature`
2. Commit changes: `git commit -m 'feat: descrição'`
3. Push: `git push origin feature/minha-feature`
4. Abra Pull Request

## 📝 Licença

MIT - Veja LICENSE para detalhes

## 📞 Suporte

- **Issues:** GitHub Issues
- **Email:** dev@neosale.io
- **Docs:** [neosale-docs/](../neosale-docs)

---

**Mantido por:** Equipe NeoSale
**Última atualização:** Fevereiro 2026
