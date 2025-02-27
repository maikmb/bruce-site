# Bruce - Garçom e Cardápio Digital

Landing page para o Bruce, uma solução inovadora de garçom e cardápio digital para quiosques, restaurantes e delivery.

## Sobre o Bruce

Bruce é um aplicativo inovador de garçom digital e cardápio digital, projetado para revolucionar o atendimento em quiosques, restaurantes e serviços de delivery. Com um preço competitivo de apenas R$100 por mês por estabelecimento, Bruce oferece funcionalidades únicas como pagamento direto via Pix, relatórios detalhados, e uma interface moderna e intuitiva.

## Tecnologias Utilizadas

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Visualizar build de produção
npm run preview
```

## Deploy

Este projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions. Quando você fizer push para a branch `main`, o site será automaticamente construído e implantado.

Para configurar o deploy:

1. Certifique-se de que o repositório é público ou que você tem GitHub Pro para repositórios privados
2. Vá para Settings > Pages e configure a fonte como "GitHub Actions"
3. Atualize o arquivo `astro.config.mjs` com seu nome de usuário e nome do repositório
4. Faça push para a branch `main`

## Licença

Todos os direitos reservados.