var Answer_list = Array(7);
var Radio_Button_list = Array(7);

console.log(navigator.userAgent);

// var check_for_highlight = true;

var x_1 = document.getElementsByClassName("option1");
console.log(x_1);


    for (var i = 0; i < x_1.length; i++) {

    x_1[i].addEventListener("click", function(){

    
    Answer_list[0] = ($(this).find('span')[0].innerHTML);
    console.log(Answer_list);

    // console.log($(this)[0].parentNode.children);
    var div_list = ($(this)[0].parentNode.children);
    // console.log(div_list);
    var radiobuttondivID = (div_list[0].id);
    // console.log(radiobuttondivID);
    var divElement = document.getElementById(radiobuttondivID);

    // Find the radio button within the div
    var radioButton = divElement.querySelector("input[type='radio']");

    // Check if the radio button was found
    if (radioButton) {
        // Access the ID of the radio button
        // var radioButtonID = radioButton.id;
        // console.log("Radio button ID:", radioButtonID);

        // Select the radio button
        radioButton.checked = true;
    } else {
        console.log("Radio button not found.");
    }


    
    var selectedEl = document.querySelector(".selected1");
    console.log(selectedEl);


        if(selectedEl){
            selectedEl.classList.remove("selected1");
            
           
        }
        
        
        this.classList.add("selected1");
        

        
         
        });;

}

var rx_1 = document.getElementsByClassName("rb1");
console.log(rx_1);

//functionality for the radio button click
for (var i = 0; i < rx_1.length; i++) {

    rx_1[i].addEventListener('click',(function(){
        ($(this)[0].parentNode.parentNode.children[1].click());
        // alert("Clicked");
    }));
};



var x_2 = document.getElementsByClassName("option2");

// console.log(x[1]);

    for (var i = 0; i < x_2.length; i++) {

    x_2[i].addEventListener("click", function(){

    Answer_list[1] = ($(this).find('span')[0].innerHTML);

    console.log(Answer_list);
    // console.log($(this)[0].parentNode.children);
    var div_list = ($(this)[0].parentNode.children);
    // console.log(div_list);
    var radiobuttondivID = (div_list[0].id);
    // console.log(radiobuttondivID);
    var divElement = document.getElementById(radiobuttondivID);

    // Find the radio button within the div
    var radioButton = divElement.querySelector("input[type='radio']");

    // Check if the radio button was found
    if (radioButton) {
        // Access the ID of the radio button
        // var radioButtonID = radioButton.id;
        // console.log("Radio button ID:", radioButtonID);

        // Select the radio button
        radioButton.checked = true;
    } else {
        console.log("Radio button not found.");
    }
    
    var selectedEl = document.querySelector(".selected2");
   


    if(selectedEl){
        selectedEl.classList.remove("selected2");
    }
    
    this.classList.add("selected2");
    // Optionsreset((this.id));
     
    });
}

var rx_2 = document.getElementsByClassName("rb2");
console.log(rx_2);

//functionality for the radio button click
for (var i = 0; i < rx_2.length; i++) {

    rx_2[i].addEventListener('click',(function(){
        ($(this)[0].parentNode.parentNode.children[1].click());
        // alert("Clicked");
    }));
};

var x_3 = document.getElementsByClassName("option3");

// console.log(x[1]);

    for (var i = 0; i < x_3.length; i++) {

    x_3[i].addEventListener("click", function(){

    Answer_list[2] = ($(this).find('span')[0].innerHTML);
    console.log(Answer_list);
    var div_list = ($(this)[0].parentNode.children);
    // console.log(div_list);
    var radiobuttondivID = (div_list[0].id);
    // console.log(radiobuttondivID);
    var divElement = document.getElementById(radiobuttondivID);

    // Find the radio button within the div
    var radioButton = divElement.querySelector("input[type='radio']");

    // Check if the radio button was found
    if (radioButton) {
        // Access the ID of the radio button
        // var radioButtonID = radioButton.id;
        // console.log("Radio button ID:", radioButtonID);

        // Select the radio button
        radioButton.checked = true;
    } else {
        console.log("Radio button not found.");
    }
    
    // var selectedEl = document.querySelector(".selected2");
    var selectedEl = document.querySelector(".selected3");
   


    if(selectedEl){
        selectedEl.classList.remove("selected3");
    }
    
    this.classList.add("selected3");
     
    });
}

