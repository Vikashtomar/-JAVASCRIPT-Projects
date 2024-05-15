 const questions = [{
    'que': 'Which is follwing is a markup language',
    'a': 'HTML',
    'b':'CSS',
    'c':'javascript',
    'd':'PHP',
    'correct': 'a',
 },
{
    'que': 'Which is follwing is a php language',
    'a': 'HTML',
    'b':'CSS',
    'c':'javascript',
    'd':'PHP',
    'correct': 'd',
},
{
    'que': 'Which is follwing is a script language',
    'a': 'HTML',
    'b':'CSS',
    'c':'javascript',
    'd':'PHP',
    'correct': 'c',
},
{
    'que': 'Which is follwing is a style language',
    'a': 'HTML',
    'b':'CSS',
    'c':'javascript',
    'd':'PHP',
    'correct': 'b'
} 
]

let index = 0;
let total = questions.length;
let right = 0;
 let wrong = 0;
 
const quesBox = document.querySelector(".quesBox")
// console.log(quesBox)
const optionInputs = document.querySelectorAll('.options')
// console.log(optionInputs)

 const loadQUestion = ()=>{

    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    // console.log(data)

    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;


 }
 

 

 
//  document.querySelector("#submit").addEventListener("click", function(){

const submitQuiz = ()=>{

    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
        
    }
    else {
        wrong++;
    }
    index++;
    loadQUestion();
    return;
}


 
 const getAnswer = ()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
 }

 const reset = ()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
 }
 const endQuiz = ()=>{
    document.getElementsByClassName("box")[0].innerHTML = `
    
    <h3> Hii, you've scored ${right} / ${total} </h3>
    <h2> thank you for playing </h2>
    `
 }
 loadQUestion();