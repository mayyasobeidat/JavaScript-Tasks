function flag() {
    var country = document.getElementById("european").value;
    if( country =="Germany"){
        document.getElementById("pic").src="images/Germany.png";
        
    }
    else if( country =="Sweden"){
        document.getElementById("pic").src="images/Sweden.png";
        
    }
    else if( country =="Spain"){
        document.getElementById("pic").src="images/Spain.jpg";
        
    }
    else if( country =="Italy"){
        document.getElementById("pic").src="images/Italy.jpg";
        
    }
    else document.getElementById("pic").src="images/Denmark.jpg";
}