var rx_3 = document.getElementsByClassName("rb3");
console.log(rx_3);

//functionality for the radio button click
for (var i = 0; i < rx_3.length; i++) {

    rx_3[i].addEventListener('click',(function(){
        ($(this)[0].parentNode.parentNode.children[1].click());
        // alert("Clicked");
    }));
};


var x_4 = document.getElementsByClassName("option4");

// console.log(x[1]);

    for (var i = 0; i < x_4.length; i++) {

    x_4[i].addEventListener("click", function(){

    Answer_list[3] = ($(this).find('span')[0].innerHTML);
    console.log(Answer_list);
    // console.log($(this)[0].parentNode.children);
    var div_list = ($(this)[0].parentNode.children);
    // console.log(div_list);
    var radiobuttondivID = (div_list[0].id);
    // console.log(radiobuttondivID);
    var divElement = document.getElementById(radiobuttondivID);

    // Find the radio button within the div
    var radioButton = divElement.querySelector("input[type='radio']");

    // Check if the radio button was found
    if (radioButton) {
        // Access the ID of the radio button
        // var radioButtonID = radioButton.id;
        // console.log("Radio button ID:", radioButtonID);

        // Select the radio button
        radioButton.checked = true;
    } else {
        console.log("Radio button not found.");
    }


    var selectedEl = document.querySelector(".selected4");
   


    if(selectedEl){
        selectedEl.classList.remove("selected4");
    }
    
    this.classList.add("selected4");
     
    });
}

var rx_4 = document.getElementsByClassName("rb4");
console.log(rx_4);

//functionality for the radio button click
for (var i = 0; i < rx_4.length; i++) {

    rx_4[i].addEventListener('click',(function(){
        ($(this)[0].parentNode.parentNode.children[1].click());
        // alert("Clicked");
    }));
};


var x_5 = document.getElementsByClassName("option5");

// console.log(x[1]);

    for (var i = 0; i < x_5.length; i++) {

    x_5[i].addEventListener("click", function(){

    Answer_list[4] = ($(this).find('span')[0].innerHTML);
    console.log(Answer_list);
    // console.log($(this)[0].parentNode.children);
    var div_list = ($(this)[0].parentNode.children);
    // console.log(div_list);
    var radiobuttondivID = (div_list[0].id);
    // console.log(radiobuttondivID);
    var divElement = document.getElementById(radiobuttondivID);

    // Find the radio button within the div
    var radioButton = divElement.querySelector("input[type='radio']");

    // Check if the radio button was found
    if (radioButton) {
        // Access the ID of the radio button
        // var radioButtonID = radioButton.id;
        // console.log("Radio button ID:", radioButtonID);

        // Select the radio button
        radioButton.checked = true;
    } else {
        console.log("Radio button not found.");
    }
    
    var selectedEl = document.querySelector(".selected5");
   


    if(selectedEl){
        selectedEl.classList.remove("selected5");
    }
    
    this.classList.add("selected5");
     
    });
}

var rx_5 = document.getElementsByClassName("rb5");
console.log(rx_5);

//functionality for the radio button click
for (var i = 0; i < rx_5.length; i++) {

    rx_5[i].addEventListener('click',(function(){
        ($(this)[0].parentNode.parentNode.children[1].click());
        // alert("Clicked");
    }));
};

var x_6 = document.getElementsByClassName("option6");

// console.log(x[1]);

    for (var i = 0; i < x_6.length; i++) {

    x_6[i].addEventListener("click", function(){

    Answer_list[5] = ($(this).find('span')[0].innerHTML);
    console.log(Answer_list);

    // console.log($(this)[0].parentNode.children);
    var div_list = ($(this)[0].parentNode.children);
    // console.log(div_list);
    var radiobuttondivID = (div_list[0].id);
    // console.log(radiobuttondivID);
    var divElement = document.getElementById(radiobuttondivID);

    // Find the radio button within the div
    var radioButton = divElement.querySelector("input[type='radio']");

    // Check if the radio button was found
    if (radioButton) {
        // Access the ID of the radio button
        // var radioButtonID = radioButton.id;
        // console.log("Radio button ID:", radioButtonID);

        // Select the radio button
        radioButton.checked = true;
    } else {
        console.log("Radio button not found.");
    }
    
    var selectedEl = document.querySelector(".selected6");
   


    if(selectedEl){
        selectedEl.classList.remove("selected6");
    }
    
    this.classList.add("selected6");
     
    });
}

