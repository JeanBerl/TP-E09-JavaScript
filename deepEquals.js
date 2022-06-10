function deepEquals(obj1, obj2){
    let properties = Object.keys(obj1);
    let isEqual = true;
    properties.forEach((prop) => {
        if (obj1[prop] != obj2[prop]){
            isEqual = false;
        }
    })
    return isEqual;
}