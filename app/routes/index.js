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
  }
});