var rx_6 = document.getElementsByClassName("rb6");
console.log(rx_6);

//functionality for the radio button click
for (var i = 0; i < rx_6.length; i++) {

    rx_6[i].addEventListener('click',(function(){
        ($(this)[0].parentNode.parentNode.children[1].click());
        // alert("Clicked");
    }));
};

var x_7 = document.getElementsByClassName("option7");

// console.log(x[1]);

    for (var i = 0; i < x_7.length; i++) {

    x_7[i].addEventListener("click", function(){

    Answer_list[6] = ($(this).find('span')[0].innerHTML);
    console.log(Answer_list);
    var selectedEl = document.querySelector(".selected7");
    // console.log($(this)[0].parentNode.children);
    var div_list = ($(this)[0].parentNode.children);
    // console.log(div_list);
    var radiobuttondivID = (div_list[0].id);
    // console.log(radiobuttondivID);
    var divElement = document.getElementById(radiobuttondivID);

    // Find the radio button within the div
    var radioButton = divElement.querySelector("input[type='radio']");

    // Check if the radio button was found
    if (radioButton) {
        // Access the ID of the radio button
        // var radioButtonID = radioButton.id;
        // console.log("Radio button ID:", radioButtonID);

        // Select the radio button
        radioButton.checked = true;
    } else {
        console.log("Radio button not found.");
    }
   


    if(selectedEl){
        selectedEl.classList.remove("selected7");
    }
    
    this.classList.add("selected7");
     
    });
}

var rx_7 = document.getElementsByClassName("rb7");
console.log(rx_7);

//functionality for the radio button click
for (var i = 0; i < rx_7.length; i++) {

    rx_7[i].addEventListener('click',(function(){
        ($(this)[0].parentNode.parentNode.children[1].click());
        // alert("Clicked");
    }));
};



function checkAnswers(){
    // console.log(Answer_list) 
    var empty_elements = Array();
    for (var ind =0; ind<Answer_list.length; ind ++){
        if (!Answer_list.hasOwnProperty(ind)){
            alert('Please answer Question '+ (ind+1));
            empty_elements.push(ind+1);
            // document.getElementById('Question'+(ind+1)).style.color = 'red';
            (document.getElementById('Question'+(ind+1)).children[0].style.backgroundColor = '#F99F23');

        var elmntToView = document.getElementById("Question"+(empty_elements[0]).toString());
        elmntToView.scrollIntoView();

        }

    }
       
    if(Answer_list.includes(undefined)!=true){

        document.getElementById('button_submit').style.backgroundColor = '#F99F23';
        window.location.assign("Confirmation_Page.html")
 
    }; 


};


//this function changes the color of the questions to black, used becuase once you click on submit and question is incomplete, it changes to orage.
//to change question back to black color after clicking on option
function ChangeQuestionColor(d){

    var answer_id = (d.parentNode.id);
    // console.log(answer_id);
    var fields = answer_id.split("");
    var num = (fields[0]);
    // console.log(num);
    //console.log(document.getElementsByClassName('Question_Header'+num)[0].style.backgroundColor = 'white');
    console.log(document.getElementsByClassName('Question_Header'+num)[0].parentNode.parentNode.style.backgroundColor = 'white');
    // .style.backgroundColor = 'white';;
    // document.getElementById('Question'+num).children[0].style.backgroundColor = 'white';


}

function Playaudio1(e){
    console.log(e.id);
    // var div_details = (document.getElementsByClassName('Playbutton1'));
    // var div_id = (div_details[0].id);
    // console.log(div_id);
    (document.getElementById(e.id).style.backgroundColor = '#F99F23');
    
    var x = document.getElementById('A1_audio_file');
    x.play();
    x.onended = function() {
        (document.getElementById(e.id).style.backgroundColor = 'lightgrey');
        
    };

    
   


}

