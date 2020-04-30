function chkClickExit(obj, baseName) {
    let exitValue,
        hasExit = false,
        tryCount = 0,
        getAllValues = "";

    for (let [key, value] of Object.entries(obj.gwd)) {
        if (key.match('(exit|Exit)')) {
            const _temp = value.toString();
            hasExit = true;
            exitValue = _temp.slice(_temp.indexOf("{") + 1, _temp.lastIndexOf("}"));
        } else {
            tryCount = 1;
        }
    }

    //check if no exit in Window DOM and check it on content DOM
    if (!hasExit && tryCount === 1) {
        let fineExitinWindow = document.getElementById(baseName + "_iframeElement").contentWindow;

        for (let [key, value] of Object.entries(fineExitinWindow)) {
            if (key.match('(exit|Exit)')) {
                const _temp = value.toString();
                hasExit = true;
                tryCount = 1;
                exitValue = _temp.slice(_temp.indexOf("{") + 1, _temp.lastIndexOf("}"));
            }
        }
    }

    //if it has exit
    if (hasExit && tryCount === 1) {
        let deliveryType = "",
            exitType = "",
            exitURL = "",
            exitName = '"';
        if (exitValue.split('(')[0].includes('Enabler.exitOverride')) {
            exitType = "Enabler.exitOverride";
            exitName = exitValue.split('(')[1].split(',')[0].replace(/"/ig, '');
            exitURL = exitValue.split('(')[1].split(',')[1].split(')')[0];
            deliveryType = "Trafficked/Non-Trafficked";
        } else {
            exitType = "Enabler.exit";
            exitName = "clickTag";
            exitURL = "https://www.google.com/";
            deliveryType = "Pre-rendered/Standard";
        }
        getAllValues += '<div class="row row-striped py-2 mx-1 border-x"><div class="col-5" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0"><b>Exit Type:</b></div><div class="col-7" style="word-break: break-word;">' + exitType + '</div></div>';
        getAllValues += '<div class="row row-striped py-2 mx-1 border-x"><div class="col-5" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0"><b>Exit Name:</b></div><div class="col-7" style="word-break: break-word;">' + exitName + '</div></div>';
        getAllValues += '<div class="row row-striped py-2 mx-1 border-x"><div class="col-5" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0"><b>Exit Attribute:</b></div><div class="col-7" style="word-break: break-word;">' + exitURL + '</div></div>';
        getAllValues += '<div class="row row-striped py-2 mx-1 border-x"><div class="col-5" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0"><b>Delivery type:</b></div><div class="col-7" style="word-break: break-word;">' + deliveryType + '</div></div>';

        $("#" + baseName + "_ClickExit_list span").append("<sup>*</sup>");

        $("#" + baseName + "_ClickExit_list span").attr({
            tabindex: 0,
            role: "button",
            "data-html": true,
            "data-toggle": "popover",
            "data-placement": "left",
            title: "Click Exit",
            "data-trigger": "focus",
            "aria-hidden": "true",
            "data-content": getAllValues
        });
        $("#" + baseName + "_ClickExit_list span").addClass('cursor-pointer');
        $("#" + baseName + "_ClickExit_list i").addClass('fa-check text-success');
        $("[data-toggle=popover]").popover();
    } else {
        $("#" + baseName + "_listOfErrors").append('<li>No <b>Click Exit</b></li>');
        $("#" + baseName + "_ClickExit_list i").addClass('fa-times text-secondary');
        $("#" + baseName + "_ClickExit_list span").addClass('cursor-default');
        $("#" + baseName + "_ClickExit_list span").css('border-bottom', '2px solid #e94576');
    }

}