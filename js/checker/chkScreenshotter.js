function chkScreenshotter(obj, baseName) {
    let screenshotterOBJ = obj.callAdlibScreenshot;

    if (typeof screenshotterOBJ === 'undefined') {
        screenshotterOBJ = obj.gwd.callAdlibScreenshot;
    }

    if (typeof screenshotterOBJ !== 'undefined' && screenshotterOBJ.toString().includes('takeScreenshot')) {
        $("#" + baseName + "_Screenshotter_list span").addClass('cursor-default');
        $("#" + baseName + "_Screenshotter_list i").addClass('fa-check text-success');
    } else {
        $("#" + baseName + "_listOfErrors").append('<li>No <b>Screenshotter.js</b>. Need <a href="https://drive.google.com/file/d/1g5fTe0m5UXEumTutbsIP0qZ1PXUE4Hqf/view?usp=sharing" target="_blank">Screenshotter.js</a>?</li>');
        $("#" + baseName + "_Screenshotter_list i").addClass('fa-times text-secondary');
        $("#" + baseName + "_Screenshotter_list span").addClass('cursor-default');
        $("#" + baseName + "_Screenshotter_list span").css('border-bottom', '2px solid #e94576');

        $("#" + baseName + "_listOfErrors").append('<li>Unable to detect <b>Animation duration</b>, kindly add Screenshotter.</li>');
        $("#" + baseName + "_Duration_list i").addClass('fa-times text-secondary');
        $("#" + baseName + "_Duration_list span").addClass('cursor-default');
        $("#" + baseName + "_Duration_list span").css('border-bottom', '2px solid #e94576');

        $("#" + baseName + "_MaxDuration_list i").addClass('fa-times text-secondary');
        $("#" + baseName + "_MaxDuration_list span").addClass('cursor-default');
        $("#" + baseName + "_MaxDuration_list span").css('border-bottom', '2px solid #e94576');
    }
}