import Ember from 'ember';

export default Ember.Component.extend({
  addNewAuthor: false,
  actions: {
    authorFormShow() {
      this.set('addNewAuthor', true);
    },

    saveAuthor1() {
      var paramsAuthor = {
        name: this.get('name'),
        fighting: this.get('fighting'),
        biography: this.get('biography'),
      };
      this.set('addNewAuthor', false);
      this.sendAction('saveAuthor2', paramsAuthor);
    }
  }
});
