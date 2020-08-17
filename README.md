<h2 align="center">
    Cadastro de Clientes
    <img src="https://image.flaticon.com/icons/svg/2883/2883885.svg" width="120">
</h2>

---

## 📔 Sobre

Neste projeto foi criado um sistema de registro de clientes bem simples, onde é possível realizar algumas operações;

A idéia do projeto foi realizar uma aplicação FullStack, criando uma API no Backend, e consumindo os dados desta api no FrontEnd.

Nessa aplicação é possível listar os clientes, criar novos clientes, atualizá-los e deletá-los (basicamente um CRUD);

---

## 🔗 BackEnd 

No Backend desta aplicação, foi criado uma API Rest, com as seguintes tecnologias:

- Node JS
- MongoDB
- Express
- Mongoose
- CORS

A API está conectada a um banco MongoDB, e carrega dados do cliente para serem manipulados pelo Front End:

<h2 align="center">
    <img src="https://ik.imagekit.io/ur6xo9m70i/Api1_gRHVI7dsr.png" width="650">
</h2>

---

## 💻 Front End

Já no Front End, foram usadas algumas tecnologias como:

- React JS
- React Router Dom
- Axios
- Hooks
- Styled Components

Foi criada uma interface bem simples, para que possamos realizar manipulações com o cliente consumindo a API fornecida pelo BackEnd, utilizando os métodos do protocolo HTTP (GET, POST, PUT e DELETE):

<h2 align="center">
    <img src="https://ik.imagekit.io/ur6xo9m70i/1_b_01lLY0PR.png" width="650">
</h2>

#### GET

Utilizamos o método GET para exibir todos os clientes salvos em nosso banco de dados Mongo. Ao escolhermos a opção "View Clients" na tela inicial, seremos direcionado para a tela de listagem de clientes:

<h2 align="center">
    <img src="https://ik.imagekit.io/ur6xo9m70i/2_k-H5XY0Zdb.png" width="650">
</h2>

#### POST

Utilizamos o método POST para adicionar novos registros em nosso banco de dados. Ao clicarmos no botão com um mais na tela de clientes, ou na opção "Add New Client", seremos direcionados para uma tela com um formulário, onde deveremos preencher com dados do cliente a ser adicionado:

<h2 align="center">
    <img src="https://ik.imagekit.io/ur6xo9m70i/3_xc3c5PXWX9.png" width="650">
</h2>

#### PUT

Utilizamos o método PUT para adicionar dados de um registro específico já existente em nosso banco de dados. Ao clicar na opção "Update" específica de um cliente, o usuário será direcionado para uma tela de formulário semelhante a primeira, porém com os dados atuais do registros já inseridos no campo, onde ele pode somente alterar o dado desejado e salvar:

<h2 align="center">
    <img src="https://ik.imagekit.io/ur6xo9m70i/4_TYcGLmQ2jSz.png" width="650">
</h2>

#### DELETE

Utilizamos o método DELETE para deleter um registro específico de nosso banco de dados. Ao clicar na opção "Delete" específica de um cliente, o usuário será direcionado para uma tela de confirmação, onde ele irá verificar se quer realmente deletar o usuário. Caso realmente queira, o usuário será deletado:

<h2 align="center">
    <img src="https://ik.imagekit.io/ur6xo9m70i/5_OPOtZbzSkY.png" width="650">
</h2>

--- 

<h2 align="center">💻 Desenvolvido Por: Victor Guirra</h2>