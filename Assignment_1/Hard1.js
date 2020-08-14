function realType(value){
    if(Array.isArray(value)){
       return document.write('array'+"</br>")
    }
    else if(value==null){
        return document.write('null'+"</br>")
    }
    else{
        return document.write(typeof value+"</br>"); 
    }
}
realType(1);
realType("a");
realType(true);
realType([]);
realType(null);