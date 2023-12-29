# Teste Técnico Backend Nimbus - Felipe Araújo

## Rodando o projeto

Na raiz do projeto execute o seguinte comando:

```
npm install && npm start
```

## Rodando os testes

```
npm test
```

## API

## Get damage summary by date

Lista os eventos diários de maior e menor impacto e a média do impacto na operação dentro do intervalo das datas informadas.

### Parâmetros de consulta

| Parâmetro   | Tipo   | Formato      | Descrição                              |
| ----------- | ------ | ------------ | -------------------------------------- |
| `dateStart` | string | `YYYY-MM-DD` | **Obrigatório.** Data início da busca. |
| `dateEnd`   | string | `YYYY-MM-DD` | **Obrigatório.** Data limite da busca. |

### Requisição

```
GET /damage-summary-by-date?dateStart=2013-12-20&dateEnd=2013-12-23
```

### Resposta

Status: 200

```json
{
  "data": [
    {
      "date": "2013-12-22",
      "maxDamageEvent": {
        "date": "2013-12-22",
        "event": "Vento 8 m/s",
        "damage": 68
      },
      "minDamageEvent": {
        "date": "2013-12-22",
        "event": "Chuva 12 mm",
        "damage": 63
      },
      "avgDamage": 66
    },
    {
      "date": "2013-12-21",
      "maxDamageEvent": {
        "date": "2013-12-21",
        "event": "Pancada de chuva",
        "damage": 71
      },
      "minDamageEvent": {
        "date": "2013-12-21",
        "event": "Temperatura acima de 35°C",
        "damage": 62
      },
      "avgDamage": 67
    },
    {
      "date": "2013-12-20",
      "maxDamageEvent": {
        "date": "2013-12-20",
        "event": "Rajada acima de 30 m/s",
        "damage": 65
      },
      "minDamageEvent": {
        "date": "2013-12-20",
        "event": "Rajada acima de 30 m/s",
        "damage": 65
      },
      "avgDamage": 65
    }
  ]
}
```

### Códigos de status HTTP para "Get damage summary by date"

| Código | Descrição     |
| ------ | ------------- |
| 200    | `OK`          |
| 400    | `BAD REQUEST` |

## Tecnologias utilizadas

- Node.js
- Express
- Sequelize com SQLite
- Vitest

**_Não é necessário configuração para o banco de dados, SQLite facilita o processo de testagem._**
