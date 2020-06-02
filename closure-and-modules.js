/*
    Everytime we call this function (Factory functions), it produce new instance of this module.
*/

export default function PersonModule() {
    var PersonModule = {
        getFullName
    }
    return PersonModule;

    function getFirstName(fname) {
        return fname
    }

    function getLastName(lname) {
        return lname
    }

    function getFullName(fname, lname) {
        return `My name is ${getFirstName(fname)} ${getLastName(lname)}.`
    }
}