
let divClickCount = 0;
let divClicked = true;
let resultAttained = false;

let d1 = $("#1");
let d2 = $("#2");
let d3 = $("#3");
let d4 = $("#4");
let d5 = $("#5");
let d6 = $("#6");
let d7 = $("#7");
let d8 = $("#8");
let d9 = $("#9");

const isClicked = function(div){
  if( div === "" ){
    divClicked = false;
    divClickCount += 1;
  }else{
    divClicked = true;
  }
};

const reset = function(){
  divClickCount = 0;
  divClicked = true;
  resultAttained = false;
  $(".column").html("");
}

$("#reset").on('click',reset);

const input = function(){
  if(!resultAttained){
    isClicked($(this).html());
    if ( !divClicked && divClickCount%2 === 0 ){
      $(this).text("X");
      winCheck();
    }else if ( !divClicked && divClickCount%2 !== 0 ){
      $(this).text("O");
      winCheck();
    }else if ( divClicked ){
      alert("click only empty box!")
    }
  }else{
    alert("Game Over reset!")
  }
};

$('.column').on('click',input);

const winCheck = function(){
    if (d1.text()!== "" && d1.text()===d2.text() && d1.text()===d3.text()){
      alert(`${d1.text()} win..!`);
      resultAttained = true;
    }else if(d4.text()!== "" && d4.text()===d5.text() && d4.text()===d6.text()){
      alert(`${d4.text()} win..!`);
      resultAttained = true;
    }else if(d7.text()!== "" && d7.text()===d8.text() && d7.text()===d9.text()){
      alert(`${d7.text()} win..!`);
      resultAttained = true;
    }else if(d1.text()!== "" && d1.text()===d4.text() && d1.text()===d7.text()){
      alert(`${d1.text()} win..!`);
      resultAttained = true;
    }else if(d2.text()!== "" && d2.text()===d5.text() && d2.text()===d8.text()){
      alert(`${d2.text()} win..!`);
      resultAttained = true;
    }else if(d3.text()!== "" && d3.text()===d6.text() && d3.text()===d9.text()){
      alert(`${d3.text()} win..!`);
      resultAttained = true;
    }else if(d1.text()!== "" && d1.text()===d5.text() && d1.text()===d9.text()){
      alert(`${d1.text()} win..!`);
      resultAttained = true;
    }else if(d3.text()!== "" && d3.text()===d5.text() && d3.text()===d7.text()){
      alert(`${d3.text()} win..!`);
      resultAttained = true;
    }else if (divClickCount === 9){
        alert("Its a Draw")
        resultAttained = true;
      }
  };
