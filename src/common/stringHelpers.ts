function isDigit(charcter: string): boolean {
    return new RegExp("^[0-9]").test(charcter);
}

function isNonZeroDigit(charcter: string): boolean {
    return new RegExp("^[1-9]").test(charcter);
}

function isLetter(character: string) {
    return new RegExp("^[a-z]|[A-Z]").test(character);
}

export default { isDigit, isNonZeroDigit, isLetter };
