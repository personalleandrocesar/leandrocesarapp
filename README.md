# leandrocesar.app
### Rota: `/form`


#### Método: POST
> Cadastro de clientes

Definindo o inputs do formulário:

- Nome
- Sobrenome
- Sexo
- Data de nascimento
- WhatsApp
- Serviço
- Usuário
- E-mail
- Senha
- Objetivo
- Dias p/ semana
- Tempo de Treino
- Dia do pagamento
- Início do Período
- Fim do Período

---

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
- Sexo
- Data de nascimento
- WhatsApp
- Serviço
- Usuário
- E-mail
- Senha
- Objetivo
- Dias p/ semana
- Tempo de Treino
- Início do Período
- Fim do Período
- Dia do vencimento
- Status

---

### Rota: `/admin/clientes/:id`

#### Método: GET
> Pegar os dados do cliente em mostrar na tela

O que aparecerá:

- Nome
- Sobrenome
- Sexo
- Data de nascimento
- WhatsApp
- Idade
- Usuário
- Serviço
- Objetivo
- Dias p/ semana
- Tempo de Treino
- Início do Período
- Fim do Período
- Dia do vencimento
- Status