function Playaudio2(e){
    // (e.querySelectorAll('i')[0].style.color = '#F99F23');
    // var div_details = (document.getElementsByClassName('Playbutton2'));
    // var div_id = (div_details[0].id);
    (document.getElementById(e.id).style.backgroundColor = '#F99F23');

    var x = document.getElementById('A2_audio_file');
    x.play();
    x.onended = function() {
        // (e.querySelectorAll('i')[0].style.color = '#2EC4B6');
        (document.getElementById(e.id).style.backgroundColor = 'lightgrey');
 };

}

function Playaudio3(e){
    // (e.querySelectorAll('i')[0].style.color = '#F99F23');
    // var div_details = (document.getElementsByClassName('Playbutton3'));
    // var div_id = (div_details[0].id);
    (document.getElementById(e.id).style.backgroundColor = '#F99F23');

    var x = document.getElementById('A3_audio_file');
    x.play();
    x.onended = function() {
        // (e.querySelectorAll('i')[0].style.color = '#2EC4B6');
        (document.getElementById(e.id).style.backgroundColor = 'lightgrey');
 };

}

function Playaudio4(e){
    // (e.querySelectorAll('i')[0].style.color = '#F99F23');
    // var div_details = (document.getElementsByClassName('Playbutton4'));
    // var div_id = (div_details[0].id);
    (document.getElementById(e.id).style.backgroundColor = '#F99F23');

    var x = document.getElementById('A4_audio_file');
    x.play();
    x.onended = function() {
        // (e.querySelectorAll('i')[0].style.color = '#2EC4B6');
        (document.getElementById(e.id).style.backgroundColor = 'lightgrey');
 };

}

function Playaudio5(e){
    // (e.querySelectorAll('i')[0].style.color = '#F99F23');
    // var div_details = (document.getElementsByClassName('Playbutton5'));
    // var div_id = (div_details[0].id);
    (document.getElementById(e.id).style.backgroundColor = '#F99F23');


    var x = document.getElementById('A5_audio_file');
    x.play();
    x.onended = function() {
        // (e.querySelectorAll('i')[0].style.color = '#2EC4B6');
        (document.getElementById(e.id).style.backgroundColor = 'lightgrey');
 };

}




//Question play functions
function PlayQuestion1(e){
    (document.getElementById(e.parentNode.id).style.backgroundColor = '#F99F23');
    //console.log(document.getElementById(e.parentNode.id).style.backgroundColor = 'red');
        // [0]).style.backgroundColor ='#F99F23'  ;
        // [0].style.color = '#F99F23');

    var question1_audio = document.getElementById('Question1_1');
    question1_audio.play();
    //console.log(e.parentNode.querySelector('svg').style.fill = 'green');
    question1_audio.onended = function() {
        (document.getElementById(e.parentNode.id).style.backgroundColor = 'lightgrey');
    };

}

function PlayQuestion2(e){
    // (e.parentNode.querySelectorAll('i')[0].style.color = '#F99F23');
    document.getElementById(e.parentNode.id).style.backgroundColor = '#F99F23';
    var question2_audio = document.getElementById('Question2_1');
    question2_audio.play();
    question2_audio.onended = function() {
        (document.getElementById(e.parentNode.id).style.backgroundColor = 'lightgrey');
    };

}

function PlayQuestion3(e){
    // (e.parentNode.querySelectorAll('i')[0].style.color = '#F99F23');

    var question3_audio = document.getElementById('Question3_1');
    (document.getElementById(e.parentNode.id).style.backgroundColor = '#F99F23');
    question3_audio.play();
    question3_audio.onended = function() {
        // (e.parentNode.querySelectorAll('i')[0].style.color = '#2EC4B6');
        (document.getElementById(e.parentNode.id).style.backgroundColor = 'lightgrey');
    };

}

function PlayQuestion4(e){
    // (e.parentNode.querySelectorAll('i')[0].style.color = '#F99F23');
    (document.getElementById(e.parentNode.id).style.backgroundColor = '#F99F23');
    var question4_audio = document.getElementById('Question4_1');
    question4_audio.play();
    question4_audio.onended = function() {
        // (e.parentNode.querySelectorAll('i')[0].style.color = '#2EC4B6');
        (document.getElementById(e.parentNode.id).style.backgroundColor = 'lightgrey');
    };

}

