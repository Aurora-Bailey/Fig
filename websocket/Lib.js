'use strict';

module.exports = {
  randString: (length, lower, upper, numbers) => {
    var text = "";
    var possible = "";
    var possLower = 'abcdefghijklmnopqrstuvwxyz';
    var possUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var possNum = '0123456789';

    if (lower)
      possible += possLower;
    if (upper)
      possible += possUpper;
    if (numbers)
      possible += possNum;

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  },
  distance: (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  },
  deepCopy: (obj) => {
    return JSON.parse(JSON.stringify(obj));
  },
  test: 'asdf'
}
