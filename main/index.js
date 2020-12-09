//dependency
var rs=require("readline-sync");

//starting messages
console.log("Hello welcome to my game");

var player=rs.question("Please enter your name");

var welcomeMessage=`Welcome ${player}`;

console.log(welcomeMessage);

console.log("You will get 1 score for correct answer and -1 for wrong answer")
//variable to record score
var score=0;

//List of questions
const queBank = [
	{
		question: `
	Where do Shinchan lives?
	a: Tokyo
	b: Saitama
	c: Kasukabe
  d: Osaka\n`,
  
    answer: "c"
	},
	{
	question: `
	What is the name of tha doreomon's gadget through which we can understand and communicate in a foreign language?
	a: Transalation jelly
	b: Transalation bread
  c: Transalation gel
  d: Transalation gummy\n`,
	answer: "d"
	},
	{
	question: `
  Which pseudonym does Light Yagami used to kill people in death note?
	a: Kento
	b: L
	c: Misa
	d: Kira\n`,
	answer: "d"
	},
	{
	question: `
	Is shinchan 5 years old?
	a: true
	b: false\n`,
		answer: "a"
	},
  {
  question:
  `Who is the disciple of Saitama?
  a:Genos
  b:Tornado
  c:Mumen Rider
  d:Atomic Samurai
  \n`,
  answer:"a"
  },
  
  {
  question:`Which anime contains "nine tailed fox" character?
  a:Naruto
  b:Ninja Hattori 
  c:Parasyte
  d:Tokyo Ghoul
  \n`,
  answer:"a"
  },
  {
  question:`Who is the main protagonist of the parasyte series?
  a:Migi
  b:Shinichi Izumi
  c:Satomi
  d:Uragami
  \n`,
  answer:"b"
  },
  {
  question:`"Who is the owner of pokemon "Psyduck" in Pokemon series?
  a:Ash
  b:Brock
  c:Jessie
  d:Misty
  \n`,
  answer:"d"
  },
  {
  question:`"Who is referred to "Ryuzaki" in Death Note series?
    a:Light Yagami
    b:Misa
    c:L
    d:Matsuda
    \n`,
  answer:"c"
  },
  {
  question:`"What is the name of Goku's son?"
  a:Frieza
  b:Gohan
  c:Vegeta
  d:Raditz
  \n`,
  answer:"b"

  }
     
  ];



//Function to ask question and answer
function gameplay(question,CorrectAnswer){
    var isAnswerCorrect;

    var answer=rs.question(question);

    
    if(answer===CorrectAnswer){
        isAnswerCorrect=true;
        score+=1;
    }
    else{
        isAnswerCorrect=false;
        score-=1;
    }
    return isAnswerCorrect;
}


//List of questions




//Loop to call gameplay funtion
for(var i=0;i<queBank.length;i++){
  if(i==5&&score>=3){
      console.log("Proceeding to next level");
    }
  if(i==5&&score<3){
      console.log("Sorry you can't compete this level.");
      console.log("Better Luck next time");
      break;
    }
    var currentQuestion=queBank[i];
    var check=gameplay(currentQuestion.question,currentQuestion.answer);
    if(check===true){

        console.log(`Hey! It was a right answer`);
        console.log(`your score is ${score}`);
    }
    
    else{
        console.log(`Wrong answer`);
        console.log(`your score is ${score}`);
    
    }
    if(i==4&&score<3){
      console.log("Sorry you can't compete this level.");
      console.log("Better Luck next time");
      break;
    }
    
}



