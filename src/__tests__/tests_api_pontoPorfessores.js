/*
* Teste na API Ponto dos Professores
* Tecnologias utilizadas:
* Supertest: Biblioteca para testes na API Rest do NodeJS
* dotenv: Biblioteca para gerenciar variáveis de ambiente
*/

const request = require('supertest');
const dotenv = require('dotenv');
dotenv.config(); // carrega as variáveis do .env

const baseURL = 'http://localhost:4000';

//ROTAS USUÁRIOS

describe('API REST de Usuários sem o Token', () => {
    it('GET /usuario - renderiza a página de cadastro de usuários sem o token', async () => {
        const response = await request(baseURL).get('/usuario')
            .set('Content-Type', 'application/json')
            .expect(200); // Authorized
    });
});

describe('API REST de Usuários com o Token', () => {
    let token;

    it('POST /usuario/login - Autenticar usuário para retornar token JWT', async () => {
        const senha = process.env.SENHA_USUARIO;
        const response = await request(baseURL)
            .post('/usuario/login')
            .set('Content-Type', 'application/json')
            .send({ "email": "gesley@gmail.com", "senha": senha })
            .expect(200); // OK

        token = response.body.access_token;
        expect(token).toBeDefined();
    });
});

//ROTAS PROFESSORES

describe('API REST de Professores sem o Token', () => {
    it('GET /professor - Lista todos os professores sem o token', async () => {
        const response = await request(baseURL).get('/professor')
            .set('Content-Type', 'application/json')
            .expect(200); // Authorized
    });
});

describe('API REST de Professores com o Token', () => {
    let token;

    it('POST /usuario/login - Autenticar usuário para retornar token JWT', async () => {
        const senha = process.env.SENHA_USUARIO;
        const response = await request(baseURL)
            .post('/usuario/login')
            .set('Content-Type', 'application/json')
            .send({ "email": "gesley@gmail.com", "senha": senha })
            .expect(200); // OK

        token = response.body.access_token;
        expect(token).toBeDefined();
    });

    it('GET /professor - Lista todos os professores com autenticação', async () => {
        const response = await request(baseURL)
            .get('/professor')
            .set('Content-Type', 'application/json')
            .set('access-token', token)
            .expect(200);
    });

});

//ROTAS HORÁRIOS

describe('API REST de Horários sem o Token', () => {
    it('GET /horario - Lista todos os horários sem o token', async () => {
        const response = await request(baseURL).get('/horario')
            .set('Content-Type', 'application/json')
            .expect(401); // Unauthorized
    });
});

describe('API REST de Horários com o Token', () => {
    let token;

    it('POST /usuario/login - Autenticar usuário para retornar token JWT', async () => {
        const senha = process.env.SENHA_USUARIO;
        const response = await request(baseURL)
            .post('/usuario/login')
            .set('Content-Type', 'application/json')
            .send({ "email": "gesley@gmail.com", "senha": senha })
            .expect(200); // OK

        token = response.body.access_token;
        expect(token).toBeDefined();
    });

    it('GET /horario - Lista todos os horários com autenticação', async () => {
        const response = await request(baseURL)
            .get('/horario')
            .set('Content-Type', 'application/json')
            .set('access-token', token)
            .expect(200);

        const horarios = response.body;
        expect(horarios).toBeInstanceOf(Array);
    });

});

//ROTAS CURSOS

describe('API REST de Cursos sem o Token', () => {
    it('GET /curso - Lista todos os cursos sem o token', async () => {
        const response = await request(baseURL).get('/curso')
            .set('Content-Type', 'application/json')
            .expect(401); // Unauthorized
    });
});

describe('API REST de Cursos com o Token', () => {
    let token;

    it('POST /usuario/login - Autenticar usuário para retornar token JWT', async () => {
        const senha = process.env.SENHA_USUARIO;
        const response = await request(baseURL)
            .post('/usuario/login')
            .set('Content-Type', 'application/json')
            .send({ "email": "gesley@gmail.com", "senha": senha })
            .expect(200); // OK

        token = response.body.access_token;
        expect(token).toBeDefined();
    });

    it('GET /curso - Lista todos os cursos com autenticação', async () => {
        const response = await request(baseURL)
            .get('/curso')
            .set('Content-Type', 'application/json')
            .set('access-token', token)
            .expect(200);

        const cursos = response.body;
        expect(cursos).toBeInstanceOf(Array);
    });

    // Adicionar testes para outras operações de cursos
});







