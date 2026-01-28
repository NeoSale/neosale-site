# NeoSale Site

Site institucional da NeoSale AI - Plataforma de automação de vendas e atendimento via WhatsApp com agentes de IA especializados.

## 🚀 Tecnologias

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19 + TypeScript
- **Estilização:** Tailwind CSS 4
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Fontes:** Geist Sans (Google Fonts)
- **Deploy:** Vercel

## 📁 Estrutura

```
neosale-site/
├── src/
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── layout.tsx          # Layout raiz
│   │   ├── page.tsx            # Home (landing page)
│   │   ├── contato/            # Página de contato
│   │   ├── politica-de-privacidade/
│   │   └── termos-de-uso/
│   │
│   ├── components/
│   │   ├── layout/             # Header, Footer, ThemeToggle
│   │   ├── sections/           # Seções da landing page
│   │   └── ui/                 # Componentes reutilizáveis
│   │
│   ├── lib/                    # Utilitários
│   └── styles/                 # Estilos globais
│
├── public/                     # Assets estáticos
└── package.json
```

## 🎨 Design System

### Cores
- **Primary:** `#403CCF` (azul roxo)
- **Primary Light:** `#5B59E8`
- **Primary Dark:** `#2d2a9c`
- **Background Light:** `#FBFAFF`
- **Background Dark:** `#0f1629`

### Componentes
- `Button` - Botões com variantes (primary, secondary, outline, ghost)
- `Card` - Cards com variantes (default, glass, bordered)
- `Badge` - Badges para tags e status
- `Container` - Container responsivo
- `Accordion` - FAQ accordion animado
- `SectionTitle` - Títulos de seção padronizados

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start
```

## 📱 Páginas

- `/` - Landing page principal
- `/contato` - Formulário de contato
- `/politica-de-privacidade` - Política LGPD
- `/termos-de-uso` - Termos de uso

## 🔗 Links Importantes

- **Demo:** https://lp.neosaleai.com.br
- **CRM:** https://crm.neosaleai.com.br
- **Site:** https://neosaleai.com.br

## 📄 Licença

© 2025 NeoSale AI. Todos os direitos reservados.
