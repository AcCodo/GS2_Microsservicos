# GS2_Microsservicos

# Passo a passo para execução

## Comandos Docker

Criar imagem a partir de Dockerfile (muito importante estar na mesma pasta do arquivo em questão)

```
docker build -t gs-app .
```

Subir o container do programa principal

```
docker run --name gs-app -p 3000:3000 -d gs-app
```

Subir um container do MySQL com a porta correta

```
docker run --name database-mysql -e MYSQL_ROOT_PASSWORD=123 -p 33063:3306 -d mysql
```

## Comandos MySQL

### Acessar MySQL

Acessar bash MySQL

```
docker exec -it database-mysql /bin/bash
```

Logar no Banco

```
mysql -uroot -p123
```

### Executar comandos do Banco de Dados

Copie todo o conteúdo do arquivo database.sql e cole, usando **Shift+INS**, para executar a criação das tabelas e inserção de dados. Na ordem correta.

# Testar

## Postman/Insomnia

Usando os endpoints /objetivos e /indicador/{id} teste os métodos GET. Nenhum corpo de autenticação ou autorização necessário. 

Valores possíveis para o ID de indicador são: 3.1.1; 3.1.2; 3.2.1; 3.2.2; 3.3.2; 3.3.3; 3.3.4; 3.3.5; 3.4.1; 3.4.2; 3.5.2; 3.6.1; 3.7.2; 3.8.2; 3.9.2; 3.9.3

Se um valor válido for enviado. O resultado deve ter código 200 de resposta.
Outros valores devem retornar 204.

Endpoint de Objetivos deve sempre retornar o mesmo valor e com código 200.
