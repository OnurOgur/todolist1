var taskId = 1;

function addItem() {
    taskId++;
    var ol = document.querySelector("#allLi");
    var myInput = document.querySelector("#myInput")
    var li = document.createElement("li");
    var di = document.createElement("div");
    var di2 = document.createElement("div");
    let spa = document.createElement("span");
    var svg = document.createElement("i");
    if (myInput.value.length > 0) {
        ol.appendChild(li);
    }

    li.setAttribute('id', 'taskRow-' + taskId);
    li.classList.add(`list-group-item`,
        `p-3`,
        `d-flex`,
        `justify-content-between`,
        `align-items-start`);

    li.appendChild(di);
    di.classList.add(`ms-2`,
        `me-auto`);
    di.appendChild(di2);
    di2.classList.add(`fw-bold`, `fs-5`);
    di2.innerHTML = myInput.value;
    li.appendChild(spa);
    spa.classList.add(`badge`, `rounded-pill`, `p-2`);
    spa.appendChild(svg);
    spa.setAttribute('onclick', 'removeTask(' + taskId + ')');
    svg.classList.add(`fas`, `fa-times`);

}

function removeTask(taskId) {
    var taskRow = document.getElementById('taskRow-' + taskId);
    taskRow.remove();
}

function removeFixedItems() {
    var trying = document.querySelector(".close");
    trying.remove();
}

var toastTrigger = document.getElementById('basic-addon2')
var toastLiveExample = document.getElementById('liveToast')
var myInput = document.querySelector("#myInput")



function trig() {
    if (myInput.value == "") {
        var toast = new bootstrap.Toast(toastLiveExample);
        var last = document.querySelector(".toast-header");
        document.getElementById("toastIn").innerHTML = "Boş yükleme yapamazsınız!";
        last.classList.add("bg-danger", "text-light");
        toast.show()
    } else {
        var toast = new bootstrap.Toast(toastLiveExample);
        var last = document.querySelector(".toast-header");
        document.getElementById("toastIn").innerHTML = "Listenize bir görev eklediniz!";
        last.classList.remove("bg-danger");
        last.classList.add("bg-success", "bg-gradient", "text-light");
        toast.show()
    }
}