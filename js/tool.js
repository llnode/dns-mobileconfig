function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function addToList() {
    var runningNo = getCookie("runningNo");
    if (getCookie("runningNo") == "") {
        runningNo = 0;
    }
    
    var d = new Date();
    d.setTime(d.getTime() + (86400000)); //expires in 24h
    var expires = "expires="+ d.toUTCString();
    document.cookie = runningNo + "provName=" + document.getElementById("provName").value + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = runningNo + "doh=" + document.getElementById("doh").checked + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = runningNo + "dns1v4=" + document.getElementById("dns1v4").value + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = runningNo + "dns2v4=" + document.getElementById("dns2v4").value + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = runningNo + "dns1v6=" + document.getElementById("dns1v6").value + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = runningNo + "dns2v6=" + document.getElementById("dns2v6").value + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = runningNo + "serverUrl=" + document.getElementById("serverUrl").value + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = runningNo + "exclWifi=" + document.getElementById("exclWifi").value + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = runningNo + "useWifi=" + document.getElementById("useWifi").checked + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = runningNo + "useCell=" + document.getElementById("useCell").checked + ";" + expires + ";path=/; SameSite=Strict; Secure";
    document.cookie = runningNo + "lockProfile=" + document.getElementById("lockProfile").checked + ";" + expires + ";path=/; SameSite=Strict; Secure";

    runningNo++;
    document.cookie = "runningNo=" + runningNo + ";" + expires + ";path=/; SameSite=Strict; Secure";

    window.location.href = "/finalize.html"
}

function switchToHTTPS() {
    document.getElementById("serverUrl").placeholder = "https://example.com/query" + document.getElementById("serverUrl").value;
    document.getElementById("dohdotServerLabel").innerHTML = "DoH server URL:";
}

function switchToTLS() {
    document.getElementById("serverUrl").placeholder = "dot.example.com";
    document.getElementById("dohdotServerLabel").innerHTML = "DoT server URL:";
}

function loadPremade() {
    var provName = document.getElementById("provName");
    var checkDoH = document.getElementById("doh");
    var checkDoT = document.getElementById("dot");
    var dns1v4 = document.getElementById("dns1v4");
    var dns2v4 = document.getElementById("dns2v4");
    var dns1v6 = document.getElementById("dns1v6");
    var dns2v6 = document.getElementById("dns2v6");
    var serverUrl = document.getElementById("serverUrl");

    provName.value = getCookie("provName");
    if (getCookie("doh") == "true") {
        checkDoH.checked = true;
    } else if (getCookie("doh") == "false") {
        checkDoT.checked = true;
    }
    dns1v4.value = getCookie("dns1v4");
    dns2v4.value = getCookie("dns2v4");
    dns1v6.value = getCookie("dns1v6");
    dns2v6.value = getCookie("dns2v6");
    serverUrl.value = getCookie("serverUrl");
}

function accordion() {
    var adv = document.getElementById("advanced_container");
    if (adv.className.indexOf("w3-show") == -1) {
        adv.className += " w3-show";
        adv.previousElementSibling.className = adv.previousElementSibling.className.replace("w3-dark-grey", "w3-black");
    } else {
        adv.className = adv.className.replace(" w3-show", "");
        adv.previousElementSibling.className = adv.previousElementSibling.className.replace("w3-black", "w3-dark-grey");
    }
}