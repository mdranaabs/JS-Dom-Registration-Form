
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(){
    
    let sName = document.getElementById("sName").value;
    let sEmail = document.getElementById("sEmail").value;
    let sCourse = document.getElementById("sCourse").value;
    let sPhone = document.getElementById("sPhone").value;

    let table = document.getElementById("table");

    
    if(!sName){
        alert('Please enter your name');
    }else if(!sEmail){
        alert('Please enter your email');
    }else if(sCourse == '0'){
        alert('Please choose your course first');
    }else if(!sPhone){
        alert('Please enter your phone number');
    }
    else{
        let newRow = table.insertRow(0);
        let cellOne = newRow.insertCell(0);
        let cellTwo = newRow.insertCell(1);
        let cellThree = newRow.insertCell(2);
        let cellFour = newRow.insertCell(3);

        cellOne.innerText = sName;
        cellTwo.innerText = sEmail;
        cellThree.innerText = sCourse;
        cellFour.innerText = sPhone;
    }
    


        

    
})