if (Number(process.version.slice(1).split(".")[0]) < 10) throw new Error("Node 10.0.0 or higher is required. Update Node on your system.");

/**
 * Génère un nombre aléatoire compris en deux valeurs spécifiées comprises
 * @param {Number} min La valeur minimale qui peut être générée
 * @param {Number} max La valeur maximale qui peut être générée
 */
var round = function (min, max) {
    if (!min) console.warn("No minimum number specified! Using 0 as minimum number!")
    if (!min) min = 0
    if (!max) console.warn("No maximum number specified! Using 1 as maximum number!")
    if (!max) max = 0
    if (isNaN(min)) throw new SyntaxError("You must specify a valid minimum Number!")
    if (isNaN(max)) throw new SyntaxError("You must specify a valid maximum Number!")
    if (max <= min) throw new RangeError("The maximum number is not greater than the minimum number!")

    if (new RegExp(/\./g).test(min)) min = min.split(".")[0]
    if (new RegExp(/\,/g).test(min)) min = min.split(",")[0]
    if (new RegExp(/\./g).test(max)) max = max.split(".")[0]
    if (new RegExp(/\,/g).test(max)) max = max.split(",")[0]

    return Math.floor(Math.random() * Math.floor(max + 1 - min)) + min;
}

module.exports = {
    round: round
}