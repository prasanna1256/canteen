function process(data){
    let maincontainer=document.getElementById("main-container")
    for(eachrow of data){
        let recipe=eachrow.rcp;
        let price=eachrow.rs
        let imageurl=eachrow.img
        let card=document.createElement("div")
        card.classList.add("contain")
        let image=document.createElement("img")

        image.src=`${imageurl}`
        card.appendChild(image)
        let heading=document.createElement("h3")
        heading.textContent=`${recipe}`
        card.appendChild(heading)
        let para=document.createElement("p")
        para.textContent=`price: ${price}`
        card.appendChild(para)
        document.body.appendChild(card)
        maincontainer.appendChild(card)
}
}
fetch("getfood.php").then(response =>response.json()).then(data=>process(data)).error(console.log("error"));
