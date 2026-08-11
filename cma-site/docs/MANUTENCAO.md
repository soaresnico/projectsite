# Guia de manutenção

## Regra principal

Altere apenas o arquivo relacionado ao item desejado. Faça uma cópia de segurança antes de editar e teste em uma pasta separada antes da publicação.

## Cores

Todas as cores principais ficam em `assets/css/variables.css`. Alterar uma variável atualiza o site inteiro sem procurar valores em diversos arquivos.

## WhatsApp

O número e todas as mensagens ficam em `assets/js/config.js`. O número deve conter código do país, DDD e telefone, somente com algarismos.

## Adicionar uma nova pergunta ao FAQ

Copie um bloco `<article class="accordion-item">` dentro da seção `#faq`. O JavaScript reconhecerá automaticamente o novo item.

## Adicionar profissional

Copie um bloco `<article class="person-card">` dentro de `.team-grid`. O CSS reorganiza os cartões automaticamente em desktop, tablet e celular.

## Imagens

Prefira WebP para fotografias. Recomendações:

- Hero ou fachada: 1600 x 1000 px
- Recepção e ambientes: 1200 x 800 px
- Retrato do advogado: 900 x 1100 px
- Imagem de compartilhamento: 1200 x 630 px

Comprima as imagens antes da publicação. Evite nomes com espaços e acentos.

## Segurança operacional

Nunca coloque senhas, chaves privadas ou credenciais dentro dos arquivos públicos. Integrações que exigirem segredo devem ser implementadas em um backend separado.
