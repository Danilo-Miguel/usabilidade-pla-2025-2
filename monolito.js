const express = require('express');//criação de um servidor
const app = express();

app.use(express.json()); //servidor entende json

 //simulação de banco de dados
let usuarios = []
let pedidos = []

//criação de rotas

app.post('/usuarios', (req, res) => {
    const usuario = req.body
    usuarios.push(usuario)
    res.send({message:'Usuário criado com sucesso!'})
    }
);

//rota para criar um pedido
app.post('/pedidos', (req, res) => { //rota para criar um pedido
    const pedido = req.body //pega o corpo da requisição
    pedidos.push(pedido) //adiciona o pedido ao array de pedidos
    res.send({message:'Pedido criado com sucesso!'})  //resposta para o cliente
    }
);

//  rota para listar todos os pedidos
app.get("/dados", (req, res) => {
    res.send(pedidos); //envia a lista de pedidos como resposta
    res.send({usuarios, pedidos});
    }
);

app.listen(3000, () => {//servidor ouvindo a porta 3000
    console.log("Servidor rodando na porta 3000")
    }
); 

