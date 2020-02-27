import Ember from 'ember';

export default Ember.Controller.extend({
  pessoa: Ember.Object.create({
    nome: 'Marcos',
    sobrenome: 'Toledo'
  })
});
