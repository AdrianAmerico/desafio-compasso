# Desafio Compasso

# Surge: http://desafio-compassov2.surge.sh

## Considerações iniciais

* Foi um desafio bem bacana e que levou mais tempo do que imaginei, a API me pareceu bem confusa mas graças as pessoas no grupo do slack consegui vencer os desafios. De inicio a ideia seria implementar um login com o github utilizando o firebase mas o retorno da requisição não vinha com a tag do perfil e sim o nome de usuario fazendo com que não fosse possivel usar essa resposta como parametro para as requisições no axios.

## O que Funciona
* Campo de busca;
* Visualização dos resultados;
* Botao para exibir os repositórios pessoais do usuário;
* Botao para exibir os repositórios favoritos do usuário;
* Se caso o usuário não possuir repositorios pessoais ou favoritos, exibirá uma mensagem de erro;
* Foi utilizado SASS para estilização dos componentes e Styled components pada padronização;

## Problemas encontrados
* Uma das idéias seria um filtro de ordem (crescente e decrescente) onde irá formar um ranking dos repositórios mais vistos ou com mais favoritos porém o algoritmo percorria a resposta da requisição tornando o processo bastante pesado e demorado, ficando assim inviavel;
* **POSSIVEL SOLUÇÃO**
* Utilizar outro algoritmo para fazer o filtro ou extrair apenas as informações que serão utilizadas na aplicação, reduzindo assim o custo de processamento do mesmo
* Falta uma página de erro caso a URL do site sera inválida no Router;
* Layout bastante simples;
* Estado global acabou não sendo muito utilizado;

## Considerações finais 
* Algumas das ideias infelizmente não foi implementada, como um botao para modo noturno utilizando um estado global.

## Fotos

### Página inicial

![Captura de tela de 2021-09-14 22-26-26](https://user-images.githubusercontent.com/73081422/133355420-ff55b4bb-a596-45e4-b8e7-574cfac65401.png)

![Captura de tela de 2021-09-14 22-26-45](https://user-images.githubusercontent.com/73081422/133355428-d86d92e4-af02-4cb6-afe0-6f22eb60df18.png)

![Captura de tela de 2021-09-14 22-28-33](https://user-images.githubusercontent.com/73081422/133355475-58169ef0-0a39-4d87-9d61-d5c7ac8394d8.png)

### Repositórios

![Captura de tela de 2021-09-14 22-28-55](https://user-images.githubusercontent.com/73081422/133355509-a779149d-3222-4162-b4b1-212b41122a36.png)

### Página de Favoritos

![Captura de tela de 2021-09-14 22-29-25](https://user-images.githubusercontent.com/73081422/133355563-beb428b8-4a6c-4c59-a988-cf2b74969738.png)

### Card

![Captura de tela de 2021-09-14 22-29-46](https://user-images.githubusercontent.com/73081422/133355596-0f62200a-c146-4a2d-a602-99dbb4bc5f33.png)





















