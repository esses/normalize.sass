var path = require('path');

function includePath() {
    return [path.join(__dirname)];
}

module.exports = {
  includePath: includePath()
};
