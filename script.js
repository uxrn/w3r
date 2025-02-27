function searchReg() {
    var sbInput = document.getElementById('sb-input').value;
    var sbTLD = sbInput.split('.').pop();
    var pCount = sbInput.replace(/[^.]/g, "").length;
    var regURL = "https://porkbun.com/checkout/search?q=";

    if (sbInput == "") {
        alert("Nothing entered in the search bar.");
        return;
    }
    else if (sbInput.length > 63) {
        alert("Name cannot be longer than 63 characters");
        return;
    }
    else if (pCount > 1) {
        alert("Only one period allowed. Do not include 'www.' in your search.");
        return;
    }
    else if (sbInput.slice(0,1) == '.') {
        alert("Name cannot start with a period.");
    }
    else if (pCount == 1 && !(sbTLD == "dn" || sbTLD == "ur" || sbTLD == "rd")) {
        alert("Unsupported TLD. Try searching for a name ending in .dn, .ur, or .rd.");
        return;
    }
    else if (pCount == 0 && !(sbTLD == "dn" || sbTLD == "ur" || sbTLD == "rd") || (sbInput == "dn" || sbInput == "ur" || sbInput == "rd")) {
        window.open(regURL + sbInput + ".dn", '_blank').focus();
        return;
    }
    else {
        window.open(regURL + sbInput, '_blank').focus();
        return;
    }
}