function PlayQuestion5(e){
    // (e.parentNode.querySelectorAll('i')[0].style.color = '#F99F23');
    (document.getElementById(e.parentNode.id).style.backgroundColor = '#F99F23');
    var question5_audio = document.getElementById('Question5_1');
    question5_audio.play();
    question5_audio.onended = function() {
        // (e.parentNode.querySelectorAll('i')[0].style.color = '#2EC4B6');
        (document.getElementById(e.parentNode.id).style.backgroundColor = 'lightgrey');
    };

}

function PlayQuestion6(e){
    // (e.parentNode.querySelectorAll('i')[0].style.color = '#F99F23');
    (document.getElementById(e.parentNode.id).style.backgroundColor = '#F99F23');

    var question6_audio = document.getElementById('Question6_1');
    question6_audio.play();
    question6_audio.onended = function() {
        // (e.parentNode.querySelectorAll('i')[0].style.color = '#2EC4B6');
        (document.getElementById(e.parentNode.id).style.backgroundColor = 'lightgrey');
    };

}

function PlayQuestion7(e){
    // (e.parentNode.querySelectorAll('i')[0].style.color = '#F99F23');
    (document.getElementById(e.parentNode.id).style.backgroundColor = '#F99F23');
    var question7_audio = document.getElementById('Question7_1');
    question7_audio.play();
    question7_audio.onended = function() {
        // (e.parentNode.querySelectorAll('i')[0].style.color = '#2EC4B6');
        (document.getElementById(e.parentNode.id).style.backgroundColor = 'lightgrey');
    };

}


$('.Playbutton1').click(function(e){
    e.stopPropagation();
});

$('.Playbutton2').click(function(e){
    e.stopPropagation();
});

$('.Playbutton3').click(function(e){
    e.stopPropagation();
});

$('.Playbutton4').click(function(e){
    e.stopPropagation();
});

$('.Playbutton5').click(function(e){
    e.stopPropagation();
});

function Optionsreset1(id){
    // (document.getElementById(id));
    var fields = id.split("");
    console.log(fields);
    var avoid_answer_number = fields[fields.length-1]
    

    var answernumbers = ['1','2','3','4'];

    var svg_elements = (document.getElementsByClassName('UTDface'+1));
    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = '#2EC4B6');
    }
    
    for (var i =0; i <answernumbers.length;i++ ){

        if (answernumbers[i]==avoid_answer_number){
            // console.log('no');
            (document.getElementById(id).querySelector('i').style.color = 'White');

        }

        else{
            (document.getElementById('q1a'+answernumbers[i]).style.color = 'black');

            (document.getElementById('q1a'+answernumbers[i]).querySelector('i').style.color = '#2EC4B6');
        }
    };



};



function Optionsreset2(id){
    // (document.getElementById(id));
    var fields = id.split("");
    var avoid_answer_number = fields[fields.length-1]
    // console.log(avoid_answer_number);
    var answernumbers = ['1','2','3','4'];

    var svg_elements = (document.getElementsByClassName('UTDface'+2));
    // console.log(svg_elements);
    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = '#2EC4B6');
    }
    
    for (var i =0; i <answernumbers.length;i++ ){

        if (answernumbers[i]==avoid_answer_number){
            // console.log(answernumbers[i]);
            (document.getElementById(id).querySelector('i')).style.color = 'White';

        }

        else{
            (document.getElementById('q2a'+answernumbers[i]).style.color = 'black');

            (document.getElementById('q2a'+answernumbers[i]).querySelector('i').style.color = '#2EC4B6');
        }
    };



};

function Optionsreset3(id){
    // (document.getElementById(id));
    var fields = id.split("");
    var avoid_answer_number = fields[fields.length-1]
    // console.log(avoid_answer_number);
    var answernumbers = ['1','2','3','4'];

    var svg_elements = (document.getElementsByClassName('UTDface'+3));
    // console.log(svg_elements);
    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = '#2EC4B6');
    }
    
    for (var i =0; i <answernumbers.length;i++ ){

        if (answernumbers[i]==avoid_answer_number){
            // console.log(answernumbers[i]);
            (document.getElementById(id).querySelector('i')).style.color = 'White';

        }

        else{
            (document.getElementById('q3a'+answernumbers[i]).style.color = 'black');

            (document.getElementById('q3a'+answernumbers[i]).querySelector('i').style.color = '#2EC4B6');
        }
    };



};

