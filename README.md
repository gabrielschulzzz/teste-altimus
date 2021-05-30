# Instalação

- Clonar repositório.
- Instalar as dependências do frontend/backend em suas respectivas pastas.



## Backend

- Executar o comando na pasta backend do projeto para instalar os containers do servidor e banco de dados.


```bash
sudo docker-compose up -d
```

- Rodar as migrações do banco de dados
```bash
yarn typeorm migration:run
```

- Rodar o seed do banco de dados
```bash
yarn seed:run
```

## Frontend

- Iniciar o servidor

```bash
yarn start
```

## Conta admin
```bash
email: admin@admin.com
senha: 123456
```
