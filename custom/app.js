
function customAnchor(string,link) {
    let component = document.createElement("a");
    component.href = link;
    component.innerHTML = string;
    return component
}

let root = document.getElementById("root");
root.appendChild(customAnchor("hii","https://github.com/Fluttery-Dev"))