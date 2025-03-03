const photoLocation="./assets/"
const ringButtons=document.querySelectorAll(".ring-button")
for (const ringbtn of ringButtons) {
    ringbtn.addEventListener("click",function(event){
        const color =event.target.id.split("-")[0];
        for (let i = 0; i < ringButtons.length; i++) {
            const element = ringButtons[i];
           element.classList.remove("border-primary");
           element.classList.add("border-gray-300")
        }
        event.target.classList.add("border-primary");
        event.target.classList.remove("border-gray-300")
        const imageAccess=document.getElementById("product-image")
        imageAccess.src=`${photoLocation}${color}.png`
    })
}
const sizes=document.querySelectorAll(".size-button")
for (const sizeBtn of sizes) {
    sizeBtn.addEventListener("click",function(event){
        for (let i = 0; i < sizes.length; i++) {
            const size=event.target.id.split("-")[1]
            const element = sizes[i];
            element.classList.remove("border-yellow-500")
            element.classList.add("border-gray-300")
        }
        event.target.classList.add("border-yellow-500")
        event.target.classList.remove("border-gray-300")
    })
}
const addBag=document.getElementById("add-to-bag")
addBag.addEventListener('click',function(event){
    const totalAdd=getElementByIdText("total-add");
    let total=totalAdd+1;
    changeInnerText("total-add",total);
    const alert=document.getElementById("alert-succes");
    alert.classList.remove("hidden");

});
document.getElementById("continue-shoping")
.addEventListener("click",function(event){
    const alert=document.getElementById("alert-succes");
    alert.classList.add("hidden");
})
const cartButton=document.getElementById("cart-button");
cartButton.addEventListener("click",function(event){
    const addedChart=document.getElementById("added-total");
    addedChart.classList.remove("hidden");
})
document.getElementById("clear-all")
.addEventListener("click",function(){
    const addedChart=document.getElementById("added-total");
    addedChart.classList.add("hidden");  
})
