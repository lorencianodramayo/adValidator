function chkDefaultValues(obj, baseName) {
	
    let getAllValues = "",
        isDefaulthasError = false,
        newObj = obj.defaultValues;
    if (Object.keys(newObj).length > 0) {
        for (let key of Object.keys(newObj)) {
            if (encodeURI(newObj[key]) === "") {
                $("#" + baseName + "_listOfErrors").append("<li>No value on Object Key <b>" + key + "</b>, kindly add <b>&lt;space&gt;</b> or <b>&amp;nbsp;</b></li>");
                isDefaulthasError = true;
            }
        }
        if (!isDefaulthasError) {
            for ([key, value] of Object.entries(newObj)) {
                getAllValues += '<div class="row row-striped py-2 mx-1 border-x"><div class="col-6" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0"><b>' + key + ':</b></div><div class="col-6" style="word-break: break-word;">' + value + '</div></div>';
            }
            $("#" + baseName + "_DefaultValues_list span").append("<sup>*</sup>");
            $("#" + baseName + "_DefaultValues_list span").attr({
                tabindex: 0,
                role: "button",
                "data-html": true,
                "data-toggle": "popover",
                "data-placement": "left",
                title: "defaultValues",
                "data-trigger": "focus",
                "aria-hidden": "true",
                "data-content": getAllValues
            });
            $("#" + baseName + "_DefaultValues_list span").addClass('cursor-pointer');
            $("#" + baseName + "_DefaultValues_list i").addClass('fa-check text-success');
        } else {
            $("#" + baseName + "_DefaultValues_list i").addClass('fa-times text-secondary');
            $("#" + baseName + "_DefaultValues_list span").addClass('cursor-default');
            $("#" + baseName + "_DefaultValues_list span").css('border-bottom', '2px solid #e94576');
        }
    }
}