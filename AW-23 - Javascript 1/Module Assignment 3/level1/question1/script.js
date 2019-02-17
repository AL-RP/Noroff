//Use RegEx to validate form
document.getElementById("submit").addEventListener("click", function(){
    var input = document.getElementsByTagName("input");
    
    for(var i = 0; i < input.length; i++){
        var inputs = input[i].value;
        var pattern = new RegExp(input[i].pattern);
        var test = pattern.test(inputs);
        
        if(test === false){
            alert(input[i].name + " is invalid")
        }
    }
})

