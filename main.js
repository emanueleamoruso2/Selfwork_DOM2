let btn= document.querySelector('#btn');
let articolo = document.querySelector('article')
let h1 = document.querySelector('h1')
let p = document.querySelector('p')
let h3 = document.querySelector('h3')
btn.addEventListener('click',()=>{
    let date = new Date();
    let formatDate = date.toLocaleDateString();
    let title = document.getElementById("titolo").value;
    h1.innerHTML=title;
    document.getElementById("titolo").value = "";
    let contenuto = document.getElementById("paragrafo").value;
    document.getElementById("paragrafo").value = "";
    p.innerHTML=contenuto;
    h3.innerHTML= formatDate
    if(title && contenuto){
    }
    else{
        alert('Il titolo o il paragrafo sono vuoti')
    }
})

// btn.addEventListener('mouseup',()=>{
//    let title = document.getElementById("titolo");
//     title.value="";
//     let contenuto = document.getElementById("paragrafo");
//     contenuto.value="";

// })