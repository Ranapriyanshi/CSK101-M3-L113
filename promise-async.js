const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getCookies() {
      // Progression 2: using setTimeout() - use 1000 units for time parameter
   setTimeout(() => {
      let output = '';
      for (i = 0; i < cookies.length; i++) {
         output += `<li> ${cookies[i].name} </li>`;
      }
      document.getElementById("list").innerHTML = output;
   }, 1000);
}


//Progression 3: Create a function to creat cookies and create an object of Promise.
function creatCookies(){
   return new Promise((resolve, reject) =>{
     // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
     setTimeout(()=>{
       // Progression 5: handling errors and adding new cookie to the list
       if(newCookie.name !=''){
         resolve(cookies.push(newCookie));
       }
       else{
         console.log("Can't add an empty cookie.")
       }

     },2000)
   })
 }


// Progression 7: creating a new async function
async function allCookies(){
   await creatCookies(newCookie);
   getCookies();
}
// calling the new async function
allCookies();
