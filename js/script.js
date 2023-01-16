function ReturnScore(){
  var quest1 = document.getElementsByName('Question1');
  var quest2 = document.getElementsByName('Question2');
  var quest3 = document.getElementsByName('Question3');
  var quest4 = document.getElementsByName('Question4');
  var quest5 = document.getElementsByName('Question5');
  var quest6 = document.getElementsByName('Question6');
  var quest7 = document.getElementsByName('Question7');
  var quest8 = document.getElementsByName('Question8');
  var quest9 = document.getElementsByName('Question9');
  var quest10 = document.getElementsByName('Question10');
  let note = 0;

  for(i = 0; i < 3; i++) {
    if(quest1[i].checked && quest1[i].value == 'B'){
      note = note + 1;
    }
    if(quest2[i].checked && quest1[i].value == 'B'){
      note = note + 1;
    }
    if(quest3[i].checked && quest1[i].value == 'A'){
      note = note + 1;
    }
    if(quest4[i].checked && quest1[i].value == 'B'){
      note = note + 1;
    }
    if(quest5[i].checked && quest1[i].value == 'C'){
      note = note + 1;
    }
    if(quest6[i].checked && quest1[i].value == 'A'){
      note = note + 1;
    }
    if(quest7[i].checked && quest1[i].value == 'A'){
      note = note + 1;
    }
    if(quest8[i].checked && quest1[i].value == 'A'){
      note = note + 1;
    }
    if(quest9[i].checked && quest1[i].value == 'C'){
      note = note + 1;
    }
    if(quest10[i].checked && quest1[i].value == 'C'){
      note = note + 1;
    }
  }

  alert("Votre Score est : "+note+" / 10");
}

