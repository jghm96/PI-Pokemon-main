/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon ={
  "name":"jose",
  "hp":1,
  "weight":1,
  "height":1,
  "speed":1,
  "attack":250,
  "defense":1,
  "types":["fire"],
  "img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
}

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create({id:"1",...pokemon})));
    describe('TEST ROUTES POKEMON', () => {
      describe('/pokemons', () => {
          beforeEach(() => Pokemon.sync({ force: true }))
          it('responde con status 200 y length de 40 traidos de api', async() =>{
              const res = await agent.get('/pokemons');
              expect(res.statusCode).to.equal(200);
              expect(res.body.length).to.equal(40);
              
          }).timeout(10000)
  
          it('si creo un personaje ahora el lenght de pokemons es 41', async() =>{
              await agent.post('/pokemons').send(pokemon);
              const res = await agent.get('/pokemons');
              expect(res.statusCode).to.equal(200);
              expect(res.body.length).to.equal(41);
          }).timeout(10000)
          
          it(' trae el personaje de id 1 llamado bulbasaur', async() =>{
              const res = await agent.get('/pokemons/1');
              expect(res.statusCode).to.equal(200);
              expect(res.body.id).to.equal(1);
              expect(res.body.name).to.equal("bulbasaur");
          }).timeout(3000)
  
          it('trae el personaje creado de la db ', async() =>{
              const res1 = await agent.post('/pokemons').send(pokemon);
              const res = await agent.get(`/pokemons/${res1.body.id}`);
              expect(res.statusCode).to.equal(200);
              expect(res.body.name).to.equal("jose");
          }).timeout(3000)
  
          it('si no encuentra el pokemon en el id enviado responde un status 404 ', async() =>{
              const res = await agent.get(`/pokemons/85434957349`);
              expect(res.statusCode).to.equal(404);
              expect(res.body.error).to.equal("not found");
          }).timeout(3000)
  
          it(' trae el personaje correcto llamado por query desde la api', async() =>{
              const res = await agent.get('/pokemons?name=pikachu');
              expect(res.statusCode).to.equal(200);
              expect(res.body[0].name).to.equal("pikachu");
          }).timeout(3000)
  
          it(' trae el personaje correcto llamado por query desde la db', async() =>{
              const res1 = await agent.post('/pokemons').send(pokemon);
              const res = await agent.get('/pokemons?name=jose');
              expect(res.statusCode).to.equal(200);
              expect(res.body[0].name).to.equal("jose");
          }).timeout(3000)
  
          it('si no encuentra el pokemon en el  name enviado por query responde un status 404 ', async() =>{
              const res = await agent.get(`/pokemons?name=slinky`);
              expect(res.statusCode).to.equal(404);
              expect(res.body.error).to.equal("not found");
          }).timeout(3000)
  
          it('crea el personaje correctamente y responde con la informacion', async() =>{
              const res = await agent.post('/pokemons').send(pokemon);
              expect(res.statusCode).to.equal(201);
              expect(res.body.name).to.equal("jose")
          }).timeout(3000)
  
          it('Si se envia mal la informacion por body no se crea el pokemon y responde con status 400', async() =>{
              const res = await agent.post('/pokemons').send({hp:1});
              expect(res.statusCode).to.equal(400);
              expect(res.body.error).to.equal("error in data");
          }).timeout(3000)
  
      })
  
  });
});


