import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(blogpost) {
      if (Confirm('Delete this blogpost?')) {
        this.sendAction('destroyBlogpost', blogpost);
      }
    }
  }
});
