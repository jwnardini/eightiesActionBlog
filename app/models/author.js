import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  fighting: DS.attr(),
  biography: DS.attr()
});
