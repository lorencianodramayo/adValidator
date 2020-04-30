function chkBorder(obj, baseName) {
    let getAllValues = "",
        newObj = obj.document.querySelector("gwd-page").querySelectorAll("div");

    if (newObj.length > 0) {
        getAllValues += '<div class="row row-striped py-2 mx-1"><div class="col-4" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0"><b>Width:</b></div><div class="col-8" style="word-break: break-word;">' + newObj[newObj.length - 1].style.width + '</div></div>';
        getAllValues += '<div class="row row-striped py-2 mx-1"><div class="col-4" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0"><b>Border:</b></div><div class="col-8" style="word-break: break-word;"><i class="fas fa-square-full" style="background-color:' + newObj[newObj.length - 1].style["background-color"] + '" aria-hidden="true"></i> ' + newObj[newObj.length - 1].style["background-color"] + '</div></div>';
        $("#" + baseName + "_Border_list span").addClass('cursor-pointer');
        $("#" + baseName + "_Border_list i").addClass('fa-check text-success');
        $("#" + baseName + "_Border_list span").append("<sup>*</sup>");
        $("#" + baseName + "_Border_list span").attr({
            tabindex: 0,
            role: "button",
            "data-html": true,
            "data-toggle": "popover",
            "data-placement": "left",
            title: "Border",
            "data-trigger": "focus",
            "aria-hidden": "true",
            "data-content": getAllValues
        });
        $("[data-toggle=popover]").popover();
    } else {
        $("#" + baseName + "_listOfErrors").append('<li>No <b>Border</b></li>');
        $("#" + baseName + "_Border_list i").addClass('fa-times text-secondary');
        $("#" + baseName + "_Border_list span").addClass('cursor-default');
        $("#" + baseName + "_Border_list span").css('border-bottom', '2px solid #e94576');
    }
}