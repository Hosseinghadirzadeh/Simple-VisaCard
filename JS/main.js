function _write(e) {
    let temp = e.target.value;
    let show = document.getElementById('CN');
    if (temp.length == 19) {
        document.getElementById('Name').focus();
    }
    show.innerHTML = temp;
    if (e.keyCode != 8)
        if (show.innerText.length == 4 || show.innerText.length == 9 || show.innerText.length == 14) {
            e.target.value += ' '
        }
}
function _write2(e,id) {
    let temp = e.target.value;
    let show = document.getElementById(id);
    show.innerHTML = temp;
}