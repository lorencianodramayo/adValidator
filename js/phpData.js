$(document).ready(function() {
    var drop = $("input");
    drop.on("dragenter", function(e) {
            $(".drop").css({
                border: "4px dashed #e94576",
                background: "rgba(0, 153, 255, .05)"
            });
            $(".cont").css({
                color: "#e94576"
            });
            $(".icon").css({
                color: "#e94576"
            });
        })
        .on("dragleave dragend mouseout drop", function(e) {
            $(".drop").css({
                border: "3px dashed #DADFE3",
                background: "#fff"
            });
            $(".cont").css({
                color: "#8E99A5"
            });
            $(".icon").css({
                color: "#8E99A5"
            });
        });

    $("#files").change(handleFileSelect);
});

const handleFileSelect = (evt) => {
    evt.preventDefault();
    let zip = new FormData();
    let url = './php/upload.php';
    zip.append('fileName', $('#files')[0].files[0]);
    $.ajax({
        type: 'post',
        url: url,
        processData: false,
        contentType: false,
        data: zip,
        success: function(response) {
            let urlAppendkey = window.location.href + "?preview=" + response;
            window.location.replace(urlAppendkey);
        },
        error: function(err) {}
    });
}

var chkReadyState = setInterval(function() {
    if (document.readyState == "complete") {
        // $(".preloader").fadeOut(1000);
        if (window.location.hash !== "") {
            window.location.replace(window.location.href.split('#')[0]);
        }

        // clear the interval
        clearInterval(chkReadyState);

        // finally your page is loaded.
        if (document.location.search.length) {
            if (document.location.search.includes("??")) {
                window.location.replace(window.location.origin + window.location.pathname + "?preview=" + getUrlVars()["preview"]);
            } else {
                $.post(
                    "./php/getfiles.php", { zID: getUrlVars()["preview"] },
                    function(resp) {
                        $("#fileHandler").fadeOut(1000, function() {
                            if (resp !== null || resp !== "" || resp !== undefined || resp !== 0) {
                                $(".preloader").fadeIn(1000, function() {
                                    createPage(resp);
                                });
                            }
                        })
                    }, 'json'
                );
            }
            // initializeZip(getUrlVars()["key"]);
        } else {
            $(".preloader").fadeOut(1000, function() {
                $("#fileHandler").fadeIn(1000)
            });
            // no query string exists
        }
    }
}, 100);


//get queryString Value
function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}