

let bttt = 0; 
let q = 0;
const aaa = document.getElementById('var');
const bbb = document.getElementById('score');
const vvv = document.getElementById('zz');
const guess = document.getElementById("kkk");

const btn = document.querySelectorAll('li');
for(let bt of btn){
     bt.addEventListener('click',(e) =>{
      bttt = e.target.innerText;
      console.log(`Button Pressed ${bttt}`);
      aaa.innerText = `Select variable: ${bttt}`;

     })
    }

// let time = 9;
// function k() {
//   setInterval(() => {
//     setInterval(() => {
//       vvv.innerText = `Time remaining to select: ${time}`;
//       time--;
//       if (time === 0) {
//         time = 9;
//       }
//     }, 1000);
//   }, 10000);
// }



function fun()
{
        setInterval(function(){
            let time = 9;
            setInterval(() => {
                vvv.innerText = `Time remaining to select: ${time}`;
                time--;
                if(time ==0){
                    time=9;
                }

            }, 1000);

            //Generation of dice no
            const randNo = Math.floor(Math.random()*6)+1;
            //Changing dice img
            const diceImg='assets/dice'+randNo + '.png';
            document.querySelector('img').setAttribute('src', diceImg);

            if(randNo == Number(bttt)){
                console.log('ok');
                q++;
                bbb.innerText = `${q}`;
                guess.innerText = `Your guess ${Number(bttt)} was RIGHT`;
                }
            else{
                console.log('not ok');
                guess.innerText = `Your previous guess ${Number(
                  bttt
                )} was WRONG`;
            }
            bttt = 0; 

        },10000)
}

fun();