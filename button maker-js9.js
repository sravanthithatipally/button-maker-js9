let bgcolorvalue = document.getElementById("bgColorInput");

let fontcolorvalue = document.getElementById("fontColorInput");

let fontsizevalue = document.getElementById("fontSizeInput");

let fontweightvalue = document.getElementById("fontWeightInput");

let paddingvalue = document.getElementById("paddingInput");

let borderradiusvalue = document.getElementById("borderRadiusInput");

let cbutton = document.getElementById("customButton");

function applyclicked() {
    let updatedbgcolor = bgcolorvalue.value;
    let updatedfontcolor = fontcolorvalue.value;
    let updatedfontsize = fontsizevalue.value;
    let updatedfontweight = fontweightvalue.value;
    let updatedpadding = paddingvalue.value;
    let updatedborderradius = borderradiusvalue.value;

    cbutton.style.backgroundColor = updatedbgcolor;
    cbutton.style.color = updatedfontcolor;
    cbutton.style.fontSize = updatedfontsize;
    cbutton.style.fontWeight = updatedfontweight;
    cbutton.style.padding = updatedpadding;
    cbutton.style.borderRadius = updatedborderradius;
}