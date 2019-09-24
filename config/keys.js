// module.exports = {
//   mongoURI: 'mongodb+srv://dev:ryHHAh3qejHraQWf@travelpackcluster0-cvy97.mongodb.net/test?retryWrites=true&w=majority',
//   secretOrKey: 'E4C1D282763FF7A1CFD8A932E27A5'
// }

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}