# 🔐 Variáveis de Ambiente - NeoSale Site

Configuração de variáveis de ambiente para desenvolvimento e produção.

## Arquivo `.env.local`

Criar arquivo na raiz do projeto (ignorado pelo git):

```bash
touch .env.local
```

## Variáveis

### Desenvolvimento (Opcional)

```env
# Desenvolvimento: sem variáveis obrigatórias
# Este projeto não acessa banco de dados ou APIs externas
```

### Produção

Para produção, defina variáveis no painel do seu host (Vercel, EasyPanel, etc):

```env
# Nenhuma variável obrigatória para produção
# Site é estático (gerado em build-time)
```

## Exemplo `.env.local` (Desenvolvimento)

```env
# Não há variáveis necessárias
# Adicione aqui conforme necessário para features futuras
```

## Build-time vs Runtime

### Build-time (Next.js)

Variáveis prefixadas com `NEXT_PUBLIC_` estão disponíveis:
- No servidor (durante build)
- No cliente (navegador)
- Definidas em build-time (não podem mudar em runtime)

```typescript
// Disponível em build-time
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### Runtime (Este projeto)

Este projeto não tem variáveis runtime (não executa servidor).

## Segurança

### ✅ DO's

- ✅ Nunca commitar `.env.local`
- ✅ Usar `.env.example` para documentar variáveis
- ✅ Guardar credenciais em gestor de senhas (1Password, etc)
- ✅ Diferentes valores por ambiente

### ❌ DON'Ts

- ❌ Commitar senhas/tokens
- ❌ Usar variáveis privadas no client (prefixo `NEXT_PUBLIC_`)
- ❌ Hardcoding de URLs/configs

## Deployment

### Vercel

Adicione variáveis no painel:

```
Project Settings → Environment Variables
```

### EasyPanel / Docker

Defina no docker-compose ou painel:

```bash
docker run -e VAR_NAME=value ...
```

### GitHub

Para CI/CD (se implementado), use GitHub Secrets:

```yaml
env:
  DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
```

---

**Sem variáveis definidas?** Site funciona normalmente em desenvolvimento e produção.
