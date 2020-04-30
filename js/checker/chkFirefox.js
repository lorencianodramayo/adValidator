function chkFirefox(obj, baseName) {
    let firefoxOBJ = obj.document.getElementsByClassName('gwd-page-content')[0];

    if (getComputedStyle(firefoxOBJ).transformStyle === "flat") {
        $("#" + baseName + "_ClickableinFirefox_list span").addClass('cursor-default');
        $("#" + baseName + "_ClickableinFirefox_list i").addClass('fa-check text-success');
    } else {
    	$("#" + baseName + "_listOfErrors").append('<li><b>gwd-page-content</b> is set to <strike>preserve-3d</strike>, kindly change it to <b>flat</b></li>');
        $("#" + baseName + "_ClickableinFirefox_list i").addClass('fa-times text-secondary');
        $("#" + baseName + "_ClickableinFirefox_list span").addClass('cursor-default');
        $("#" + baseName + "_ClickableinFirefox_list span").css('border-bottom', '2px solid #e94576');
    }
}