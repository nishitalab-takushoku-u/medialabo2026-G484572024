function changedom(){
    let i = document.createElement('li');
    let l = document.querySelector('img#bluemoon');
    l.setAttribute('src','bluemoon.jpg');
    let a = document.createElement('a');
    a.textContent="拓殖大学HP"
    a.setAttribute('href','https://www.takushoku-u.ac.jp');
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend',a);
    i = document.querySelector('li#mochi');
    i.remove();
    u = document.querySelector('ul#kassen');
    u.remove();
    u = document.createElement('ul');
    l = document.createElement('li');
    l.textContent='赤';
    u.insertAdjacentElement('beforeend',l);
    l = document.createElement('li');
    l.textContent='緑';
    u.insertAdjacentElement('beforeend',l);
    l = document.createElement('li');
    l.textContent='青';
    u.insertAdjacentElement('beforeend',l);
    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend',u);
}
let b = document.querySelector('button#henkou');
b.addEventListener('click', changedom);