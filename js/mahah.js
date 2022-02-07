// JavaScript Document
function ahah(url, target, funcname) {
        function ahahDone() {
          if(req.readyState == 4){
            if(req.status == 200){
                  if(!(target == undefined)){
                    document.getElementById(target).firstChild.nodeValue = req.responseText;
                  }
                  if(!(funcname == undefined)){
                    eval(funcname+"(req.responseText);");
                  }
            }else{
                  if(!(target == undefined)){
                    document.getElementById(target).firstChild.nodeValue = "ahah error:\n"+req.statusText;
                  }
              if(!(funcname == undefined)){
                    eval(funcname+"(req.responseText);");
                  }
            }
          }
        }

        if(!(target == undefined)){
            document.getElementById(target).firstChild.nodeValue = '...';
        }
        if(window.XMLHttpRequest){
                var req = new XMLHttpRequest();
        }else if(window.ActiveXObject) {
                var req = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if(req){
                req.onreadystatechange = function() {
                        ahahDone();
                };
                req.open("GET", url, true);
                req.send("");
        }
}
