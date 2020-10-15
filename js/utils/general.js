var isNull = function(obj) {
	return obj === undefined || obj === null;
}

var isNotNull = function(obj) {
	return !isNull(obj);
}

var isBlank = function(obj) {
	return isNull(obj) || obj.trim() === '';
}

var isNotBlank = function(obj) {
	return !isBlank(obj);
}

var isEmpty = function(array) {
	return isNull(array) || array.length === 0;
}

var isNotEmpty = function(array) {
	return !isEmpty(array);
}

var eq = function(obj, obj2) {
	return obj === obj2;
}

var notEq = function(obj, obj2){
	return !eq(obj, obj2);
}

var not = function(obj){
	return !obj;
}