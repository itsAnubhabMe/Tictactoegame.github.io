console.log("Welcome to my Tic tac toe show")
let music= new Audio("music.mp3")
let audioTurn= new Audio("ting.mp3")
let over= new Audio("over.mp3")
let win= new Audio("win.mp3")
let turn = "x"
let isgameover= false;

const changeTurn = ()=>{
    return turn === "x"?"0": "x"
}

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 1, 6, 0],
        [3, 4, 5, 1, 16, 0],
        [6, 7, 8, 1, 26, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, -0.25, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, -0.25, 15, 45],
        [2, 4, 6, 1, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            isgameover = true
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "350px"
            document.querySelector(".line").style.width = "30vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            win.play()
            
        }

    })
}

//music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})

restart.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "x";
    isgameover = false
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px"
})