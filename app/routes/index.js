import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blogpost');
  },

  actions: {
    save3(params) {
    var newBlogPost = this.store.createRecord('blogpost', params);
    newBlogPost.save();
    this.transitionTo('index');
  },

    update(blogpost, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          blogpost.set(key,params[key]);
        }
      });
      blogpost.save();
      this.transitionTo('index');
    },

    destroyBlogpost(blogpost) {
    blogpost.destroyRecord();
    this.transitionTo('index');
    }
  }
});
