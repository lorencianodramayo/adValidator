function initCheckList(iframe, baseName) {
    let iframeObj = iframe.contentWindow;
    let intr = setInterval(function() {
        try {
            if (iframeObj.document.querySelector("gwd-page").querySelectorAll("div") != null) {
                clearInterval(intr)
                chkDefaultValues(iframeObj, baseName);
                chkNormalize(iframeObj, baseName);
                chkBorder(iframeObj, baseName);
                chkClickExit(iframeObj, baseName);
                chkFont(iframeObj, baseName);
                chkTapArea(iframeObj, baseName);
                chkBackup(iframeObj, baseName);
                chkScreenshotter(iframeObj, baseName);
                chkFirefox(iframeObj, baseName);
                chkFileSize(baseName)
                chkDuration(iframeObj, baseName);
                getOverAllProgress(baseName);
                $("[data-toggle=popover]").popover();
            }
        } catch (e) {}
    }, 100);
}