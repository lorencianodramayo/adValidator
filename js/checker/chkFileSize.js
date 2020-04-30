function chkFileSize(baseName) {
    let getFileSize = document.getElementById(baseName + "_forSize_Filesize").getAttribute("name");
    if (parseInt(getFileSize) <= 10000000) {
        $("#" + baseName + "_Filesize_list span").addClass('cursor-default');
        $("#" + baseName + "_Filesize_list i").addClass('fa-check text-success');
    } else {
        $("#" + baseName + "_listOfErrors").append('<li>file size, exceeds to <b>10 MB</b>, <a href="https://tinypng.com/">optimize</a> image? </li>');
        $("#" + baseName + "_Filesize_list i").addClass('fa-times text-secondary');
        $("#" + baseName + "_Filesize_list span").addClass('cursor-default');
        $("#" + baseName + "_Filesize_list span").css('border-bottom', '2px solid #e94576');
    }
}