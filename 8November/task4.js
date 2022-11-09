function passwordFirst(){

    let x= document.getElementById("pass1st").value;

    if(x.length<6){
        document.getElementById("m").style.display="inline";
        document.getElementById("m").innerHTML="Too short";
        document.getElementById("m").style.color="red";
    }
    else 
    document.getElementById("m").style.display="none";
    }
    



    function passwordSecond(){
    
    let x= document.getElementById("pass1st").value;
    let z= document.getElementById("pass2nd").value;
    
    if(x == z){
        
        document.getElementById("bot").style.display="block";
    }
    else{
        document.getElementById("mm").style.display="inline";
        document.getElementById("mm").innerHTML="The two password dont match";
        document.getElementById("mm").style.color="red";
    }
    
    }