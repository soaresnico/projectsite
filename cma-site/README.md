# César Martins Advogados Associados

Site institucional estático, organizado e pronto para hospedagem. Não usa React, Vite, Node.js, banco de dados ou bibliotecas externas.

## Publicação rápida

1. Extraia o ZIP.
2. Envie **o conteúdo da pasta** para `public_html` ou para a pasta raiz do domínio.
3. Confirme que o arquivo `index.html` está diretamente na raiz pública.
4. Acesse o domínio no navegador.

## Teste local no VS Code ou Codespaces

Pode usar a extensão Live Server ou executar:

```bash
python3 -m http.server 8000
```

Depois abra `http://localhost:8000`.

## Onde alterar cada item

- Conteúdo e seções: `index.html`
- Cores, fontes e medidas: `assets/css/variables.css`
- Estrutura geral: `assets/css/layout.css`
- Componentes visuais: `assets/css/components.css`
- Celular e tablet: `assets/css/responsive.css`
- Número e mensagens do WhatsApp: `assets/js/config.js`
- Menu: `assets/js/menu.js`
- Perguntas frequentes: `assets/js/faq.js`
- Imagens: `assets/images/`

## Substituição de imagens

Os arquivos SVG atuais são marcadores visuais. Substitua por fotografias reais mantendo os mesmos nomes, ou altere o caminho no `index.html`. Se usar JPG ou WebP, altere também a extensão no HTML.

## Antes de publicar

- Preencha nome, OAB, especialidade, formação e biografia do advogado principal.
- Preencha os dados dos demais profissionais.
- Substitua todas as imagens provisórias.
- Configure o link da Área do Cliente.
- Defina o horário de atendimento.
- Troque os indicadores `+X` por números reais e verificáveis.
- Substitua o domínio temporário em `sitemap.xml`.
- Revise telefone, e-mail e endereço.

## Estrutura

```text
.
├── index.html
├── .htaccess
├── robots.txt
├── sitemap.xml
├── assets
│   ├── css
│   │   ├── main.css
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── responsive.css
│   ├── js
│   │   ├── main.js
│   │   ├── config.js
│   │   ├── menu.js
│   │   ├── faq.js
│   │   ├── whatsapp.js
│   │   └── animations.js
│   ├── images
│   └── icons
└── docs
    └── MANUTENCAO.md
```

## Compatibilidade

Funciona em hospedagens Apache/cPanel e também em hospedagens estáticas. O `.htaccess` é útil no Apache e é ignorado em serviços que não o suportam.
