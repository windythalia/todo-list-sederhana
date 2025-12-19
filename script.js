const inputBox = document.getElementById("list-input");
const listContainer = document.getElementById("list-container");
const body = document.body;
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon')


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
    saveData();
}

// checklist | delete
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// klik enter
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// mode light-dark
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.src = "src/moon.svg";
    } else {
        themeIcon.src = "src/sun.svg";
    }
});

// simpan data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();