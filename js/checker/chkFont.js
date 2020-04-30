function chkFont(obj, baseName) {
    let arrFonts = [],
        newObj = obj.document.body.getElementsByTagName('*');

    styleInPage(newObj, 'fontFamily').forEach(function(value, index) {
        if (value.indexOf(',') == -1 && value.indexOf("Times") == -1) {
            arrFonts.push(value)
        }
    });
    //output fonts
    if (arrFonts.length > 0) {
        let getAllValues = "";
        arrFonts.forEach(function(value, index) {
            getAllValues += '<div class="row row-striped py-2 mx-1 border-x"><div class="col text-center" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0">' + value + '</div></div>';
        });

        $("#" + baseName + "_Font_list span").append("<sup>*</sup>");
        $("#" + baseName + "_Font_list span").attr({
            tabindex: 0,
            role: "button",
            "data-html": true,
            "data-toggle": "popover",
            "data-placement": "left",
            title: "Font used",
            "data-trigger": "focus",
            "aria-hidden": "true",
            "data-content": getAllValues
        });
        $("#" + baseName + "_Font_list span").addClass('cursor-pointer');
        $("#" + baseName + "_Font_list i").addClass('fa-check text-success');
    } else {
        $("#" + baseName + "_listOfErrors").append('<li>No <b>Font used in text elements</b></li>');
        $("#" + baseName + "_Font_list i").addClass('fa-times text-secondary');
        $("#" + baseName + "_Font_list span").addClass('cursor-default');
        $("#" + baseName + "_Font_list span").css('border-bottom', '2px solid #e94576');
    }
}
//find font in page
function styleInPage(obj, css, verbose) {
    if (typeof getComputedStyle == "undefined")
        getComputedStyle = function(elem) {
            return elem.currentStyle;
        }
    var who, hoo, values = [],
        val,
        nodes = obj,
        L = nodes.length;
    for (var i = 0; i < L; i++) {
        who = nodes[i];
        if (who.style) {
            hoo = '#' + (who.id || who.nodeName + '(' + i + ')');
            val = who.style.fontFamily || getComputedStyle(who, '')[css];
            if (val) {
                if (verbose) values.push([hoo, val]);
                else if (values.indexOf(val) == -1) values.push(val);
            }
            val_before = getComputedStyle(who, ':before')[css];
            if (val_before) {
                if (verbose) values.push([hoo, val_before]);
                else if (values.indexOf(val_before) == -1) values.push(val_before);
            }
            val_after = getComputedStyle(who, ':after')[css];
            if (val_after) {
                if (verbose) values.push([hoo, val_after]);
                else if (values.indexOf(val_after) == -1) values.push(val_after);
            }
        }
    }
    return values;
}