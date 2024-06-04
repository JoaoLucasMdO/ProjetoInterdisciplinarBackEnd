var Usuario = require('../models/usuarioModel')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.create = async function(req, res){
    /*
       #swagger.tags = ['Usuario']
       #swagger.description = 'Insere um novo usuário'
       */
    //Criptografando a senha
    //genSalt => impede que 2 senhas iguais tenham resultados iguais
    const salt = await bcrypt.genSalt(10)
    req.body.senha = await bcrypt.hash(req.body.senha, salt)

    let usuario = new Usuario(
        {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }
    );

    //iremos salvar o registro
    try{
        usuario.save()
        res.status(201).send(usuario.toJSON())
    }catch(err){
        res.status(500).send({ message: `${err.message} - falha ao cadastrar usuário.` })
    }
};

exports.login = async function (req, res) {
    //obtendo os dados para o login
    const { email, senha } = req.body
    try {
        //verificar se o email existe no MongoDB
        let usuario = await Usuario.findOne({email:email})
        //Se o array estiver vazio, é que o email não existe
        if (!usuario)
            return res.status(404).json({//Not found
                errors: [{
                    value: `${email}`,
                    msg: `O email ${email} não está cadastrado!`,
                    param: 'email'
                }]
            })
        //Se o email existir, comparamos se a senha está correta
        const isMatch = await bcrypt.compare(senha, usuario.senha)
        if (!isMatch)
            return res.status(403).json({//Forbidden
                errors: [{
                    value: 'senha',
                    msg: 'A senha informada está incorreta',
                    param: 'senha'
                }]
            })
        //Iremos gerar o token JWT
        jwt.sign(
            { usuario: { id: usuario._id } },
            process.env.SECRET_KEY,
            { expiresIn: process.env.EXPIRES_IN },
            (err, token) => {
                if (err) throw err
                res.status(200).json({
                    access_token: token
                })
            }
        )
    } catch (e) {
        console.error(e)
    }
};