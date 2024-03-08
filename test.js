const next=document.getElementById("next")
const previous=document.getElementById("previous")
//Creation of the Questions: 15 QCM and the rest are input questions
 q0={
    question:"How can you create an e-mail link?",
    a:"&lt;mail href='xxx@yyy.com'&gt;",
    b:"&lt;mail&gt;xxx@yyy.com&lt;mail&gt;",
    c:"&lt;a href='xxx@yyy.com'&gt;",
    d:"&lt;a href='mailto:xxx@yyy.com'&gt;",
    reponse:'d'
}
 q1={
    question:"Choose the correct HTML tag to make a text bold. ",
    a:"&lt;bold&gt;",
    b:"&lt;b&gt;",
    c:"&lt;bb&gt;",
    d:"&lt;text-bolding&gt;",
    reponse:'b'
}
 q2={
    question:"Which attribute is used to specify the character encoding of an HTML document?",
    a:"charset",
    b:"encoding",
    c:"lang",
    d:"forma",
    reponse:'a'
}
 q3={
    question:"What is the correct HTML for referring to an external style sheet?",
    a:"&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;",
    b:"&lt;link rel='stylesheet' type='text/css' href='mystyle.css'&gt;",
    c:"&lt;style src='mystyle.css'&gt;",
    d:"&lt;style link='mystyle.css'&gt;",
    reponse:'b'
}

 q4={
    question:"How do you change the text color of an element?",
    a:"color:",
    b:"text-color=",
    c:"text-color:",
    d:"fgcolor:",
    reponse:'a'
}
 q5={
    question:"What is the correct HTML tag for inserting a line break?",
    a:"&lt;break&gt;",
    b:"&lt;br&gt;&lt;/br&gt;",
    c:"&lt;lb&gt;",
    d:"&lt;br&gt;",
    reponse:'d'
}
 q6={
    question:"Which attribute is used to specify the URL of the page that the link goes to?",
    a:"href",
    b:"src",
    c:"slt",
    d:"title",
    reponse:'a'
}
 q7={
    question:"Which CSS property is used to change the color of text?",
    a:"background-color",
    b:"color",
    c:"font-size",
    d:"text-align",
    reponse:'b'
}
 q8={
    question:"Which is the correct CSS syntax?",
    a:"Body:color=black",
    b:"{body;color:black}",
    c:"{body:color=black(body}",
    d:"Body {color: black}",
    reponse:'d'
}
 q9={
    question:"Which CSS property is used to add space between elements?",
    a:"padding",
    b:"margin",
    c:"border",
    d:"background-color",
    reponse:'b'
}
 q10={
    question:"Choose the correct HTML tag for the largest heading",
    a:"&lt;head&gt;",
    b:"&lt;h1&gt;",
    c:"&lt;h6&gt;",
    d:"&lt;heading&gt;",
    reponse:'b'
}
 q11={
    question:"What does CSS stand for?",
    a:"Creative Style Sheets",
    b:"Colorful Style Sheets",
    c:"Computer Style Sheets",
    d:"Cascading Style Sheets",
    reponse:'d'
}
 q12={
    question:"Choose the correct HTML tag to make a text italic.",
    a:"&lt;italic&gt;",
    b:"&lt;it&gt;",
    c:"&lt;i&gt;",
    d:"&lt;ita&gt;",
    reponse:'c'
}

 q13={
    question:"wich proprety is not a css property ?",
    a:"altitude",
    b:"color",
    c:"font-family",
    d:"opacity",
    reponse:'a'

}
 q14={
    question:"how can you open a link in a new browser tab ?",
    a:"&lt; a href='url' target='_blank'&gt;",
    b:"&lt;a href='url' new&gt;",
    c:"&lt;a href='url' target='new'&gt;",
    d:"&lt;a href='url' target='new'&gt;",
    reponse:'a'
}
 q15={
    question:"How to justify a text using CSS",
    reponse:'text-align',
    useranswer:"<input type='text'> : justify;",
    correctanswer:"<span class='span'>text-align</span> : justify;"
}

 q16={
    question:"How can you set the color of an HTML element using CSS?",
    reponse:'color',
    useranswer:"<input type='text'>:#000000;",
    correctanswer:"<span class='span'>color</span>:#000000;"

}
 q17={
    question:"How can you create a border around an HTML element using CSS?",
    reponse:'border',
    useranswer:"<input type='text'>: 1px solid #000000;",
    correctanswer:"<span class='span'>border</span>: 1px solid #000000;",

}
 q18={
    question:"How can you add an ID to an HTML element?",
    reponse:'id',
    useranswer:"&lt;div <input type='text'>='id-name'&gt;content&lt;/div&gt;",
    correctanswer:"&lt;div <span class='span'>id</span>='id-name'&gt;content&lt;/div&gt;",
}
 q19={
    question:"What is the correct syntax for adding a link to another page within your website in HTML?",
    reponse:'href',
    useranswer:"&lt;a <input type='text'>='path/to/page.html'>Link Text&lt;/a&gt;" ,
    correctanswer:"&lt;a <span class='span'>href</span>='path/to/page.html'>Link Text&lt;/a&gt;" 
}
 q20={
    question:"What is the correct syntax for adding a checkbox button to an HTML form?",
    reponse:'typenamevalue',
    useranswer:"&lt;input <input type='text'>='checkbox' <input type='text'>='name' <input type='text'>='value'&gt;",
    correctanswer:"&lt;input <span class='span'>type</span>='checkbox' <span class='span'>name</span>='name' <span class='span'>value</span>='value'&gt;",

}

 q21={
    question:"How do you add a hover effect to all links in CSS?",
    reponse:'a:hover',
    useranswer:"<input type='text'>{color:red}",
    correctanswer:"<span class='span'>a:hover</span>{color:red}",
}
 q22={
    question:"In CSS, what property is used to create rounded corners?",
    reponse:'border-radius',
    useranswer:"<input type='text'>:5px;",
    correctanswer:"<span class='span'>border-radius</span>:5px;",
}
 q23={
    question:"How to open a link in a new tab",
    reponse:'target_blank',
    useranswer:"&lt;a href='url' <input type='text'>='<input type='text'>'&gt;Link Text&lt;/a&gt; " ,
    correctanswer:"&lt;a href='url' <span class='span'>target</span>='<span class='span'>_blank</span>'&gt;Link Text&lt;/a&gt; " ,                 
}
 q24={
    question:"How can you set the background color of an HTML element using CSS?",
    reponse:'background-color',
    useranswer:"<input type='text'>:red;",
    correctanswer:"<span class='span'>background-color</span>:red;",
}
 q25={
    question:"How can you add a background image to an HTML element using CSS?",
    reponse:'background-image',
    useranswer:"<input type='text'>: url('path/to/image.jpg');",
    correctanswer:"<span class='span'>background-image</span>:url('path/to/image.jpg');",

}
 q26={
    question:"What is the correct syntax for adding a radio button to an HTML form?",
    reponse:'radionamevalue',
    useranswer:"&lt;input type='<input type='text'>' <input type='text'>='name' <input type='text'>='value'&gt;",
    correctanswer:"&lt;input type='<span class='span'>radio</span>' <span class='span'>name</span>='name' <span class='span'>value</span>='value'&gt;"

}
 q27={
    question:"How can you set the font family of an HTML element using CSS?",
    reponse:'font-family',
    useranswer:"<input type='text'>: Arial, sans-serif;",
    correctanswer:"<span class='span'>font-family</span>: Arial, sans-serif;"

}
 q28={
    question:"How can you set the height of an HTML element using CSS?",
    reponse:'height',
    useranswer:"<input type='text'>:50px;",
    correctanswer:"<span class='span'>height</span>:50px;",
}
 q29={
    question:"in HTML, how to make an ordered list use lowercase letters instead of numbers",
    reponse:'typea',
    useranswer:"&lt;ol <input type='text'>='<input type='text'>'&gt;",
    correctanswer:"&lt;ol <span class='span'>type</span>='<span class='span'>a</span>'&gt;"

}
 q30={
    question:"In CSS, how to make an element have 10px margin on the right and left sides, and 5px on the top and bottom",
    reponse:'margin5px10px',
    useranswer:".classname{<input type='text'>:<input type='text'> <input type='text'>;}",
    correctanswer:".classname{<span class='span'>margin</span>:<span class='span'>5px</span> <span class='span'>10px</span>;}",
}

