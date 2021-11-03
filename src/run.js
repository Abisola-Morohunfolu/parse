const Parse = require('parse/node');

Parse.initialize('playroom', 'playroom-JSKEY');
//javascriptKey is required only if you have it on server.

Parse.serverURL = 'http://culvert.gamequiz.live/parse';

Parse.Cloud.run('hello').then((res) => console.log(res));
