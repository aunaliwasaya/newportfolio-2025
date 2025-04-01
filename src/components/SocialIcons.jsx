import React from 'react'

export default function SocialIcons() {
  return (
   <>
     {/* <!-- divsocial icons --> */}
  <div id="socialicons" class="border border-2 border-warning shadow-lg m-2 buttongreen "> 
    <div class="overflow"><p class="pt-5 px-3 socialtext "><strong>lets Connect</strong> </p> </div>
  <div class="socialize">
           {/* <!-- Facebook --> */}
           <a
           data-mdb-ripple-init
             class="btn text-white btn-floating m-1 scale border border-1 border-warning"
             style="background-color: #3b5998;"
             href="https://www.facebook.com/aun.ali.1293"
             role="button"
             target="_blank"
             ><i class="fab fa-facebook-f"></i
           ></a>
     
           {/* <!-- Twitter --> */}
           <a
             data-mdb-ripple-init
             class="btn text-white shadow-lg btn-floating m-1 scale border border-1 border-warning"
             style="background-color: #55acee;"
             href="https://twitter.com/AunaliWasaya"
             role="button"
             target="_blank"
             ><i class="fab  fa-twitter"></i
           ></a>
     
           {/* <!-- Google --> */}
           <a
             data-mdb-ripple-init
             class="btn text-white btn-floating m-1 scale border border-1 border-warning"
             style="background-color: #dd4b39;"
             href="mailto:aunaliwasaya606@gmail.com">
             
             <i class="fab fa-google"> </i
           ></a>
     
           {/* <!-- Instagram --> */}
           <a
             data-mdb-ripple-init
             class="btn text-white shadow-lg btn-floating m-1 scale border border-1 border-warning"
             style="background-color: #ac2bac;"
             href="https://www.instagram.com/aunaliwasaya/"
             role="button"
             target="_blank"
             ><i class="fab fa-instagram"></i
           ></a>
     
           {/* <!-- Linkedin --> */}
           <a
             data-mdb-ripple-init
             class="btn text-white btn-floating m-1 scale border border-1 border-warning"
             style="background-color: #0082ca;"
             href="https://www.linkedin.com/in/aun-ali-wasaya-b665b3142/"
             role="button"
             target="_blank"
             ><i class="fab fa-linkedin-in"></i
           ></a>
           {/* <!-- Github --> */}
           <a
             data-mdb-ripple-init
             class="btn text-white shadow-lg btn-floating m-1 scale border border-1 border-warning"
             style="background-color: #333333;"
             href="https://github.com/aunaliwasaya"
             role="button"
             target="_blank"
             ><i class="fab fa-github"></i
           ></a>
  </div>
  
  </div>
  {/* <!-- email-me lets work --> */}
  <div class="emailme border border-2 border-warning d-flex align-items-center justify-content-center ">
    <i class="fa-solid fa-envelope-open-text icons "></i>

  </div>
  <div class="backtotop border border-2 border-warning d-flex align-items-center justify-content-center ">
    <a class="nav-link jostParagraph text-center text-white p-2" href="#home"><strong><i class="fa-solid fa-arrow-up"></i></strong></a> 
  </div>
  <div class="sentemail rounded border-1 border border-warning">
    <button id="cancelBtn">x</button>

   <div class="container">
    <form action="/submitForm" method="post" id="myForm">
      <div class="d-flex align-items-center justify-content-around mt-2">
        <img class=" mt-5" src="./icons8-developer-60.png" alt="" width="72" height="72"/>
      </div>
      <h1 class="text-center text-white font2">Send Your Query </h1>
      
      <div class="form-floating">
        <input type="text" class="form-control nameclass" id="floatingInput" placeholder="enter Your Name" required/>
        <label for="floatingInput">Name</label>
      </div>
      <div class="form-floating">
        <input type="email" class="form-control emailclass" id="floatingInput" placeholder="name@example.com" required/>
        <label for="floatingInput">Email address</label> 
      </div>
      <div class="form-floating">
        <input type="text" class="form-control mt-2 numberclass" id="floatingPassword" placeholder="Phone Number" />
        <label for="floatingPassword">Phone Number</label>
      </div>
      <div class="form-floating">
        <input type="textarea" class="form-control mt-2 details" id="floatingPassword" placeholder="Enter Your Project Details" required/>
        <label for="floatingPassword">Project Details</label>
      </div>
      
      <button class="btn btn-warning w-100 py-2 font2" type="submit"><strong>Submit your Query</strong></button>
      <p class="mt-2 text-center mb-3 text-body-secondary"><strong>AunaliWasaya © 2023</strong></p>
    </form>
   </div>
 
  </div>
 
   </>
  )
}
