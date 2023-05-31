let input= document.getElementById('inputBox');
let buttons= document.querySelectorAll('button');
let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            let newString = input.value;
            input.value = eval(newString)
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            let newString = input.value;
            input.value = newString.substring(0, newString.length-1);
        }

        else{
            string = e.target.innerHTML;
            input.value += string;
        }

    })
})

