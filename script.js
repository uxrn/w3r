function searchReg(input) {
    var sbTLD = input.split('.').pop();
    var pCount = input.replace(/[^.]/g, "").length;
    var regURL = "https://porkbun.com/checkout/search?q=";

    if (input == "") {
        alert("Nothing entered in the search bar.");
        return;
    }
    else if (input.length > 63) {
        alert("Name cannot be longer than 63 characters");
        return;
    }
    else if (pCount > 1) {
        alert("Only one period allowed. Do not include 'www.' in your search.");
        return;
    }
    else if (input.slice(0,1) == '.') {
        alert("Name cannot start with a period.");
    }
    else if (pCount == 1 && !(sbTLD == "dn" || sbTLD == "ur" || sbTLD == "rd")) {
        alert("Unsupported TLD. Try searching for a name ending in .dn, .ur, or .rd.");
        return;
    }
    else if (pCount == 0 && !(sbTLD == "dn" || sbTLD == "ur" || sbTLD == "rd") || (input == "dn" || input == "ur" || input == "rd")) {
        window.open(regURL + input + ".dn", '_blank').focus();
        return;
    }
    else {
        window.open(regURL + input, '_blank').focus();
        return;
    }
}