// ==UserScript==
// @name           Direct links on Sourceforge download pages
// @namespace      http://www.amdmi3.ru/
// @include        http://sourceforge.net/projects/*/files/
// @include        http://www.sourceforge.net/projects/*/files/
// ==/UserScript==

(function()
{
  // !!! Change this to your favorite mirror !!!
  var mirror = "your_favorite_mirror";

  for(var i = 0; i < document.links.length; i++) {
    var elem = document.links[i];

    if (elem.href.match(/\/projects\/([^\/]+)\/files\/(.+\/[^&\/]+)\/download/i)) {

      elem.href="http://"+mirror+".dl.sourceforge.net/project/"+RegExp.$1+"/"+RegExp.$2;

    }
  }
})();
