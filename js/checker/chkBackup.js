const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function chkBackup(obj, baseName) {
    let getAllValues = "",
        imgObj = document.getElementById(baseName + "_tempImage");
    if (imgObj.src !== "") {
        let imgSize = getFileSize(imgObj.src);
        if (imgSize <= 40000) {
            if (parseInt(baseName.split("-")[0].split("x")[0]) === imgObj.naturalWidth && parseInt(baseName.split("-")[0].split("x")[1]) === imgObj.naturalHeight) {
                getAllValues += '<div class="row row-striped py-2 mx-1 border-x"><div class="col"><img src="' + imgObj.src + '" class="img-responsive fit-image" width = "100%"/></div></div>';
                getAllValues += '<div class="row row-striped py-2 mx-1 border-x"><div class="col-6" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0"><b>Backup Name:</b></div><div class="col-6" style="word-break: break-word;">' + imgObj.getAttribute("name").split(".")[0] + '</div></div>';
                getAllValues += '<div class="row row-striped py-2 mx-1 border-x"><div class="col-6" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0"><b>Image Format:</b></div><div class="col-6" style="word-break: break-word;">' + imgObj.getAttribute("name").split(".")[1] + '</div></div>';
                getAllValues += '<div class="row row-striped py-2 mx-1 border-x"><div class="col-6" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0"><b>Dimension:</b></div><div class="col-6" style="word-break: break-word;">' + imgObj.naturalWidth + ' x ' + imgObj.naturalHeight + '</div></div>';
                getAllValues += '<div class="row row-striped py-2 mx-1 border-x"><div class="col-6" style="max-width: 150px;word-wrap: break-word;" class="pr-0 mr-0"><b>Backup Size:</b></div><div class="col-6" style="word-break: break-word;">' + convertFileSize(imgSize) + '</div></div>';

                $("#" + baseName + "_BackupImage_list span").append("<sup>*</sup>");
                $("#" + baseName + "_BackupImage_list span").attr({
                    tabindex: 0,
                    role: "button",
                    "data-html": true,
                    "data-toggle": "popover",
                    "data-placement": "left",
                    title: "Backup Image",
                    "data-trigger": "focus",
                    "aria-hidden": "true",
                    "data-content": getAllValues
                });
                $("#" + baseName + "_BackupImage_list span").addClass('cursor-pointer');
                $("#" + baseName + "_BackupImage_list i").addClass('fa-check text-success');
            } else {
                $("#" + baseName + "_listOfErrors").append('<li>Wrong Backup image resolution(' + imgObj.naturalWidth + 'x' + imgObj.naturalHeight + ') kindly change it to ' + baseName.split("-")[0].split("x")[0] + 'x' + baseName.split("-")[0].split("x")[1] + '</li>');
                $("#" + baseName + "_BackupImage_list i").addClass('fa-times text-secondary');
                $("#" + baseName + "_BackupImage_list span").addClass('cursor-default');
                $("#" + baseName + "_BackupImage_list span").css('border-bottom', '2px solid #e94576');
            }
        } else {
            $("#" + baseName + "_listOfErrors").append('<li>Backup image size <b>(' + convertFileSize(imgSize) + ')</b> exceed to 40 KB</li>');
            $("#" + baseName + "_BackupImage_list i").addClass('fa-times text-secondary');
            $("#" + baseName + "_BackupImage_list span").addClass('cursor-default');
            $("#" + baseName + "_BackupImage_list span").css('border-bottom', '2px solid #e94576');
        }
    } else {
        $("#" + baseName + "_listOfErrors").append('<li>No <b>Backup image</b></li>');
        $("#" + baseName + "_BackupImage_list i").addClass('fa-times text-secondary');
        $("#" + baseName + "_BackupImage_list span").addClass('cursor-default');
        $("#" + baseName + "_BackupImage_list span").css('border-bottom', '2px solid #e94576');
    }
}

function getFileSize(url) {
    var fileSize = '';
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send(null);
    if (http.status === 200) {
        fileSize = http.getResponseHeader('content-length');
    }
    return fileSize;
}

function convertFileSize(x) {
    let l = 0,
        n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
        n = n / 1024;
    }
    return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}