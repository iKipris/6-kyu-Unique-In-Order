var uniqueInOrder = function(iterable) {
    //your code here - remember iterable can be a string or an array
    var result = [];
    for (var i = 0; i < iterable.length; ++i) {
        if (iterable[i + 1] != iterable[i]) {
            result.push(iterable[i]);
        }
        else {
            continue;
        }

    }
    return result;
}
