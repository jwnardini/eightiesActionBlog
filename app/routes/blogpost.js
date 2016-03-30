import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blogpost', params.blogpost_id);
  },
  actions: {
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
