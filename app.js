window.onload=function(){
    var searchBtn= document.getElementById("searchBtn");


    searchBtn.addEventListener("click",(e)=>{
        e.preventDefault();
		var searchQuery = document.getElementById("name").value;
		var url= "http://localhost:8080/superheroes.php?name=" + searchQuery;
        var httpRequest= new XMLHttpRequest();
        httpRequest.onreadystatechange= showList;
        httpRequest.open("GET",url);
        /*httpRequest.open("GET",url+$query, true);*/
        httpRequest.send();

        function showList(){
            if(httpRequest.readyState===XMLHttpRequest.DONE){
                if(httpRequest.status===200){
                    var response= httpRequest.responseText;
                    var result=document.getElementById("results");
                    result.innerHTML=response.trim();
                }else{
                    alert("There was a problem with this request");
                }
            }
        }
    });

}