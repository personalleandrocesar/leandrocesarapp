# leandrocesar.app

### Rota: `/admin`

#### Método: GET
#### Clientes

> Graficos de Cliente já cadastrados
> - Quantidade de clientes total    
> - Quantidade de clientes em cada Serviço
> - Quantidade de clientes em cada Serviço
> - Quantidade de clientes ativos
> - Quantidade de clientes Inativos

#### treinos

> Graficos de Cliente já cadastrados
> - Quantidade de treinos no total    

---

### Rota: `/admin/clientes`

#### Método: GET
> Lista de Cliente já cadastrados

#### Método: POST
> Cria um novo usúario!

Definindo o inputs do formulário:

- Nome
- Sobrenome
- Data de nascimento
- Usuário
- Senha
- Serviço
- Objetivo
- Início do Período
- Fim do Período
- Status
- Dias p/ semana
- Tempo de Treino

---

### Rota: `/admin/clientes/:id`

#### Método: GET
> Pegar os dados do cliente em mostrar na tela

O que aparecerá:

- Nome
- Sobrenome
- Data de nascimento
- Idade
- Usuário
- Serviço
- Objetivo
- Início do Período
- Fim do Período
- Status
- Dias p/ semana
- Tempo de Treino