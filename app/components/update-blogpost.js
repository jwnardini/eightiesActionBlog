import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogPostForm: false,
  actions: {
    updateBlogPostForm() {
      this.set('updateBlogPostForm', true);
    },
    update(blogpost) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('updateBlogPostForm', false);
      this.sendAction('update', blogpost, params);
    }
  }
});
