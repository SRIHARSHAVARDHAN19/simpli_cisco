function area(length,breath){
    return length*breath
}

let perimeter = (length,breath)=>{
    return 2*(length+breath)
}

let calculate = function(a,b=20,c=b* area(10,20),d=c+perimeter(10,20)){
    return a+b+c+d
}
