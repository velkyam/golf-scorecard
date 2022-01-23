let blue =document.querySelector("#blue")
let red =document.querySelector("#red")
let difference =document.querySelector("#difference")

let total1 = document.querySelector('#total1')
let total2 = document.querySelector('#total2')
let total3 = document.querySelector('#total3')
let total4 = document.querySelector('#total4')

let total11 = document.querySelector('#total11')
let total22 = document.querySelector('#total22')
let total33 = document.querySelector('#total33')
let total44 = document.querySelector('#total44')

let p1h1 = document.querySelector("#p1h1")
let p1h2 = document.querySelector("#p1h2")
let p1h3 = document.querySelector("#p1h3")
let p1h4 = document.querySelector("#p1h4")
let p1h5 = document.querySelector("#p1h5")
let p1h6 = document.querySelector("#p1h6")
let p1h7 = document.querySelector("#p1h7")
let p1h8 = document.querySelector("#p1h8")
let p1h9 = document.querySelector("#p1h9")

let p2h1 = document.querySelector("#p2h1")
let p2h2 = document.querySelector("#p2h2")
let p2h3 = document.querySelector("#p2h3")
let p2h4 = document.querySelector("#p2h4")
let p2h5 = document.querySelector("#p2h5")
let p2h6 = document.querySelector("#p2h6")
let p2h7 = document.querySelector("#p2h7")
let p2h8 = document.querySelector("#p2h8")
let p2h9 = document.querySelector("#p2h9")

let p3h1 = document.querySelector("#p3h1")
let p3h2 = document.querySelector("#p3h2")
let p3h3 = document.querySelector("#p3h3")
let p3h4 = document.querySelector("#p3h4")
let p3h5 = document.querySelector("#p3h5")
let p3h6 = document.querySelector("#p3h6")
let p3h7 = document.querySelector("#p3h7")
let p3h8 = document.querySelector("#p3h8")
let p3h9 = document.querySelector("#p3h9")

let p4h1 = document.querySelector("#p4h1")
let p4h2 = document.querySelector("#p4h2")
let p4h3 = document.querySelector("#p4h3")
let p4h4 = document.querySelector("#p4h4")
let p4h5 = document.querySelector("#p4h5")
let p4h6 = document.querySelector("#p4h6")
let p4h7 = document.querySelector("#p4h7")
let p4h8 = document.querySelector("#p4h8")
let p4h9 = document.querySelector("#p4h9")

let p1h10 = document.querySelector("#p1h10")
let p1h11 = document.querySelector("#p1h11")
let p1h12 = document.querySelector("#p1h12")
let p1h13 = document.querySelector("#p1h13")
let p1h14 = document.querySelector("#p1h14")
let p1h15 = document.querySelector("#p1h15")
let p1h16 = document.querySelector("#p1h16")
let p1h17 = document.querySelector("#p1h17")
let p1h18 = document.querySelector("#p1h18")

let p2h10 = document.querySelector("#p2h10")
let p2h11 = document.querySelector("#p2h11")
let p2h12 = document.querySelector("#p2h12")
let p2h13 = document.querySelector("#p2h13")
let p2h14 = document.querySelector("#p2h14")
let p2h15 = document.querySelector("#p2h15")
let p2h16 = document.querySelector("#p2h16")
let p2h17 = document.querySelector("#p2h17")
let p2h18 = document.querySelector("#p2h18")

let p3h10 = document.querySelector("#p3h10")
let p3h11 = document.querySelector("#p3h11")
let p3h12 = document.querySelector("#p3h12")
let p3h13 = document.querySelector("#p3h13")
let p3h14 = document.querySelector("#p3h14")
let p3h15 = document.querySelector("#p3h15")
let p3h16 = document.querySelector("#p3h16")
let p3h17 = document.querySelector("#p3h17")
let p3h18 = document.querySelector("#p3h18")

