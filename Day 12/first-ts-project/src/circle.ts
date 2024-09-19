interface Circle{
    type: "Circle";
    radius: number;

}

interface Square{
    type: "square";
    sideLenght: number;
}

type ShapeNew = Circle | Square;

function getArea(shape:ShapeNew) : number{
    switch (shape.type){
        case "Circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLenght **2;

    }
    
}