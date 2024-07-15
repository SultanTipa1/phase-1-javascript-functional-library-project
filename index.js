function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        const values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            callback(values[i], i, collection);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else { // assuming it's an object
        const values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            result.push(callback(values[i], i, collection));
        }
    }
    return result;
}

function myReduce(collection, callback, acc) {
    let initialValueSet = arguments.length > 2;
    
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (!initialValueSet) {
                acc = collection[i];
                initialValueSet = true;
            } else {
                acc = callback(acc, collection[i], i, collection);
            }
        }
    } else { // assuming it's an object
        const values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            if (!initialValueSet) {
                acc = values[i];
                initialValueSet = true;
            } else {
                acc = callback(acc, values[i], i, collection);
            }
        }
    }
    return acc;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else { // assuming it's an object
        const values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            if (predicate(values[i])) {
                return values[i];
            }
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                result.push(collection[i]);
            }
        }
    } else { // assuming it's an object
        const values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            if (predicate(values[i])) {
                result.push(values[i]);
            }
        }
    }
    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else { // assuming it's an object
        return Object.keys(collection).length;
    }
}

function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
        const aTransformed = callback(a);
        const bTransformed = callback(b);
        if (aTransformed < bTransformed) return -1;
        if (aTransformed > bTransformed) return 1;
        return 0;
    });
}
