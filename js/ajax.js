

fetch('https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09')
.then(response => response.json())
.then(data => {

    var x=data;
    

   

    // document.querySelectorAll("#header").innerHTML=x[0].id;
    for (let i = 0; i < 10; i++) {
                    // for (let j= 0; i < 10; i++) {
                    //     // document.getElementsByClassName("userId")[i].innerHTML=x[i].userId;
                    //     document.getElementsByClassName("id")[i].innerHTML=x[i].id;
                    //     // document.getElementsByClassName("title")[i].innerHTML=x[i].title;
                    //     // document.getElementsByClassName("body")[i].innerHTML=x[i].body;
                    // }
//                     document.getElementsByClassName("userId")[i].innerHTML="Userid ="+x[i].userId;
                    document.getElementsByClassName("id")[i].innerHTML="ID =" + (x[i].id-3);
                    document.getElementsByClassName("title")[i].innerHTML="<b>Title</b> :" +x[i].title;
                    document.getElementsByClassName("body")[i].innerHTML="<b>Post</b> :" +x[i].body;
                    
                    console.log(x[i].id)
                   
                        
      
      }


})



