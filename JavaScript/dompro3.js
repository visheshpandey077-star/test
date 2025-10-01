var arr=[
    {dp:"https://www.yashrajfilms.com/images/default-source/about-yrf---company-info/aneet-padda1cca765c-8a68-47f1-865b-2c1a9e501541.jpg?sfvrsn=8842decc_4",story:"https://images.unsplash.com/photo-1758221943117-6e1f900b957a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1758178309498-036c3d7d73b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1755548216246-218191e35675?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1758061410087-1990dd62f8eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1757254161345-b4a0238ed1c0?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1757990944634-bc774a9b1753?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1757647546442-fc5f5bd3ff37?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1757637871816-221a63ff7f3c?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1757423358179-772630b12928?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
var storiyan=document.querySelector("#stories")
var veer =""

arr.forEach(function(elem,index){
    veer+=`<div class="story">
            <img id="${index}" src="${elem.dp}" alt="">
        </div>`
});
storiyan.innerHTML=veer;
storiyan.addEventListener("click",function(ram){
    console.log(arr[ram.target.id].story)
    document.querySelector("#fullstory").style.display="block";
    document.querySelector("#fullstory").style.backgroundImage=`url(${arr[ram.target.id].story})`

    setTimeout(function(){
        document.querySelector("#fullstory").style.display="none";   

    },3000)


});



 