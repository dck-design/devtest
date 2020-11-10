if (navigator.userAgent.indexOf("Firefox") < 0) {
    var now_icon = 1, max_icon = 15, pause_timer = 0;
    setInterval(function () {
        if (document.querySelector("link[rel='icon']") !== null)
            document.querySelector("link[rel='icon']").remove();
        if (document.querySelector("link[rel='shortcut icon']") !== null)
            document.querySelector("link[rel='shortcut icon']").remove();
        document.querySelector("head").insertAdjacentHTML("beforeend", '<link rel="icon" href="../favicon/favicon-' + now_icon + '.gif" type="image/gif">');
        if (now_icon == 15) {
            if (pause_timer > 30) { now_icon = 1; pause_timer = 0; }
            else pause_timer++;
        } else { now_icon++; }
    }, 100);
}