import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(author, paramsAuthor) {
      this.sendAction('update', author, paramsAuthor);
    },
    delete(author) {
    if (confirm('Are you sure you want to delete this author?')) {
      this.sendAction('destroyAuthor', author);
      }
    }
  }
});
