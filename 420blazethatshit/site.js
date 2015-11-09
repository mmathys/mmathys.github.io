(function(angular) {
  'use strict';
angular.module('app', []).controller('controller', function($scope) {
  $scope.load = function() {
    var songsterr = require('./songsterr');
    songsterr.getTabByUrl($scope.url, function(err, res){
      console.log(res);
      saveFile(res.gp5, res.artist.name+" - "+res.title+" (420blazeit).gp5")
    });
  }
});
})(window.angular);

// Download a file form a url.
function saveFile(url, filename) {
  // Get file name from url.
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
    a.download = filename; // Set the file name.
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    delete a;
  };
  xhr.open('GET', url);
  xhr.send();
}
