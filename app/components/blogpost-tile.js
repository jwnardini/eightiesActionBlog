import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogPostForm: false,
  actions: {
    update(blogpost, params) {
      this.sendAction('update', blogpost, params);
    },
  }
});
