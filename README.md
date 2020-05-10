# aramoTechChallengeApi

Este reprositório contém duas APIs que são base para o araamo tchChallenge, para ser execuatdos em servidor local:

Neste repositório estão as seguintes APIs:

* tarifaLocal: acessada pela rota http://localhost:9000/tarifaLocal em GET, ela trará das tarifas locais na tabela conforme a orientação abaixo:

 Padrão das tarifas:
    ----------------------------------------
    | Origem |  Destino  | Valor por minuto|
    |---------------------------------------
    |   011  |    016    |    1.90         |
    |   016  |    011    |    2.90         |
    |   011  |    017    |    1.70         |
    |   017  |    011    |    2.70         |
    |   011  |    018    |    0.90         |
    |   018  |    011    |    1.90         |
    |--------------------------------------|
	

* planosFaleMais: acessada pela rota http://localhost:9000/planosFaleMaisem GET, ela traá as informações de todos os plaanos fale mais e sua respectiva minutagem de franquia gratuita(30, 60 ou 120 minutos)

## Como usar

Clone o repositório, execute "npm install -i" e depois execute "node server.js" ou npm run, em último caso há um nodemon preparado para tais situações.
Os comandos devem ser dados em terminal/prompt do MS DOS.
