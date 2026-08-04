function updateForm(){
    document.getElementById("rect-inputs").hidden =true;
    document.getElementById("triangle-inputs").hidden =true;
    document.getElementById("circle-inputs").hidden =true;
    document.getElementById("ellipse-inputs").hidden =true;
    document.getElementById("square-inputs").hidden =true;


let shape = document.getElementById("id-shapes").value;

switch (shape){
    case "rectangle" :
        document.getElementById("rect-inputs").hidden =false;
        break;
    case "triangle":
        document.getElementById("triangle-inputs").hidden = false;
        break;
    case "circle":
        document.getElementById("circle-inputs").hidden = false;
        break;
    case "ellipse":
        document.getElementById("ellipse-inputs").hidden = false;
        break;
    case "square":
        document.getElementById("square-inputs").hidden =false;
        break;
}
}