let p4h10 = document.querySelector("#p4h10")
let p4h11 = document.querySelector("#p4h11")
let p4h12 = document.querySelector("#p4h12")
let p4h13 = document.querySelector("#p4h13")
let p4h14 = document.querySelector("#p4h14")
let p4h15 = document.querySelector("#p4h15")
let p4h16 = document.querySelector("#p4h16")
let p4h17 = document.querySelector("#p4h17")
let p4h18 = document.querySelector("#p4h18")



document.addEventListener('change',function(){

    total1.innerHTML=parseInt(p1h1.value)+parseInt(p1h2.value)+parseInt(p1h3.value)+parseInt(p1h4.value)+parseInt(p1h5.value)+parseInt(p1h6.value)+parseInt(p1h7.value)+parseInt(p1h8.value)+parseInt(p1h9.value)

    total2.innerHTML=parseInt(p2h1.value)+parseInt(p2h2.value)+parseInt(p2h3.value)+parseInt(p2h4.value)+parseInt(p2h5.value)+parseInt(p2h6.value)+parseInt(p2h7.value)+parseInt(p2h8.value)+parseInt(p2h9.value)

    total3.innerHTML=parseInt(p3h1.value)+parseInt(p3h2.value)+parseInt(p3h3.value)+parseInt(p3h4.value)+parseInt(p3h5.value)+parseInt(p3h6.value)+parseInt(p3h7.value)+parseInt(p3h8.value)+parseInt(p3h9.value)

    total4.innerHTML=parseInt(p4h1.value)+parseInt(p4h2.value)+parseInt(p4h3.value)+parseInt(p4h4.value)+parseInt(p4h5.value)+parseInt(p4h6.value)+parseInt(p4h7.value)+parseInt(p4h8.value)+parseInt(p4h9.value)
    
    total11.innerHTML=parseInt(p1h10.value)+parseInt(p1h11.value)+parseInt(p1h12.value)+parseInt(p1h13.value)+parseInt(p1h14.value)+parseInt(p1h15.value)+parseInt(p1h16.value)+parseInt(p1h17.value)+parseInt(p1h18.value)

    total22.innerHTML=parseInt(p2h10.value)+parseInt(p2h11.value)+parseInt(p2h12.value)+parseInt(p2h13.value)+parseInt(p2h14.value)+parseInt(p2h15.value)+parseInt(p2h16.value)+parseInt(p2h17.value)+parseInt(p2h18.value)

    total33.innerHTML=parseInt(p3h10.value)+parseInt(p3h11.value)+parseInt(p3h12.value)+parseInt(p3h13.value)+parseInt(p3h14.value)+parseInt(p3h15.value)+parseInt(p3h16.value)+parseInt(p3h17.value)+parseInt(p3h18.value)

    total44.innerHTML=parseInt(p4h10.value)+parseInt(p4h11.value)+parseInt(p4h12.value)+parseInt(p4h13.value)+parseInt(p4h14.value)+parseInt(p4h15.value)+parseInt(p4h16.value)+parseInt(p4h17.value)+parseInt(p4h18.value)
    
    blue.innerHTML=(parseInt(total1.innerHTML)+parseInt(total11.innerHTML)+parseInt(total2.innerHTML)+parseInt(total22.innerHTML))

    red.innerHTML=(parseInt(total3.innerHTML)+parseInt(total33.innerHTML)+parseInt(total4.innerHTML)+parseInt(total44.innerHTML))

    if(parseInt(blue.innerHTML)>parseInt(red.innerHTML)){
        difference.innerHTML=parseInt(blue.innerHTML)-parseInt(red.innerHTML)
        difference.setAttribute('class','red')
    } else if(parseInt(blue.innerHTML)<parseInt(red.innerHTML)){
        difference.innerHTML=parseInt(red.innerHTML)-parseInt(blue.innerHTML)
        difference.setAttribute('class','blue')
    } else {
        difference.innerHTML=0
    }
    
})
