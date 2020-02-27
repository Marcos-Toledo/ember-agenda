import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['umaLetra::nome-errado'],

  umaLetra: Ember.computed('pessoa.nome', function() {
    return this.get('pessoa.nome') <= 1;
  })
});
