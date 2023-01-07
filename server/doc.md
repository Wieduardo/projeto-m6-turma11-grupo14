# Motors - Backend

## Squad

> - Bruno Passos - TL
> - Rodrigo de Jesus Silva
> - Willian Eduardo Costa da Silva
> - Arthur Russo Gonçalves


Status: Em andamento ⚠️

## Sobre este projeto

A ideia do projeto é disponibilidade uma plataforma para venda e leilão de veículos. O foco da plataforma é em carros e motos em qualquer estado, valor, marca, cor, etc.


## Instalação 

O que acha de testar a nossa aplicação? Siga os passos abaixo:

1) Faça o clone da branch ```main``` para o teu computador.
2) Abra a aplicação na sua IDE de preferência.
3) No terminal, rode o comando ```yarn``` para instalar todas as dependências.
4) Crie um arquivo ```.env``` na raiz da pasta server e adicione as informações necessárias. Siga o exemplo do arquivo ```.env.example```
5) Para gerar as migrações execute o comando ```yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts```
6) Para rodar as migrações execute o comando ```yarn typeorm migration:run -d src/data-source.ts```
7) Rode o comando ```yarn dev``` e aguarde a inicialização da API.
8) Você pode testar os end-points no Insomnia.


## Funcionalidades

- Cadastro de novo produto/anúncio de acordo com o tipo (leilão ou venda).
- Edição de um produto/anúncio
- Deleção de um produto/anúncio
- Listagem de todos os produtos/anúncios de venda e leilão
- Listagem de um único produto/anúncio
- Listagem de todos os produtos/anúncios de um usuário


## Stack

    NodeJS
    Express
    TypeScript
    PostgreSQL
    TypeORM


## Endpoint

- Para mais detalhes relacionados aos endpoints, abrir o index.html que está na raiz da pasta "server". Clique com o botão direito no mesmo e selecione a opção "Open on live server".