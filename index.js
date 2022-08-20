// Code your solution here
let findMatching = (array, name) => {
    let text = array.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return text !== undefined ? text : undefined;
}

const fuzzyMatch = (array, letters) => {
    let text = array.filter(driver => driver.startsWith(letters))
    return text !== undefined ? text : undefined;
}

const matchName = (array, name) => {
    let text = array.filter(driver => driver.name === name);
    return text !== undefined ? text : undefined;
}