import Ember from 'ember';

export default Ember.Route.extend({
  model(paramsAuthor) {
    return this.store.findRecord('author', paramsAuthor.author_id);
  },
  actions: {
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
