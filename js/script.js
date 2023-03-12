

var colServices = document.getElementById('servicesData'); 

let services = [
  {src:"icon-1.png", name:"Publisher",content:"We are interested in publishing useful and valuable international educational curricula and help you in your research."},
  {src:"icon-2.png", name:"Distributor",content:"We focus on distributing useful and valuable educational curricula and help you in your research."},
  {src:"icon-3.png", name:" development",content:" We are working to provide professional development programs for education professionals to help them."},]



displayServicesData();


function displayServicesData(){

    var str = '';

    for (var i = 0; i < services.length; i++) {

        str += `<div class="col-lg-4 col-md-6 p-3">
        <div class="item p-3 bg-white rounded-3">
          <div class=" text-center">
 
                <img src="img/${services[i].src}" class=" width="50px" height="60px" alt="...">

           <h4 class="fw-bold my-2 ">${services[i].name}</h4>
            <p class="text-muted ">${services[i].content}</p>
          </div>
        </div>
      </div>`;

    }

    colServices.innerHTML = str;
}


var navLink = document.querySelectorAll(".nav-link");

for (var i = 0; i< navLink.length; i++) {

    navLink[i].addEventListener('click',function(e){

    let clickedLink = e.target;

    // toggle active class
    clickedLink.classList.add("active");

    let nextLink = clickedLink.nextElementSibling;

    let prevLink = clickedLink.previousElementSibling;

    while(nextLink) {
        
      if(nextLink.classList.contains("active") === true){
        nextLink.classList.remove("active");
      }
      nextLink = nextLink.nextElementSibling;
    }

    while(prevLink) {
        
      if(prevLink.classList.contains("active") === true){
        prevLink.classList.remove("active");
      }
      prevLink = prevLink.previousElementSibling;
    }

    // end toggle active class

    var linkID = clickedLink.getAttribute('aria-controls');

    var element = document.getElementById(linkID);

    let nextSibling = element.nextElementSibling;

    let prevSibling = element.previousElementSibling;
    
    if(element.classList.contains("d-none") === true){

      element.classList.replace("d-none" , "d-block");

      while(nextSibling) {
        
        if(nextSibling.classList.contains("d-none") === false){
          nextSibling.classList.add("d-none");
        }

        if(nextSibling.classList.contains("d-block") === true){
          nextSibling.classList.remove("d-block");
        }

        let ListOfChildrenOfSibling = [];

        let children = nextSibling.firstElementChild.children;

        ListOfChildrenOfSibling = Array.from(children);

        for(let i = 0 ; i < ListOfChildrenOfSibling.length ; i++){

          if(ListOfChildrenOfSibling[i].hasAttribute('aria-controls')=== true){

            let LinkOfChildrenSibling = ListOfChildrenOfSibling[i].getAttribute('aria-controls');
  
            let elementChild = document.getElementById(LinkOfChildrenSibling);

            elementChild.classList.replace("d-block" , "d-none");

          }

        }

        nextSibling = nextSibling.nextElementSibling;
      }

      while(prevSibling) {

          if(prevSibling.classList.contains("d-none") === false){
            prevSibling.classList.add("d-none");
          }

          if(prevSibling.classList.contains("d-block") === true){
            prevSibling.classList.remove("d-block");
          }

          let ListOfPrevChildrenOfSibling = [];

          let children = prevSibling.firstElementChild.children;
  
          ListOfPrevChildrenOfSibling = Array.from(children);
  
          for(let i = 0 ; i < ListOfPrevChildrenOfSibling.length ; i++){
  
            if(ListOfPrevChildrenOfSibling[i].hasAttribute('aria-controls')=== true){
  
              let LinkOfPrevChildrenSibling = ListOfPrevChildrenOfSibling[i].getAttribute('aria-controls');
    
              let elementChild = document.getElementById(LinkOfPrevChildrenSibling);
  
              elementChild.classList.replace("d-block" , "d-none");
  
            }
  
          }
          prevSibling = prevSibling.previousElementSibling;
      }

    }else{
      element.classList.replace("d-block" , "d-none");  
      element.classList.remove("active");
    }

    });

}

var listOfImg = document.querySelectorAll(".circle-container img");

for ( var i = 0 ; i< listOfImg.length ; i++ ) {

   listOfImg[i].addEventListener('click',function(e){

    let clickedImg = e.target;
    
    let srcOfClickedImg = clickedImg.getAttribute('src');

    let activeImg = document.getElementById("circle-active");

    let srcOfActiveImg = activeImg.getAttribute('src');

    clickedImg.setAttribute("src", srcOfActiveImg);

    activeImg.setAttribute("src", srcOfClickedImg);

    let imgCaption = document.getElementById("img-caption");

    imgCaption.setAttribute("src", srcOfClickedImg);

    let nameOfClickedImg = clickedImg.getAttribute('name');

    let nameCaption = document.getElementById("name-caption");

    nameCaption.innerHTML= nameOfClickedImg;



    });

}


// serch button

let searchIcon = document.getElementById("searchIcon");

let searchForm = document.getElementById("search-form");

searchIcon.addEventListener('click',function(){
  if(searchForm.classList.contains("d-none") === false){
    searchForm.classList.replace("d-flex","d-none")
  }else{
    searchForm.classList.replace("d-none","d-flex")
  }
});