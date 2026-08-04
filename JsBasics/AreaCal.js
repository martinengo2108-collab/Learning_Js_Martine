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

function calculateArea(){
    let shape = document.getElementById("id-shapes").value;

    let area = 0;
    switch(shape){
        case "rectangle" :
        let Length = document.getElementById("id-length").value;
        let Width = document.getElementById("id-width").value;
        area = Length * Width;
        break;
    case "triangle":
        let Base = document.getElementById("base").value;
        let Heigth = document.getElementById("id-heigth").value;

        area = Base * Heigth /2 ;

        break;
    case "circle":
        let Radius =document.getElementById("radius").value;

        area = Math.PI* Radius*Radius;
        break;
    case "ellipse":
        let a=document.getElementById("minor-axis").value;
        let b=document.getElementById("major-axis").value;

        area=Math.PI * a*b ;

        break;
    case "square":
        let Side= document.getElementById("id-side").value;
        area= Side * Side;

        break;
    }

    document.getElementById("output").textContent = "Area = " + area;
}