var QCMarray=[q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14];
var inputsarray=[q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30];

console.log(inputsarray)
console.log(randomQCM)

//create random function 

function randomitem(Element) {            
    var randomIndex = Math.floor(Math.random() * Element.length);
    var item = Element[randomIndex];
    return item;
}
var randomQCM=[];
var randominputs=[]

while (randomQCM.length!=10){
    var randit=randomitem(QCMarray);
    if (!(randomQCM.includes(randit))){
        randomQCM.push(randit) } 
}
while (randominputs.length!=10){
    var randite=randomitem(inputsarray);
    if(!(randominputs.includes(randite))){
        randominputs.push(randite)
    }
}

//fill questions place
var questions = document.getElementsByClassName("parts")
for(var p=0;p<10;p++){
    document.getElementById("question"+p).innerHTML=randomQCM[p].question
    document.getElementById("a"+p).innerHTML=randomQCM[p].a
    document.getElementById("b"+p).innerHTML=randomQCM[p].b
    document.getElementById("c"+p).innerHTML=randomQCM[p].c
    document.getElementById("d"+p).innerHTML=randomQCM[p].d
}

for(var m=0;m<10;m++){
    document.getElementById("question"+(m+10)).innerHTML=randominputs[m].question
    document.getElementById("input"+(m+1)).innerHTML=randominputs[m].useranswer
}

