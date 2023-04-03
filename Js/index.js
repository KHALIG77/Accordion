
// VANILLLLLA JS PART



import{accordionTagA,accordionBody} from "./selectors.js"

accordionTagA.forEach(function(item){
item.addEventListener("click",function(){
    accordionBody.forEach(function(elem){
      if(elem.classList.contains("active")){
        item.innerHTML ='<i class="fa-solid fa-angle-down"></i>';
        elem.classList.remove("active")
      }
    })
    item.parentElement.nextElementSibling.classList.toggle("active")
    accordionBody.forEach(function(classBody){
         if(!classBody.classList.contains("active")){
              classBody.previousElementSibling.lastChild.innerHTML ='<i class="fa-solid fa-angle-up"></i>'
         } 
    })
})
})


// JQUERY PART

// $("a").click(function() {
//     let accordionBody = $(".accordion-body")
//     let clickedItem = $(this)
    
//     accordionBody.each(function() {
//       if ($(this).hasClass("active")) {
//         clickedItem.html('<i class="fa-solid fa-angle-down"></i>')
//         $(this).removeClass("active")
//       }
//     });
    
//     clickedItem.parent().next().toggleClass("active")
    
//     accordionBody.each(function() {
//       if (!$(this).hasClass("active")) {
//          $(this).prev().find("i").html('<i class="fa-solid fa-angle-up"></i>')
//       }
//     })
//   })
  