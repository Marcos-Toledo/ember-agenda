import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    salvar(pessoa) {
      let self = this;

      pessoa.save().then(() => {
        self.transitionToRoute('lista');
      });
    },

    salvarAoPressionarEnter() {
      this.send('salvar', this.get('model'));
    }
  }
});
