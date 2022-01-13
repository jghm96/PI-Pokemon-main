const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('si id es null arroja error', (done) => {
        Pokemon.create({name:"hola",hp:89,height:1,weight:1,speed:1,attack:1,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('id');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('notNull Violation');
          });
      it('si name es null arroja error', (done) => {
        Pokemon.create({id:"33",hp:89,height:1,weight:1,speed:1,attack:1,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('name');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('notNull Violation');
          });
        });
      });
      it('si hp es null arroja error', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",height:1,weight:1,speed:1,attack:1,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('hp');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('notNull Violation');
          });
      });
      it('si hp es esta fuera de rango arroja error ', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",hp:101,height:1,weight:1,speed:1,attack:1,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('hp');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('Validation error');
          });
      });
      it('si speed es null arroja error', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",hp:1,height:1,weight:1,attack:1,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('speed');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('notNull Violation');
          });
      });
      it('si speed es esta fuera de rango arroja error ', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",hp:11,height:1,weight:1,speed:0,attack:1,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('speed');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('Validation error');
          });
      });
      it('si attack es null arroja error', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",height:1,weight:1,speed:1,hp:1,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('attack');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('notNull Violation');
          });
      });
      it('si attack es esta fuera de rango arroja error ', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",hp:99,height:1,weight:1,speed:1,attack:251,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('attack');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('Validation error');
          });
      });
      it('si defense es null arroja error', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",height:1,weight:1,speed:1,hp:1,attack:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('defense');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('notNull Violation');
          });
      });
      it('si attack es esta fuera de rango arroja error ', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",hp:99,height:1,weight:1,speed:1,attack:250})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('defense');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('Validation error');
          });
      });
      it('si height es null arroja error', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",defense:1,weight:1,speed:1,hp:1,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('height');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('notNull Violation');
          });
      });
      it('si height es esta fuera de rango arroja error ', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",hp:99,height:30,weight:1,speed:1,attack:250,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('height');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('Validation error');
          });
      });
      it('si weight es null arroja error', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",defense:1,height:1,speed:1,hp:1,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('weight');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('notNull Violation');
          });
      });
      it('si weight es esta fuera de rango arroja error ', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",hp:99,height:20,weight:10000,speed:1,attack:250,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('height');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('Validation error');
          });
      });
      it('si img no es url arroja error ', (done) => {
        Pokemon.create({id:"33",name:"Chardmander",hp:99,height:20,weight:1000,img:"hola",speed:1,attack:250,defense:1})
          .then(() => done(new Error()))
          .catch((e) =>{ done()
          expect(e.errors[0].ValidationErrorItem.path).toEquals('img');
          expect(e.errors[0].ValidationErrorItem.type).to.equals('Validation error');
          });
      });
      it('si toda la data esta bien se crea con exito en la db', () => {
        Pokemon.create({id:"33",name:"Chardmander",hp:99,height:20,weight:1000,speed:1,attack:250,defense:1});
      });
    });
  });
});
