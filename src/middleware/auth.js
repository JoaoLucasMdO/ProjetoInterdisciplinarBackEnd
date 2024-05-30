const jwt = require('jsonwebtoken')

exports.autenticar = async function auth(req, res){
    const token = req.header('access-token')
    if(!token) return res.status(401).json({ //401-Not Authorized
        msg: 'Acesso negado. É obrigatório o envio do token JWT'
    })
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        /*O decoded irá conter:
        playload - id do usuário
        exp (expiration) - Data de expiração
        iat (issued at) - Data de criação
        */
       req.usuario = await decoded.usuario
    }catch(e){
        return res.status(403).send({error: `Token inválido: ${e.message}`})
    }
}