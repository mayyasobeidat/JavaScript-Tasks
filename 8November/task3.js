function fontFamily() {
    var z = document.getElementById("family").value;
    switch (z)
    {
        case "Arial":
        document.getElementById("textbox").style.fontFamily="Arial, Helvetica, sans-serif"
        break;
        case "Times New Roman":
        document.getElementById("textbox").style.fontFamily="'Times New Roman', Times, serif"
        break;
        case "Tohama":
            document.getElementById("textbox").style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            break;
       
    }
  }


  function f_size() {
    var z = document.getElementById("fontsize").value;
    switch (z)
    {
        case "10px":
        document.getElementById("textbox").style.fontSize="10px"
        break;
        case "30px":
        document.getElementById("textbox").style.fontSize="30px"
        break;
        case "50px":
            document.getElementById("textbox").style.fontSize="50px"
            break;
       
    }
  }


  function italicText(){
    
    var x = document.getElementById("italic_text").checked;
    if(x)
    document.getElementById("textbox").style.fontStyle="italic";
    else if(!x)
    document.getElementById("textbox").style.fontStyle="normal";
}


  function boldText(){

    var z = document.getElementById("bold_text").checked;
    if(z)
    document.getElementById("textbox").style.fontWeight="bold";
    else if(!z)
    document.getElementById("textbox").style.fontWeight="normal";
}





function underlineText(){

    var z = document.getElementById("underline_text").checked;
    if(z)
    document.getElementById("textbox").style.textDecoration="underline";
    else if(!z)
    document.getElementById("textbox").style.textDecoration="none";
}
