webpackJsonp([2],{

/***/ "kpQ7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const a = 3;
/* unused harmony export a */



/***/ }),

/***/ "yHtK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aa_js__ = __webpack_require__("kpQ7");



function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = e => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "6/md")).then(module => {
    var print = module.default;
    print();
  });
  return element;
}

document.body.appendChild(component());


/***/ })

},["yHtK"]);