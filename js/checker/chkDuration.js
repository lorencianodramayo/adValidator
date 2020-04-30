function chkDuration(obj, baseName) {
    let durationOBJ = obj.document;
    let iframe = document.getElementById(baseName + "_iframeElement");
    // let isSetStatus = false;

    let setIntervalValue = setInterval(function() {
        if (iframe !== null) {
            if (iframe.contentWindow.document !== null) {
                clearInterval(setIntervalValue);
                console.log('Frame exists, and page is loaded!');
                // isSetStatus = true;
                getTotalDuration(iframe, baseName)
            }
        }
    }, 1);
}

function getTotalDuration(iframe, baseName) {
    const childWindow = iframe.contentWindow;
    // Create IE + others compatible event handler
    let finalCount = 0;
    let count = 0,
        msCount = 0,
        intervalMs = 10,
        counter = setInterval(timer, intervalMs),
        running = true,
        msRemaining = 0;

    function timer() {
        msRemaining += intervalMs;
        msCount += 1;
        if (msRemaining >= 1000) {
            count += 1;
            // Listen to message from child window

            window.addEventListener('message', message => {
                if (message.source !== childWindow) {
                    return; // Skip message in this event listener
                }
                if (message.data.type === 'SCREENSHOT_STOP') {
                    if (finalCount <= 0) {
                        clearInterval(counter);
                        document.getElementById(baseName + "_Duration_spanHandler").innerHTML = count + "s, " + msCount + "ms";
                        if (count <= 15) {
                            $("#" + baseName + "_Duration_list span").addClass('cursor-default');
                            $("#" + baseName + "_Duration_list i").addClass('fa-check text-success');
                        } else {
                            $("#" + baseName + "_listOfErrors").append('<li>Animation time exceeds to <b>15 seconds</b>, is it intended? </li>');
                            $("#" + baseName + "_Duration_list i").addClass('fa-times text-secondary');
                            $("#" + baseName + "_Duration_list span").addClass('cursor-default');
                            $("#" + baseName + "_Duration_list span").css('border-bottom', '2px solid #e94576');
                        }

                        if (count <= 15) {
                            $("#" + baseName + "_MaxDuration_list span").addClass('cursor-default');
                            $("#" + baseName + "_MaxDuration_list i").addClass('fa-check text-success');
                        } else {
                            $("#" + baseName + "_MaxDuration_list i").addClass('fa-times text-secondary');
                            $("#" + baseName + "_MaxDuration_list span").addClass('cursor-default');
                            $("#" + baseName + "_MaxDuration_list span").css('border-bottom', '2px solid #e94576');
                        }
                    }
                    finalCount++;
                }
            });
            if (msCount === 100) {
                msCount = 0;
            }
            msRemaining = 0;
        }
    }
}