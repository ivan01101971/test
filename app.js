document.addEventListener("DOMContentLoaded",()=>{
    console.log("test");
    const btn=document.querySelector("#btn1");
    const ipt=document.querySelector("#ip1");
    const bd=document.querySelector(".btn");
    const ull=document.querySelector("#ulll");

    let strW=(dd)=>{
        return `<li class="liii"><span>${dd}</span><button class="btn">delete</button></li>`
    }

    btn.addEventListener("click",()=>{    
        if(ipt.value==""){
            console.log("Empty");
        }else{             
            console.log(strW(ipt.value));
            ull.insertAdjacentHTML("afterbegin",strW(ipt.value));
        }
        ipt.value="";
        ipt.focus();
    })
    
    // bd.addEventListener("click",()=>{
    // console.log(bd)})

    ull.addEventListener("click",(e)=>{
        console.log(e.target);
    })
})
