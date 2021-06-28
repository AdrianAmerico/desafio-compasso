# Desafio Compasso

## Considerações iniciais

* Foi um desafio bem bacana e que levou mais tempo do que imaginei, a API me pareceu bem confusa mas graças as pessoas no grupo do slack consegui vencer os desafios. De inicio a ideia seria implementar um login com o github utilizando o firebase mas o retorno da requisição não vinha com a tag do perfil e sim o nome de usuario fazendo com que não fosse possivel usar essa resposta como parametro para as requisições no axios.

## O que Funciona
* Campo de busca;
* Visualização dos resultados;
* Botao para exibir os repositórios pessoais do usuário;
* Botao para exibir os repositórios favoritos do usuário;
* Se caso o usuário não possuir repositorios pessoais ou favoritos, exibirá uma mensagem de erro com um botão para retornar para a página principal;
* Foi utilizado SASS para estilização dos componentes;
* Parcialmente responsivo;

## Problemas encontrados
* Responsividade precisa melhorar
* Uma das idéias seria um filtro de ordem (crescente e decrescente) onde irá formar um ranking dos repositórios mais vistos ou com mais favoritos porém o algoritmo percorria a resposta da requisição tornando o processo bastante pesado e demorado, ficando assim inviavel;
* **POSSIVEL SOLUÇÃO**
* Utilizar outro algoritmo para fazer o filtro ou extrair apenas as informações que serão utilizadas na aplicação, reduzindo assim o custo de processamento do mesmo
* Página de carregamento poderia ser melhor, mas por questão de tempo acabei não fazendo;
* Falta uma página de erro caso a URL do site sera inválida no Router;
* Estilização e cores não há um padrao e não há uma tabela de cores pré determianda no SASS, prejudicando a manutenção;
* Estado global acabou não sendo muito utilizado (ainda estou aprendendo a como usa-lo e evitar Prop Drilling);
* Falta um provider do Material-ui para padronizar botôes e campos de texto no site, tornando a aplicação menos verbosa;
* Custom hooks para os parametros, evitando de importar useHistory ou useParams e tendo que passar para uma const history e assim poder utiliza-la;
* Como houve poucas páginas não criei uma lista de funções para mudar a página;

## Considerações finais 
* Algumas das ideias infelizmente não foi implementada, como um botao para modo noturno utilizando um estado global, mas considernado que todo o desenvolvimento do site foi feito em um domingo inteiro fiquei feliz com o resultado, 

## Fotos

### Página inicial

**Desktop**

![Captura de tela de 2021-06-27 22-17-45](https://user-images.githubusercontent.com/73081422/123566227-8cf69000-d795-11eb-853e-471cb541d73e.png)


![Captura de tela de 2021-06-27 22-14-50](https://user-images.githubusercontent.com/73081422/123566143-5751a700-d795-11eb-8ef5-6fee66b6e17e.png)

***Mobile**

![Captura de tela de 2021-06-27 22-17-53](https://user-images.githubusercontent.com/73081422/123566238-92ec7100-d795-11eb-9652-05ac92d653a0.png)


![Captura de tela de 2021-06-27 22-15-06](https://user-images.githubusercontent.com/73081422/123566188-72241b80-d795-11eb-9161-89a791badd5a.png)

### Repositórios

***Desktop**

![Captura de tela de 2021-06-27 22-18-49](https://user-images.githubusercontent.com/73081422/123566305-bfa08880-d795-11eb-9e51-988b42fdfaae.png)

**Mobile**

![Captura de tela de 2021-06-27 22-18-58](https://user-images.githubusercontent.com/73081422/123566321-c7f8c380-d795-11eb-9edf-1fef61865b5c.png)

### Página de Favoritos

**Desktop**

![Captura de tela de 2021-06-27 22-20-52](https://user-images.githubusercontent.com/73081422/123566378-f4acdb00-d795-11eb-85b1-94e219e68862.png)

**Mobile**

![Captura de tela de 2021-06-27 22-20-42](https://user-images.githubusercontent.com/73081422/123566386-fa0a2580-d795-11eb-8b9a-9be84bacd61f.png)


### Card

![Captura de tela de 2021-06-27 22-21-39](https://user-images.githubusercontent.com/73081422/123566417-1017e600-d796-11eb-97d2-c7941395f822.png)






