//show the next and hide the current question
var i=0;
function Next(){
    if (i<questions.length-2){
        i++;
        previous.disabled=false;
    }
    else{
        i++;
        next.disabled=true;
        document.getElementById("submit").style.display="block";
    }
    for(let n=0;n<20;n++){
        questions[n].style.display="none";
    }
    questions[i].style.display="block";
}
//hide the current question and show the previous one
function Previous(){
    if(i>1){
        i--;
        next.disabled=false
        document.getElementById("submit").style.display="none";
        document.getElementById("score").style.display="none";
    }
    else{
        i--;
        previous.disabled=true;

    }
    for(let n=0;n<20;n++){
        questions[n].style.display="none";
    }
    questions[i].style.display="block";
}
// ---------Score counting-----------
var wrongQCM=[];
var wronginputs=[];
var note=0;
function submitanswers(){
  
    for(let i=0;i<10;i++){
        var bool=false;
        var radios=document.getElementsByName('radio'+i);
        for (let j=0;j<4;j++){
            if(radios[j].checked==true){
                bool=true;
                if((radios[j].value).toLowerCase()==randomQCM[i].reponse){
                    note++;
                }
                else{
                    wrongQCM.push(i);
                }
            }
        }
        if(bool==false){
            wrongQCM.push(i)
        }
    }
    var r=0
    for(var i=1;i<=10;i++){
         inputs=document.querySelectorAll("#input"+(i)+" "+"input");
        var x="";
        for(var j=0;j<inputs.length;j++){
            x+=inputs[j].value;
        }
        if(x.toLowerCase()==randominputs[r].reponse){
            note++;
        }
        else{
            wronginputs.push(i)
        }
        r++;
    }
    document.getElementById("score1").innerHTML=note+"/20"
    questions[19].style.display="none"
    document.getElementById("score").style.display="block"
    document.getElementById("buttons").style.display="none"
    document.getElementById("submit").style.display="none"
    console.log(note)
}
//--------Correctig answers ------- 
function checkanswers(){
    document.getElementById("checkanswer").style.display="none"
    for(var i=0;i<wrongQCM.length;i++){
        var radios1=document.getElementsByName('radio'+wrongQCM[i]);
        var option=document.getElementsByClassName("option"+wrongQCM[i])
        for(var j=0;j<4;j++){
            if((radios1[j].value).toLowerCase()==randomQCM[wrongQCM[i]].reponse){
                option[j].style.background='#88ee88'
            }
        }
        questions[wrongQCM[i]].style.display="block";
    }

    for(var i=0;i<wronginputs.length;i++){
        questions[wronginputs[i]+9].style.display="block"
        document.getElementById("correct"+wronginputs[i]).style.display="block"
        document.getElementById("inputs"+wronginputs[i]).style.display="block"
        document.getElementById("your"+wronginputs[i]).style.display="block"
        document.getElementById("inputs"+(wronginputs[i])).innerHTML=randominputs[wronginputs[i]-1].correctanswer
        inputs=document.getElementById("input"+wronginputs[i]).innerHTML
        number=document.querySelectorAll("#input"+wronginputs[i]+" "+"input")
        for(var j=0;j<number.length;j++){
            inputs=inputs.replace('<input type="text">',"<span class='red'>"+number[j].value+"</span>")
        }
        document.getElementById("input"+wronginputs[i]).innerHTML=inputs

    }

}
//-----shoose a random image --------
var images=document.getElementsByClassName('image')
imgindex=0
function showphoto(){
    images[imgindex].style.display='none'
    if(note>=15){
        imgindex=Math.floor(Math.random()*4)
    }
    else{
        if(note>9){
            imgindex=(Math.floor(Math.random()*4))+4

        }
        else{
            imgindex=(Math.floor(Math.random()*4))+8
        }
    }
    images[imgindex].style.display='block'
}


