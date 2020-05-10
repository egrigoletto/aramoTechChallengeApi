# aramoTechChallengeApi

Este reprositório contém duas APIs que são base para o araamo tchChallenge, para ser execuatdos em servidor local:

Neste repositório estão as seguintes APIs:

* tarifaLocal: acessada pela rota http://localhost:9000/tarifaLocal em GET, ela trará das tarifas locais.

* planosFaleMais: acessada pela rota http://localhost:9000/planosFaleMais em GET, ela traá as informações de todos os plaanos fale mais e sua respectiva minutagem de franquia gratuita(30, 60 ou 120 minutos)

## Como usar

Clone o repositório, execute "npm install -i" e depois execute "node server.js" ou npm run, em último caso há um nodemon preparado para tais situações.
Os comandos devem ser dados em terminal/prompt do MS DOS.

* no navegador informe http://localhost:9000/tarifaLocal ou http://localhost:9000/planosFaleMais na barra de endereço.
* no postman ou aplicativo semelhante, informe http://localhost:9000/tarifaLocal ou http://localhost:9000/planosFaleMais com o método GET.
