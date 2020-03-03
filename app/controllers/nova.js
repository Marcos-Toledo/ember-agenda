import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    salvar(pessoa) {
      this.transitionToRoute('lista');
    },

    salvarAoPressionarEnter() {
      this.send('salvar', this.get('model'));
    }
  }
});
