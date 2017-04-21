'use strict';

(function() {
  fetch('http://boulez2:8005/json')
    .then(res => res.json())
    .then(res => console.log(res));
})();
