//calculator is not active by default;
//please active calculator by prompt;
var message=confirm("Click ok to start calculator : ");
console.log(message);

function startCalculator() {
    let output=document.getElementById("output-value");
    let history=document.getElementById('history-value');
    let buttons=Array.from(document.getElementsByClassName('button'));
    
    
    buttons.map(button=>{
        console.log(button);
        button.addEventListener('click',function (e) {
            console.log(e.target.innerText);
            switch(e.target.innerText){
                case 'C':
                    output.innerText="";
                    break;
                case 'CE':
                    output.innerText=output.innerText.slice(0,-1);
                    break;
                case '=':
                    try{
                        history.innerText=eval(output.innerText);
                        output.innerText="";
                    }catch{
                        history.innerText="Error!";
                    }
                    break;
                
                default:
                    output.innerText+=e.target.innerText;
            }
        });
    });
    }

//conditions to check whether to start the calculator or not

if(message){
    document.getElementById('red').classList.add('show');
    startCalculator();
}else{
        document.getElementById('red').classList.remove('show');
}


