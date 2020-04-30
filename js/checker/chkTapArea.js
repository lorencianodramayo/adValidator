function chkTapArea(obj, baseName) {
    let tapAreaOBJ = obj.document.querySelectorAll('gwd-taparea');
    let zipNameSplitWidth = baseName.toLowerCase().split('-')[0].split('x')[0];
    let zipNameSplitHeight = baseName.toLowerCase().split('-')[0].split('x')[1];
    let hasTapArea = false;

    if (tapAreaOBJ.length > 0) {
        tapAreaOBJ.forEach((div, index) => {
            if (getComputedStyle(div).width.includes("px") && getComputedStyle(div).height.includes("px")) {
                if (parseInt(getComputedStyle(div).width) === parseInt(zipNameSplitWidth) && parseInt(getComputedStyle(div).height) === parseInt(zipNameSplitHeight)) {
                    hasTapArea = true;
                }
            } else if (getComputedStyle(div).width.includes("%") && getComputedStyle(div).height.includes("%")) {
                if (parseInt(getComputedStyle(div).width) === 100 && parseInt(getComputedStyle(div).height) === 100) {
                    hasTapArea = true;
                }
            } else if (getComputedStyle(div).width.includes("%") && getComputedStyle(div).height.includes("px")) {
                if (parseInt(getComputedStyle(div).width) === 100 && parseInt(getComputedStyle(div).height) === parseInt(zipNameSplitHeight)) {
                    hasTapArea = true;
                }
            } else if (getComputedStyle(div).width.includes("px") && getComputedStyle(div).height.includes("%")) {
                if (parseInt(getComputedStyle(div).width) === parseInt(zipNameSplitWidth) && parseInt(getComputedStyle(div).height) === 100) {
                    hasTapArea = true;
                }
            }
        })
    }

    if (hasTapArea) {
        $("#" + baseName + "_TapArea_list span").addClass('cursor-default');
        $("#" + baseName + "_TapArea_list i").addClass('fa-check text-success');
    } else {
        $("#" + baseName + "_listOfErrors").append('<li>No <b>Tap rea</b>. are you using custom tap area?</li>');
        $("#" + baseName + "_TapArea_list i").addClass('fa-times text-secondary');
        $("#" + baseName + "_TapArea_list span").addClass('cursor-default');
        $("#" + baseName + "_TapArea_list span").css('border-bottom', '2px solid #e94576');
    }
}