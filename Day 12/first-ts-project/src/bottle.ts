function getSerachProducts<T>(products: T[]):T{
    const myIndex = 3;
    return products[myIndex]
}

const getMoreSearchProduct = <T>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}

getSerachProducts(["Sanuri","Him"])
getMoreSearchProduct([1,2])