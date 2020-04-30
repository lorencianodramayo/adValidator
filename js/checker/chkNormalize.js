function chkNormalize(obj, baseName) {
    let found = false,
        newObj = obj.document.querySelectorAll("style");

    newObj.forEach((entries, index) => {
        if ((entries.innerHTML).toLowerCase().includes("normalize")) {
            found = true;
        }
    });

    if (found) {
        $("#" + baseName + "_Normalize_list span").addClass('cursor-default');
        $("#" + baseName + "_Normalize_list i").addClass('fa-check text-success');
    } else {
        $("#" + baseName + "_listOfErrors").append('<li>No <b>Normalize.css</b> embedded. Need <a href="https://drive.google.com/file/d/1Ww7v6RHdkKcxENs_A54-BsHfhkIbHIjX/view?usp=sharing" target="_blank">Normalize.css</a>?</li>');
        $("#" + baseName + "_Normalize_list i").addClass('fa-times text-secondary');
        $("#" + baseName + "_Normalize_list span").addClass('cursor-default');
        $("#" + baseName + "_Normalize_list span").css('border-bottom', '2px solid #e94576');
    }
}