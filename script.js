let Box=document.querySelectorAll(".box");
let rsbtn=document.querySelector("#rsbtn");
let ngbtn=document.querySelector("#newGame");
let msg=document.querySelector("#msg");
let msgC=document.querySelector(".msg-container");

let turnO=true;
let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

Box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const checkwinner=()=>{
    for(let pattern of winPattern ){
        let pos1val=Box[pattern[0]].innerText;
        let pos2val=Box[pattern[1]].innerText;
        let pos3val=Box[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                dissableboxes();
                showWinner(pos1val);

            }
        }
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`; 
    msgC.classList.remove("hide");
}

const dissableboxes=()=>{
    for(let box of Box){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of Box){
        box.disabled=false;
        box.innerText="";
    }
}

const reset=()=>{
    turnO=true;
    enableboxes();
    msgC.classList.add("hide");
}

ngbtn.addEventListener("click",reset);
rsbtn.addEventListener("click",reset);