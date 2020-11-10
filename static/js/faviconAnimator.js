/* eslint-disable prettier/prettier */
if (navigator.userAgent.indexOf("Firefox") < 0) {
    let nowIcon = 1; const maxIcon = 15; let pauseTimer = 0;
    setInterval(function () {
        if (document.querySelector("link[rel='icon']") !== null)
            document.querySelector("link[rel='icon']").remove();
        if (document.querySelector("link[rel='shortcut icon']") !== null)
            document.querySelector("link[rel='shortcut icon']").remove();
        document.querySelector("head").insertAdjacentHTML("beforeend", '<link rel="icon" href="../favicon/favicon-' + nowIcon + '.gif" type="image/gif">');
        if (nowIcon == maxIcon) {
            if (pauseTimer > 30) { nowIcon = 1; pauseTimer = 0; }
            else pauseTimer++;
        } else { nowIcon++; }
    }, 100);
}