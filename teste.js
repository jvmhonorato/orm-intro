//CONECTAR O MODEL
const Sequelize = require ('sequelize')
const sequelize = new Sequelize('sequelize-teste','root','',{
    dialect: 'mysql',
    host: '127.0.0.1'
})


//TIPO DE MODEL A SER INSERÍDO
const Usuario = sequelize.define('Usuario', {
    user: Sequelize.STRING,
    password: Sequelize.STRING
})


//MANIPULAR DADOS O BANCO DE DADOS
const testDB = async() => {
   await sequelize.sync()
    
    await Usuario.create({
        user: 'Hanna Honorato',
        password: '123456'
    })
}

testDB()

//sequelize.authenticate().then(()=> console.log('connected'))
