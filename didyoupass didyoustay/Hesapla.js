
let SMILE=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

let SAD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`

// Notların hangi harflere karşılık geldiğini hesaplama -------------------------------------------------------

function notHesap () {
let visaGrade = document.querySelector("#vizeNot").value;
let finalGrade = document.querySelector("#finalNot").value;

let studentResult = visaGrade * 0.3 + finalGrade*0.7
let examInfo = document.querySelector("#sonuc")

let textInfo;

if (studentResult>=0 && studentResult<=100){
    examInfo.classList.add("text-success")
    if (studentResult>=100) {
        examInfo.innerHTML="AA geçtin"
    }
        else if (studentResult>=85) {
                 examInfo.innerHTML="BA geçtin   "+ SMILE
        }
        else if (studentResult>=80) {
                examInfo.innerHTML="BB geçtin   " + SMILE
        }
        else if (studentResult>=75) {
                examInfo.innerHTML="CB geçtin   " + SMILE
        }
        else if (studentResult>=70) {
                examInfo.innerHTML="CC geçtin   " + SMILE
        }
        else if (studentResult>=65) {
                examInfo.innerHTML="DC geçtin   " + SMILE
        }
        else if (studentResult>=60) {
                examInfo.innerHTML="DD geçtin   " + SMILE
        }
        else if (studentResult>=50) {
                examInfo.innerHTML="FD geçtin   " + SMILE
        }
        else if (studentResult<=50) {
                examInfo.innerHTML="FF kaldın.   " + SAD
                examInfo.classList.add("text-danger")
                examInfo.classList.remove("text-primary")
    }
}
else {
    examInfo.innerHTML="Yanlış bilgi girdiniz."
}

}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();