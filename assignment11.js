function area(callback){
    callback(multiple)
}
function add(callback,a,b){
    callback(a,b)
}
function multiple(a,b){
    return a*b
}

setTimeout(area,3000,a,b,add)