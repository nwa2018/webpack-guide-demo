import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['新春', '福袋'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
