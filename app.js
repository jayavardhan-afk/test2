let search = document.querySelector("#search");
let mg= document.querySelector(".mgc");
let content= document.querySelector(".content");
mg.addEventListener("click", ()=> {
    
    fetch(`https://api.github.com/users/${search.value}`)
    .then(resp => resp.json())
    .then(data => {
        
            content.innerHTML=`
            <div class="name">
                <h2>Name: ${data.login}</h2>
                <div class="avatar">
                    <img src="${data.avatar_url}">
                </div>
            </div>
            <h2>Followers: ${data.followers}</h2>
            <h2>Following: ${data.following}</h2>
            <h2>Repositories: <a href="https://github.com/${content.value}">Click here</a></h2> 
            `


            
    })
    content.style.display= "block";     


})



document.querySelector(".clear").addEventListener("click", () => {
    content.style.display= "none";   
    search.value="";
})
