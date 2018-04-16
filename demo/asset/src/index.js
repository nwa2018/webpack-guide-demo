import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['新春', '福袋'], ' ');
  element.classList.add('hello');
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
