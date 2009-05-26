// ==UserScript==
// @name           Sourceforge Direct Links
// @namespace      http://www.amdmi3.ru/
// @include        http://sourceforge.net/project/showfiles.php*
// @include        http://www.sourceforge.net/project/showfiles.php*
// ==/UserScript==

(function()
{
  var mirror = "add_your_favourite_mirror_here";
  var project = document.evaluate(
      "//a[@name='projectnav']/following::a[starts-with(@href, '/projects/')]/@href",
      document, null, XPathResult.STRING_TYPE, null
    ).stringValue.replace("/projects/", "").replace("/", "");

  for(var i=0; i<document.links.length; i++) {
    var elem = document.links[i];

    if (elem.href.match(/\/project\/downloading.php.*filename=([^&]+)/i)) {
      elem.href="http://"+mirror+".dl.sourceforge.net/sourceforge/"+project+"/"+RegExp.$1;
    }
  }

})();