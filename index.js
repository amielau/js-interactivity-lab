console.log("hello world!")

const message = document.querySelector("#message");

// create functions 
function addMovie(event) {
    event.preventDefault();
    //grab variables/elements
    const inputField = document.querySelector("input");
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");

    const ulEl = document.querySelector("ul");

    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener("click", crossOffMovie);

    movie.appendChild(movieTitle);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", deleteMovie);
    
    
    ulEl.appendChild(movie);
    
    inputField.value = "";
    
    movie.appendChild(deleteBtn);
}
 const formEl = document.querySelector("form");
 formEl.addEventListener("submit", addMovie);

 function deleteMovie(event) {
     event.target.parentNode.remove();
     message.textContent = `${event.target.parentNode.firstChild.textContent} deleted`;
     revealMessage();

 }

 function crossOffMovie(event) {
     event.target.classList.toggle("checked");
     if(event.target.classList.contains("checked")) {
        message.textContent = `${event.target.textContent} watched!`;
        revealMessage();
    } else {
        message.textContent = `${event.target.textContent} unwatched`;
        revealMessage();

     }

 }

 function revealMessage() {
     message.className = "";
     setTimeout(hideMessage, 1000);
 }

 function hideMessage() {
     message.className = "hide";
 }


