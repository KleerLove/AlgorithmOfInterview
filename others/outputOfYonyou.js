function s(x,y,z){
    var index = -1;
    var len = x.length;
    len = (z - y) >>> 0;
    y >>>= 0;
    result = Array(len);
    while(++index < len){
        result[index] = x[index + y];
    }
    return result;
}