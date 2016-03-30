import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlogPost: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlogPost', true);
    },

    save1() {
     var params = {
       author: this.get('author'),
       title: this.get('title'),
       content: this.get('content'),
       image: this.get('image'),
     };
     this.set('addNewBlogPost', false);
     this.sendAction('save2', params);
   }
  }
});
