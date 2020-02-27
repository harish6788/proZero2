
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
  if(d1.text() === "X" && d2.text() === "X" && d3.text() === "X"){//123 x/
    alert("X win..!");
    resultAttained = true;
  }else if(d1.text() === "O" && d2.text() === "O" && d3.text() === "O"){//123 o/
    alert("O Win..!");
    resultAttained = true;
  }else if(d4.text() === "X" && d5.text() === "X" && d6.text() === "X"){//456 x/
    alert("X win..!");
    resultAttained = true;
  }else if(d4.text() === "O" && d5.text() === "O" && d6.text() === "O"){//456 o/
    alert("O win..!");
    resultAttained = true;
  }else if(d7.text() === "X" && d8.text() === "X" && d9.text() === "X"){//789 x/
    alert("X win..!");
    resultAttained = true;
  }else if(d7.text() === "O" && d8.text() === "O" && d9.text() === "O"){//789 O/
    alert("O win..!");
    resultAttained = true;
  }else if(d7.text() === "X" && d1.text() === "X" && d4.text() === "X"){//147 x/
    alert("X win..!");
    resultAttained = true;
  }else if(d7.text() === "O" && d1.text() === "O" && d4.text() === "O"){//147 O/
    alert("O win..!");
    resultAttained = true;
  }else if(d2.text() === "X" && d5.text() === "X" && d8.text() === "X"){//258  x/
    alert("X win..!");
    resultAttained = true;
  }else if(d2.text() === "O" && d5.text() === "O" && d8.text() === "O"){//258  O/
    alert("O win..!");
    resultAttained = true;
  }else if(d3.text() === "X" && d6.text() === "X" && d9.text() === "X"){//369  x/
    alert("X win..!");
    resultAttained = true;
  }else if(d3.text() === "O" && d6.text() === "O" && d9.text() === "O"){//369  O/
    alert("O win..!");
    resultAttained = true;
  }else if(d1.text() === "X" && d5.text() === "X" && d9.text() === "X"){//159  x/
    alert("X win..!");
    resultAttained = true;
  }else if(d1.text() === "O" && d5.text() === "O" && d9.text() === "O"){//159  O/
    alert("O win..!");
    resultAttained = true;
  }else if(d3.text() === "X" && d5.text() === "X" && d7.text() === "X"){//357  x/
    alert("X win..!");
    resultAttained = true;
  }else if(d3.text() === "O" && d5.text() === "O" && d7.text() === "O"){//357  O/
    alert("O win..!");
    resultAttained = true;
  }else if (divClickCount === 9){
    alert("Its a Draw")
    resultAttained = true;
  }
};
