import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  criarTelefoneAoIniciar: Ember.on('init', function() {
    return this.send('criarTelefone');
  }),

  actions: {
    salvar(pessoa) {
      let self = this;

      pessoa.save().then(() => {
        self.transitionToRoute('lista');
      });
    },

    salvarAoPressionarEnter() {
      this.send('salvar', this.get('model'));
    },

    removerTelefone(telefone) {
      if (confirm('Você está removendo um telefone, deseja continuar?')) {
        telefone.destroyRecord();
      }
    },

    criarTelefone() {
      let telefone = this.get('store').createRecord('telefone', {});
      this.set('telefone', telefone);
    },

    adicionarTelefone() {
      this.get('model.telefone').pushObject(telefone);
      this.send('criarTelefone');
    }
  }
});
