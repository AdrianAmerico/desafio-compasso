# Desafio Compasso

# Surge: http://adrian-americo-compasso.surge.sh

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

**Desktop**

**Mobile**


### Repositórios

**Desktop**

**Mobile**


### Página de Favoritos

**Desktop**

**Mobile**

### Card






















