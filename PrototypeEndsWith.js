String.prototype.endsWith = function(search, position) {
    let x = this.length - 1
    if (position) {
        x = position - 1
    }
    for (let i = search.length - 1, j = x; i >= 0; i--, j--) {
        if (this[j] !== search[i]) {
            return false
        }
    }
    return true
}


Array.prototype.find = function (fn) {
    let index = this.findIndex(fn)
    return index === -1 ? undefined : this[index]
}
Array.prototype.findIndex = function (fn) {
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            return i
        }
    }
    return -1
}
Array.prototype.includes = function (search) {
    let index = this.findIndex(function (item) {
        return (search === item)
    })
    return index !== -1
}
