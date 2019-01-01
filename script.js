window.onload = function(){
    var dBirthday = document.getElementById("dBirthday");
    var pResult = document.getElementById("pResult");
    
    dBirthday.onchange = function(){
        var birthdayDate = new Date(this.value);               
        var actualDate = new Date();
        if(actualDate.getFullYear() - birthdayDate.getFullYear() >= 18){
            pResult.style.color = "black";
            pResult.innerHTML = "You are allowed to play. Press start button";
            
        }
        else
        {    
            pResult.style.color = "red";
            pResult.innerHTML = "You are not allowed to play";
        }
    };
};    



     