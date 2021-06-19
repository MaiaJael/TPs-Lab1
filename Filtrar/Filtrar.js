const array = ["Agregar cosas xd", 129, [7, 9], null, 0, undefined];
const valuesToFilter = [0, null, undefined];

function Process() {
    let filteredArray = array.filter(FunctionForFilter);
    console.log(filteredArray)
}

function FunctionForFilter(value) {
        return !valuesToFilter.includes(value)}


