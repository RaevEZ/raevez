let switchmode = document.getElementById ("switchmode")

switchmode.onclick = function () {
    let theme = document.getElementById ("theme");

    if(theme.getAttribute("href") == "RAEV.css") {
        theme.href = "RAEVlight.css";
        
    }
    else {
        theme.href = "RAEV.css";
    }
}
