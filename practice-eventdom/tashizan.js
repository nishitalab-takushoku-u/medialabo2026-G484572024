function greeting(){
    let a = document.querySelector("span#answer");
    let b = document.querySelector("input[name=left]");
    let bs = Number(b.value);
    let c = document.querySelector("input[name=right]");
    let cs = Number(c.value);
    let s = bs+cs;
    a.textContent=s
}
let b = document.querySelector("button#calc");
b.addEventListener("click", greeting);
