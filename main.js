
getMaxListeners.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open("GET","/Ajax.xml");
    request.onreadystatechange=()=>{
        if(request.redyState===4&&request.status===200){
            console.log(request.response);
        }
    }
    request.send()
}