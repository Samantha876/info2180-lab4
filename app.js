window.onload=function(){
    var searchBtn= document.querySelector("button");

    searchBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        var url= "http://localhost:8080/superheroes.php";
        var httpRequest= new XMLHttpRequest();
        httpRequest.onreadystatechange= showList;
        httpRequest.open("GET",url);
        httpRequest.send();

        function showList(){
            if(httpRequest.readyState===XMLHttpRequest.DONE){
                if(httpRequest.status===200){
                    var response= httpRequest.responseText;
                    alert(response);
                }else{
                    alert("There was a problem with this request");
                }
            }
        }
    });

}