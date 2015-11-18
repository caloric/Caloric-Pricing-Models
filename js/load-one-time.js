var list = document.getElementsByTagName('div-class');
var i = list.length, flag = false;
while (i--) {
    if (list[i].src == 'http://interactive.') {
        flag = true;
    }
}
if (!flag) {
    var tag = document.createElement('div-class');
    tag.src = 'http://interactive.';
    document.getElementsByTagName('body')[0].appendChild(tag);
}
