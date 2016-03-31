import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    blogposts: this.store.findAll('blogpost'),
    authors: this.store.findAll('author')
  });
},

  actions: {
    save3(params) {
      var newBlogPost = this.store.createRecord('blogpost', params);
      newBlogPost.save();
      this.transitionTo('index');
    },

    saveAuthor3(paramsAuthor) {
      var newAuthor = this.store.createRecord('author', paramsAuthor);
      newAuthor.save();
      this.transitionTo('index');
    },

    update(author, paramsAuthor) {
      Object.keys(paramsAuthor).forEach(function(key) {
        if(paramsAuthor[key]!==undefined) {
          author.set(key,paramsAuthor[key]);
        }
      });
      author.save();
      this.transitionTo('index');
    },

    destroyAuthor(author) {
      author.destroyRecord();
      this.transitionTo('index');
    }
  }
});
