import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import TokenGen from '../imports/token-gen';

import './main.html';

Template.exampleToken.onCreated(function exampleTokenOnCreated() {
  let token = new TokenGen.Token();
  this.token = new ReactiveVar(token);
});

Template.exampleToken.helpers({
  token() {
    return Template.instance().token.get();
  },
});

Template.exampleToken.events({
  'click button'(event, instance) {
    // Generate a new code when clicked
    instance.token.set(new TokenGen.Token());
  },
});
