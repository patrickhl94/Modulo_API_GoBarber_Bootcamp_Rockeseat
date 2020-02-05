# Anotações Modulo 02

### Utilizar a sintaxe "import export" no Node.js
Para utilizar esta sintaxe, é necessário instalar a dependencia "sucrase",
após instalado será possível utilizar a nova sintaxe.
* Comando para rodar o servidor sem o nodemon: `yarn sucrase-node server.js`
**Para rodar o servidor com o nodemon:** Criar um arquivo `nodemon.json` na raiz do projeto
e neste arquivo deverá ter o seguinte json: {"execMap" : {"js" : "node -r sucrase/register"}}

**Basicamente este json informa a aplicação que antes dele executar o script que termine**
**com 'js' ele irá executar o arquivo refgister que está na pasta /sucrase**

### Configuração para debugar com o sucrase
Para debugar com o sucrase, é necessário algumas configurações:

**Criar o launch.json da pasta .vscode, para abrir esta pasta, basta abrir o menu debug,**
**e iniciar uma nova configuração**

Dentro deste arquivo é necessário alterar "request" para "attach", e inserir o "protocol": "inspector"

**Também é necessário inserir no package.json o seguinte script: ` "start:debug" : "nodemon --inspect src/server.js"`**
**Para o debug reniciar automatimante após um debug basta inserir a propriedade `"restart": true`**
**no launch.json de configuração debug**
