var fortunes = [1, 2, 3, 4, 5, 6];

exports.getFortune = function () {
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};