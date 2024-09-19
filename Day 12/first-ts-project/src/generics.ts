function identifyone(val: boolean | number): boolean | number{
    return val;
}

function identifytwo(val:any) : any {
    return val;
}

function identifythree<Type>(val:Type): Type{
    return val;
}

identifyone(1);
identifytwo("4")
identifythree("Sanuri")