function Optionsreset4(id){
    // (document.getElementById(id));
    var fields = id.split("");
    var avoid_answer_number = fields[fields.length-1]
    // console.log(avoid_answer_number);
    var answernumbers = ['1','2','3','4'];

    var svg_elements = (document.getElementsByClassName('UTDface'+4));
    // console.log(svg_elements);
    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = '#2EC4B6');
    }
    
    for (var i =0; i <answernumbers.length;i++ ){

        if (answernumbers[i]==avoid_answer_number){
            // console.log(answernumbers[i]);
            (document.getElementById(id).querySelector('i')).style.color = 'White';

        }

        else{
            (document.getElementById('q4a'+answernumbers[i]).style.color = 'black');

            (document.getElementById('q4a'+answernumbers[i]).querySelector('i').style.color = '#2EC4B6');
        }
    };



};

function Optionsreset5(id){
    // (document.getElementById(id));
    var fields = id.split("");
    var avoid_answer_number = fields[fields.length-1]
    // console.log(avoid_answer_number);
    var answernumbers = ['1','2','3','4'];

    var svg_elements = (document.getElementsByClassName('UTDface'+5));
    // console.log(svg_elements);
    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = '#2EC4B6');
    }
    
    for (var i =0; i <answernumbers.length;i++ ){

        if (answernumbers[i]==avoid_answer_number){
            // console.log(answernumbers[i]);
            (document.getElementById(id).querySelector('i')).style.color = 'White';

        }

        else{
            (document.getElementById('q5a'+answernumbers[i]).style.color = 'black');

            (document.getElementById('q5a'+answernumbers[i]).querySelector('i').style.color = '#2EC4B6');
        }
    };



};

function Optionsreset6(id){
    // (document.getElementById(id));
    var fields = id.split("");
    var avoid_answer_number = fields[fields.length-1]
    // console.log(avoid_answer_number);
    var answernumbers = ['1','2','3','4'];

    var svg_elements = (document.getElementsByClassName('UTDface'+6));
    // console.log(svg_elements);
    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = '#2EC4B6');
    }
    
    for (var i =0; i <answernumbers.length;i++ ){

        if (answernumbers[i]==avoid_answer_number){
            // console.log(answernumbers[i]);
            (document.getElementById(id).querySelector('i')).style.color = 'White';

        }

        else{
            (document.getElementById('q6a'+answernumbers[i]).style.color = 'black');

            (document.getElementById('q6a'+answernumbers[i]).querySelector('i').style.color = '#2EC4B6');
        }
    };



};

function Optionsreset7(id){
    // (document.getElementById(id));
    var fields = id.split("");
    var avoid_answer_number = fields[fields.length-1]
    // console.log(avoid_answer_number);
    var answernumbers = ['1','2','3','4'];

    var svg_elements = (document.getElementsByClassName('UTDface'+7));
    // console.log(svg_elements);
    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = '#2EC4B6');
    }
    
    for (var i =0; i <answernumbers.length;i++ ){

        if (answernumbers[i]==avoid_answer_number){
            // console.log(answernumbers[i]);
            (document.getElementById(id).querySelector('i')).style.color = 'White';

        }

        else{
            (document.getElementById('q7a'+answernumbers[i]).style.color = 'black');

            (document.getElementById('q7a'+answernumbers[i]).querySelector('i').style.color = '#2EC4B6');
        }
    };



};






function OptionsresetUTD1(id){

    var svg_elements = (document.getElementById(id).querySelector('svg').getElementsByClassName('UTDface1'));

    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = 'white');
    }

    document.getElementById('q1a1').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q1a2').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q1a3').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q1a4').querySelector('i').style.color = '#2EC4B6';

}


function OptionsresetUTD2(id){

    var svg_elements = (document.getElementById(id).querySelector('svg').getElementsByClassName('UTDface2'));

    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = 'white');
    }

    document.getElementById('q2a1').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q2a2').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q2a3').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q2a4').querySelector('i').style.color = '#2EC4B6';

}

