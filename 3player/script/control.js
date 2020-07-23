const init = function (e) {
    let btn = document.querySelector("#item1");

    btn.addEventListener('click', function () {
        window.document.location = './code.html';
    });
};

document.addEventListener('DOMContentLoaded', function () {
    init();
});