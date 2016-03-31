import Ember from 'ember';

export default Ember.Component.extend({
  updateAuthorForm: false,
  actions: {
    updateAuthorForm() {
      this.set('updateAuthorForm', true);
    },
    update(author) {
      var paramsAuthor = {
        name: this.get('name'),
        fighting: this.get('fighting'),
        biography: this.get('biography'),
      };
      this.set('updateAuthorForm', false);
      this.sendAction('update', author, paramsAuthor);
    }
  }
});