function OptionsresetUTD3(id){

    var svg_elements = (document.getElementById(id).querySelector('svg').getElementsByClassName('UTDface3'));

    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = 'white');
    }

    document.getElementById('q3a1').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q3a2').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q3a3').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q3a4').querySelector('i').style.color = '#2EC4B6';

}

function OptionsresetUTD4(id){

    var svg_elements = (document.getElementById(id).querySelector('svg').getElementsByClassName('UTDface4'));

    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = 'white');
    }

    document.getElementById('q4a1').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q4a2').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q4a3').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q4a4').querySelector('i').style.color = '#2EC4B6';

}

function OptionsresetUTD5(id){

    var svg_elements = (document.getElementById(id).querySelector('svg').getElementsByClassName('UTDface5'));

    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = 'white');
    }

    document.getElementById('q5a1').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q5a2').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q5a3').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q5a4').querySelector('i').style.color = '#2EC4B6';

}

function OptionsresetUTD6(id){

    var svg_elements = (document.getElementById(id).querySelector('svg').getElementsByClassName('UTDface6'));

    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = 'white');
    }

    document.getElementById('q6a1').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q6a2').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q6a3').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q6a4').querySelector('i').style.color = '#2EC4B6';

}

function OptionsresetUTD7(id){

    var svg_elements = (document.getElementById(id).querySelector('svg').getElementsByClassName('UTDface7'));

    for (var j=0;j<svg_elements.length;j++){
        (svg_elements[j].style.stroke = 'white');
    }

    document.getElementById('q7a1').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q7a2').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q7a3').querySelector('i').style.color = '#2EC4B6';
    document.getElementById('q7a4').querySelector('i').style.color = '#2EC4B6';

}


function PlayInstructions(e){
    (e.parentNode.querySelector('svg').style.backgroundColor = '#F99F23');
        // [0]).style.backgroundColor ='#F99F23'  ;
        // [0].style.color = '#F99F23');

    var question1_audio = document.getElementById('Instructions');
    question1_audio.play();
    question1_audio.onended = function() {
        (e.parentNode.querySelector('svg').style.backgroundColor = 'white');
    };

}

function TurnPage(id){
    console.log(id);
    // console.log(Answer_list);
    if (id =='question1nav'){
        if(typeof Answer_list[0]!=='undefined'){
            var q1div = document.getElementById("page_questions1");
            q1div.style.display='none';
            var q2div = document.getElementById("page_questions2");
            q2div.style.display='block';
        }
        else{
            alert("Please Select an Option!");
        }
    }
    if (id =='question2nav'){
        if(typeof Answer_list[1]!=='undefined'){
            var q2div = document.getElementById("page_questions2");
            q2div.style.display='none';
            var q3div = document.getElementById("page_questions3");
            q3div.style.display='block';
        }
        else{
            alert("Please Select an Option!");
        }
    }

    if (id =='question3nav'){
        if(typeof Answer_list[2]!=='undefined'){
            var q3div = document.getElementById("page_questions3");
            q3div.style.display='none';
            var q4div = document.getElementById("page_questions4");
            q4div.style.display='block';
        }
        else{
            alert("Please Select an Option!");
        }
    }
    if (id =='question4nav'){
        if(typeof Answer_list[3]!=='undefined'){
            var q4div = document.getElementById("page_questions4");
            q4div.style.display='none';
            var q5div = document.getElementById("page_questions5");
            q5div.style.display='block';
        }
        else{
            alert("Please Select an Option!");
        }
    }
    if (id =='question5nav'){
        if(typeof Answer_list[4]!=='undefined'){
            var q5div = document.getElementById("page_questions5");
            q5div.style.display='none';
            var q6div = document.getElementById("page_questions6");
            q6div.style.display='block';
        }
        else{
            alert("Please Select an Option!");
        }
    }
    if (id =='question6nav'){
        if(typeof Answer_list[5]!=='undefined'){
            var q6div = document.getElementById("page_questions6");
            q6div.style.display='none';
            var q7div = document.getElementById("page_questions7");
            q7div.style.display='block';
        }
        else{
            alert("Please Select an Option!");
        }
    }

}