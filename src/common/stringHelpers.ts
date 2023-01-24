function isDigit(charcter: string): boolean {
    return new RegExp("^[0-9]").test(charcter);
}

function isNonZeroDigit(charcter: string): boolean {
    return new RegExp("^[1-9]").test(charcter);
}

function isLetter(character: string) {
    return new RegExp("^[a-z]|[A-Z]").test(character);
}

function isAlphanum(character: string): boolean {
    return new RegExp("^[0-9][a-z]|[A-Z]| _").test(character);
}

function isWhiteSpace(character: string): boolean {
    return new RegExp("\\s").test(character);
}

export { isDigit, isNonZeroDigit, isLetter, isAlphanum, isWhiteSpace };
