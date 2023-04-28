module.exports = {
    // TODO: Create our computer function here
    add: function(a, b) {

        if (arguments.length === 0)
            throw new Error('Arguments missing.')
        else if (a === null)
            throw new Error('"null" is not a valid number [arg 0].');
        else if (b === null)
            throw new Error('"null" is not a valid number [arg 1].');
        else if (a === undefined)
            throw new Error('"undefined" is not a valid number [arg 0].');
        else if (b === undefined)
            throw new Error('"undefined" is not a valid number [arg 1].');
        else if (typeof a === 'string' || a instanceof String)
            throw new Error('a String is not a valid number [arg 0].');
        else if (typeof b === 'string' || b instanceof String)
            throw new Error('a String is not a valid number [arg 1].');
        else
            return a + b;
    }
};