window.onload = function () {
    var nav = document.getElementById('nav').innerHTML;
    var local_links = document.getElementById('local_links');
    local_links.innerHTML = nav;
}


// メニューバー
var switchButton = false;
function buttonClick() {
    var nav = document.getElementById('nav');
    var menuButton_icon = document.getElementById('menuButton');
    switch (switchButton) {
        case false:
            nav.classList.add('navAni');
            //menuButton_icon.innerHTML = '<object id="menuButton_svg" data="style/menu_close.svg" width="32px"></object>';
            switchButton = true;
            break;
        case true:
            nav.classList.remove('navAni');
            //menuButton_icon.innerHTML = '<object id="menuButton_svg" data="style/menu_button.svg" width="32px"></object>';
            switchButton = false;
            break;
    }

}