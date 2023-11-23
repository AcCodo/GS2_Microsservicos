# GS2_Microsservicos

# Passo a passo para execução

## Comandos Docker

Navege para a pasta que contém o arquivo docker-compose.yml para executar o seguinte comando:

```
docker-compose up
```

## Comandos MySQL

### Acessar MySQL

Acessar bash MySQL

```
docker exec -it src-database_mysql-1 /bin/bash
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

# Diagrama de Dados

![image](https://github.com/AcCodo/GS2_Microsservicos/assets/67808063/d571bbe1-284b-4bfe-9adb-a808139cd3f4)
