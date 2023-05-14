
let login = document.getElementById("login"); 
login.addEventListener("submit", (e) => {
  e.preventDefault(); 

  let users = JSON.parse(localStorage.users); 
  let email = document.getElementById("email"); 
  let pw = document.getElementById("password"); 
  
  let check = users.map(
    (item) => item.email == email.value.trim() && item.pw == pw.value.trim() 
  );
  console.log(check);

  check.map((item,index) => {
    if (item == true) {
      window.location.href = "../logout.html"; 
    } else if (item == false && index==check.length-1){
      alert("email hoac mk nhap sai")
    }
  });
});
