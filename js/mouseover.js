// JavaScript Document
   function showMouseOver(text, event)
    {
        document.getElementById('MouseOver').innerHTML = text;
        
        var topPixel = event.clientY + 10;
        var leftPixel = event.clientX + 10;

        document.getElementById('MouseOver').style.top = topPixel + "px";
        document.getElementById('MouseOver').style.left = leftPixel + "px";
        document.getElementById('MouseOver').style.display = "block";
    }

    function hideMouseOver()
    {
        document.getElementById('MouseOver').innerHTML = "";

        document.getElementById('MouseOver').style.top = "0px";
        document.getElementById('MouseOver').style.left = "0px";    
        document.getElementById('MouseOver').style.display = "none";
    }