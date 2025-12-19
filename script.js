const inputBox = document.getElementById("list-input");
const listContainer = document.getElementById("list-container");
const body = document.body;
const toggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');


// input kegiatan
function addTask(){
    if(inputBox.value === ''){
        alert("Isi kegiatan dulu!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
}

// checklist | delete
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block'; 
    } else {
        sunIcon.style.display = 'block'; 
        moonIcon.style.display = 'none';  
    }
});