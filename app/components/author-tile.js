import Ember from 'ember';

export default Ember.Component.extend({
  updateAuthorForm: false,
  actions: {
    update(author, paramsAuthor) {
      this.sendAction('update', author, paramsAuthor);
    }
  }
});
