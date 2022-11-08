let names = ["mohammad", "nasr" , "Abdullah" , "mahmoud" , "abood" , "mayyas"];

function shorterInArray (names)
    {
    var shorter = names[0].length;
    let index = 0;
    for (let x=1 ; x<names.length; x++)
    {if(names[x].length <shorter){shorter=names[x].length; index=x;}
    }
    return names[index];
    }
    document.write(shorterInArray(names));





