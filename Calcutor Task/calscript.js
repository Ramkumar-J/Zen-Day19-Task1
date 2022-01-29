let container=document.createElement("div");
container.setAttribute("class","container");
container.innerHTML=`<input onkeypress="showMessage(event)" class="screen" type="text" placeholder="0"></input>`;
document.body.appendChild(container);
let calkeys=document.createElement("div");
calkeys.setAttribute("class","cal-keys");
calkeys.innerHTML=`<button class="clr" onclick="allclear()">AC</button>
<button class="del" onclick="del()">⌫</button>
<button onclick="key('<')"><</button>
<button onclick="key('>')">></button>
<button onclick="key('7')">7</button>
<button onclick="key('8')">8</button>
<button onclick="key('9')">9</button>
<button onclick="key('/')">/</button>
<button onclick="key('4')">4</button>
<button onclick="key('5')">5</button>
<button onclick="key('6')">6</button>
<button onclick="key('*')">*</button>          
<button onclick="key('1')">1</button>
<button onclick="key('2')">2</button>
<button onclick="key('3')">3</button>
<button onclick="key('-')">-</button>
<button onclick="key('0')">0</button>
<button onclick="key('.')">.</button>
<button class="eq" onclick="equal('=')">=</button>
<button onclick="key('+')">+</button>`;
container.appendChild(calkeys);
let screen=document.querySelector(".screen");
      function key(num){
          screen.value += num;  
      }
      function allclear(){
        screen.value=" ";
      }
      function del(){
        screen.value=screen.value.slice(0,-1);
      }
      function equal(){
          try{
               screen.value=eval(screen.value);
          }
           catch(error){
              alert("Invalid")
          }
      }
      function showMessage(evt){
        let value=String.fromCharCode(evt.which);
        if(!(/[0-9]/.test(value))){
          evt.preventDefault();
          alert("Only numbers are allowed");
        }   
    }