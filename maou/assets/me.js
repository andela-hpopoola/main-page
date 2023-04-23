if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){loaded();});}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){loaded();});}
function loaded(){setInterval(loop,350);}
var x=0;var titleText=["$ u","$ ui","$ uid","$ uid#","$ uid#0","$ uid#00","$ uid#000","$ uid#0001","$ uid#000","$ uid#00","$ uid#0","$ uid#","$ uid#","$ uid","$ ui","$ u","$","$ uid ","$ uid#0001"];function loop(){document.getElementsByTagName("title")[0].innerHTML=titleText[x++%titleText.length];}
