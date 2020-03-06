import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized.toString().replace(/(\d{4})(\d{4})/, '$1 $2');
  },

  serialize(deserialized) {
    return deserialized.replace(/\D/g, '');
  }
});
