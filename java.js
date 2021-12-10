function myFunction() {
    var txt;
    var r =confirm("آیا از ارسال مطمینید؟");
  if(r == true){
   txt = "You pressed OK!";
  }
  else {
   txt = "You pressed cancel!";
  }
 alert(txt);
 document.getElementById("demo").innerHTML = txt;
}