//CONECTAR O BANCO
const Sequelize = require ('sequelize')
const sequelize = new Sequelize('sequelize-teste','root','',{
    dialect: 'mysql',
    host: '127.0.0.1'
})


//TIPO DE MODEL A SER INSERÍDO
const Pessoa = sequelize.define('Pessoa', {
    nome: Sequelize.STRING,
    nascimentos: Sequelize.STRING
})
const Usuario = sequelize.define('Usuario', {
    user: Sequelize.STRING,
    password: Sequelize.STRING
})
const Projeto = sequelize.define('Projeto', {
    nome: Sequelize.STRING
})

//RELACIONADNO DOCUMENTS
//Foreign key nesse caso fica em Usuario
Pessoa.hasOne(Usuario)
Usuario.belongsTo(Pessoa)
Pessoa.hasMany(Projeto)
Projeto.belongsTo(Pessoa)


//MANIPULAR DADOS O BANCO DE DADOS
const testDB = async() => {
    //force: true FORÇAR CRIAÇÃO
   await sequelize.sync()

//    const person = await Pessoa.create({
//     nome: 'Victor Honorato',
//     nascimento: '1989-0808'
//    })
    
//     const user = await Usuario.create({
//         user: 'Victor Honorato',
//         password: '123456'
//     })
//     user.setPessoa(person)

//RETORNAR DADOS FORMA:1
// const usuarios = await Usuario.findAll()
// const pessoas = await Promise.all (usuarios.map( async u => {
//     return await  u.getPessoa()
// }))
// console.log(pessoas)

//RETORNAR DADOS FORMA: 2
const usuarios = await Usuario.findAll({
    include:[
        {model: Pessoa}
    ]
})
console.log(usuarios)
}

testDB()

//sequelize.authenticate().then(()=> console.log('connected'))
