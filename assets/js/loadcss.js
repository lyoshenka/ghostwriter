// https://github.com/filamentgroup/loadCSS

function loadCSS(e,t,n,o){"use strict";function r(){for(var e,t=0;t<l.length;t++)l[t].href&&l[t].href.indexOf(i.href)>-1&&(e=!0);e?i.media=n||"all":setTimeout(r)}var i=window.document.createElement("link"),d=t||window.document.getElementsByTagName("script")[0],l=window.document.styleSheets;return i.rel="stylesheet",i.href=e,i.media="only x",o&&(i.onload=o),d.parentNode.insertBefore(i,d),r(),i}

(window.async_css_urls||[]).forEach(function(url) { loadCSS(url);  });
