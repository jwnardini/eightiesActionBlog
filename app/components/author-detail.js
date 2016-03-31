import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(author) {
      if (confirm('Do you REALLY want to delete this author?')) {
        this.sendAction('destroyAuthor', author);
      }
    }
  }

});
