const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors');
const app = express();
const port = process.env.PORT;

app.use(cors());

app.get("/", (request, response) => {
  response.status(204);
  response.send("Nada acontece, feijoada");
});

app.get("/tarifaLocal", (request, response) => {
  /* 
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
    |---------------------------------------
    */
  let tarifas = [
    {
      origem: 11,
      destino: 16,
      valor: 1.9,
    },
    {
      origem: 16,
      destino: 11,
      valor: 2.9,
    },
    {
      origem: 11,
      destino: 17,
      valor: 1.7,
    },
    {
      origem: 17,
      destino: 11,
      valor: 2.7,
    },
    {
      origem: 11,
      destino: 18,
      valor: 0.9,
    },
    {
      origem: 18,
      destino: 11,
      valor: 1.9,
    }
  ];
  response.status(200);
  response.send(tarifas);
});

app.get("/planosFaleMais", (request, response) => {
  /* 
    Padrão dos planos
    ----------------------------------------------------------------------------
    | ORIGEM | DESTINO | TEMPO | PLANO FALEMAIS | COM FALEMAIS | SEM  FALEMAIS | 
    ----------------------------------------------------------------------------
    |   011  |   016   |  20   |  FaleMais 30   |   R$ 0,00    |   R$ 38,00    |                                                               
    |   011  |   017   |  80   |  FaleMais 60   |   R$ 37,40   |   R$ 136,00   |                                                          
    |   018  |   011   |  200  |  FaleMais 120  |   R$ 167,20  |   R$ 380,00   |
    |   018  |   017   |  100  |  FaleMais 30   |       -      |       -       |
    ----------------------------------------------------------------------------
    */
  let planos = [
    {
      nome: "FaleMais 30",
      minutosFranquia: 30,
    },
    {
      nome: "FaleMais 60",
      minutosFranquia: 60,
    },
    {
      nome: "FaleMais 120",
      minutosFranquia: 120,
    }
  ];
  response.status(200);
  response.send(planos);
});

app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});
