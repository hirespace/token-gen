import { Meteor } from 'meteor/meteor';

import TokenGen from '../imports/token-gen';

Meteor.startup(() => {
  console.log('The exported library is:');
  console.log(TokenGen);

  console.log('\nExample of generated tokens: ' + new TokenGen.Token());
});
