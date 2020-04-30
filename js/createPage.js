var arrayCheckList = [
    'DefaultValues',
    'Tap Area',
    'Normalize.css',
    'Backup Image',
    'Border',
    'Screenshotter',
    'Click Exit',
    'Clickable in Firefox',
    'Font',
    'File size',
    'Duration',
    'Max Duration'
];

function createPage(data) {
    $("#fileHandler").hide();
    for (let i = 0; i < data.length; i++) {
        if (data[i].indexOf('MACOSX') <= -1) {
            let baseName = data[i].split('/')[1].replace(/\s/g, '');
            //page
            let rowDiv = document.createElement("div");
            rowDiv.setAttribute("id", baseName + "_page");
            rowDiv.setAttribute("class", "list-item row");
            document.getElementById('list-wrapper').append(rowDiv);

            //create col page cretive Preview
            let creativePreview = document.createElement("div");
            creativePreview.setAttribute("id", baseName + "_preview");
            creativePreview.setAttribute("class", "col text-center  px-5 py-4 display-flex-vertical");
            document.getElementById(baseName + "_page").append(creativePreview);

            //create col page cretive checklist
            let creativeChecklistContainer = document.createElement("div");
            creativeChecklistContainer.setAttribute("id", baseName + "_creativeChecklistContainer");
            creativeChecklistContainer.setAttribute("class", "col  px-5 py-4 border");
            document.getElementById(baseName + "_page").append(creativeChecklistContainer);

            //create hidden div for backup
            let backupHandler = document.createElement("div");
            backupHandler.setAttribute("id", baseName + "_backupHandler");
            backupHandler.setAttribute("class", "d-none");
            document.getElementById(baseName + "_page").append(backupHandler);

            //create titleHandler in creative Preview
            let titleHandler = document.createElement("div");
            titleHandler.setAttribute("class", "titleCSS");
            titleHandler.setAttribute("id", baseName + "titleHandler");
            titleHandler.innerHTML = data[i].split('/')[1];
            document.getElementById(baseName + "_preview").append(titleHandler);

            //create iframeContainer in creative Preview
            let iframeHandler = document.createElement("div");
            iframeHandler.setAttribute("id", baseName + "_iframeHandler");
            document.getElementById(baseName + "_preview").append(iframeHandler);

            //create iframe in iframeContainer
            let iframe = document.createElement("iframe")
            iframe.setAttribute("id", baseName + "_iframeElement");
            iframe.style.width = baseName.split('-')[0].split('x')[0] + "px";
            iframe.style.height = baseName.split('-')[0].split('x')[1] + "px";
            iframe.src = window.location.origin + window.location.pathname + '/upload/' + data[i];
            document.getElementById(baseName + "_iframeHandler").append(iframe);

            //create creativeValidate in creative checklist
            let creativeValidate = document.createElement('div');
            creativeValidate.setAttribute("id", baseName + "_creativeValidate");
            creativeValidate.setAttribute("class", "row");
            document.getElementById(baseName + "_creativeChecklistContainer").append(creativeValidate)

            //create progressLoader in creativeValidate
            let progressLoader = document.createElement('div');
            progressLoader.setAttribute("id", baseName + "_progressLoader");
            progressLoader.setAttribute("class", "col");
            document.getElementById(baseName + "_creativeValidate").append(progressLoader)

            //divider to each col elements
            if (Number(baseName.split('-')[0].split('x')[0]) < 400) {
                let dividerCol1 = document.createElement('div');
                dividerCol1.setAttribute("class", "w-100");
                document.getElementById(baseName + "_creativeValidate").append(dividerCol1);
            }
            //create checkList in creativeValidate
            let checkList = document.createElement('div');
            checkList.setAttribute("id", baseName + "_checkList");
            if (Number(baseName.split('-')[0].split('x')[0]) < 400) {
                checkList.setAttribute("class", "col  border-top border-bottom py-3");
            } else {
                checkList.setAttribute("class", "col-6 grid-col  border-left border-right");
            }
            document.getElementById(baseName + "_creativeValidate").append(checkList);

            //divider to each col elements;
            if (Number(baseName.split('-')[0].split('x')[0]) < 400) {
                let dividerCol2 = document.createElement('div');
                dividerCol2.setAttribute("class", "w-100");
                document.getElementById(baseName + "_creativeValidate").append(dividerCol2);
            }
            //create checkResult in creativeValidate
            let checkResult = document.createElement('div');
            checkResult.setAttribute("id", baseName + "_checkResult");
            checkResult.setAttribute("class", "col");
            document.getElementById(baseName + "_creativeValidate").append(checkResult);

            //create circle Progress in progressLoader
            let setCircle = document.createElement("div");
            setCircle.setAttribute('id', baseName + '_progress');
            setCircle.setAttribute('data-dimension', '200');
            setCircle.setAttribute('data-info', 'Approved');
            setCircle.setAttribute('data-fontsize', '36');
            setCircle.setAttribute('data-fgcolor', '#e94576');
            setCircle.setAttribute('data-bgcolor', '#eee');
            setCircle.setAttribute('data-width', '10');
            setCircle.setAttribute('data-bordersize', '20');
            setCircle.setAttribute('data-animationstep', '2');
            document.getElementById(baseName + "_progressLoader").append(setCircle);

            //createImageTemp
            let creatTempImg = document.createElement("img");
            creatTempImg.setAttribute("class", "tempImages");
            creatTempImg.setAttribute("id", baseName + "_tempImage");
            document.getElementById(baseName + "_page").append(creatTempImg);

            //get image
            $.post(
                "./php/getSubFiles.php", { dirPath: '../upload/' + data[i] },
                function(resp) {
                    resp.forEach(function(value, index) {
                        if (value.indexOf('backup') != -1) {
                            document.getElementById(baseName + "_tempImage").setAttribute("src", window.location.origin + window.location.pathname + '/upload/' + data[i] + '/' + value);
                            document.getElementById(baseName + "_tempImage").setAttribute("name", value);
                        }
                    });
                }, 'json'
            );
            //get file size , zipcreated: data[i].split('/')[1] 
            $.post(
                "./php/getFileSize.php", { pathdir: '../upload/' + data[i] },
                function(respnz) {
                    document.getElementById(baseName + "_forSize_Filesize").innerHTML = convertFileSize(respnz);
                    document.getElementById(baseName + "_forSize_Filesize").setAttribute("name", respnz);
                }, 'json'
            );

            //add checkListRowItem to checkList
            for (let i = 0; i < arrayCheckList.length; i++) {
                if (i % 2 === 0) {
                    window["checkListRowList_" + i] = document.createElement('div');
                    if (Number(baseName.split('-')[0].split('x')[0]) < 400) {
                        window["checkListRowList_" + i].setAttribute("class", "row my-2");
                    } else {
                        window["checkListRowList_" + i].setAttribute("class", "row");
                    }
                    window["checkListRowList_" + i].setAttribute("id", baseName + '_checkListRowList' + i);
                    document.getElementById(baseName + "_checkList").append(window["checkListRowList_" + i]);

                    //add checkListColItemLeft to checkListRowItem
                    window["checkListColItemLeft_" + i] = document.createElement('div');
                    window["checkListColItemLeft_" + i].setAttribute("class", "col");
                    window["checkListColItemLeft_" + i].setAttribute("id", baseName + "_" + arrayCheckList[i].split(".")[0].replace(/\s/g, '') + "_list");
                    if (arrayCheckList[i].split(".")[0].replace(/\s/g, '') === "Duration") {
                        window["checkListColItemLeft_" + i].innerHTML = "<i class='fas font-1.5em mr-3' aria-hidden='true'></i><span class='text-font'>" + arrayCheckList[i] + ": <span id='" + baseName + "_" + arrayCheckList[i] + "_spanHandler' class='no-border'>0s, 0ms</span></span>";
                    } else {
                        window["checkListColItemLeft_" + i].innerHTML = "<i class='fas font-1.5em mr-3' aria-hidden='true'></i><span class='text-font'>" + arrayCheckList[i] + "</span>";
                    }

                    document.getElementById(baseName + '_checkListRowList' + i).append(window["checkListColItemLeft_" + i]);

                    //add checkListColItemRight to checkListRowItem
                    window["checkListColItemRight_" + (i + 1)] = document.createElement('div');
                    window["checkListColItemRight_" + (i + 1)].setAttribute("class", "col");
                    window["checkListColItemRight_" + (i + 1)].setAttribute("id", baseName + "_" + arrayCheckList[(i + 1)].split(".")[0].replace(/\s/g, '') + "_list");

                    if (arrayCheckList[(i + 1)].split(".")[0].replace(/\s/g, '') === "Filesize") {
                        window["checkListColItemRight_" + (i + 1)].innerHTML = "<i class='fas font-1.5em mr-3' aria-hidden='true'></i><span class='text-font' id='" + baseName + "_" + arrayCheckList[(i + 1)].split(".")[0].replace(/\s/g, '') + "_spanHandler' class='no-border'>" + arrayCheckList[i + 1] + ": <span id='" + baseName + "_forSize_" + arrayCheckList[(i + 1)].split(".")[0].replace(/\s/g, '') + "'></span></span>";
                    } else if (arrayCheckList[(i + 1)].split(".")[0].replace(/\s/g, '') === "MaxDuration") {
                        window["checkListColItemRight_" + (i + 1)].innerHTML = "<i class='fas font-1.5em mr-3' aria-hidden='true'></i><span class='text-font' id='" + baseName + "_" + arrayCheckList[(i + 1)].split(".")[0].replace(/\s/g, '') + "_spanHandler' class='no-border'>" + arrayCheckList[i + 1] + ": <span>15s</span></span>";
                    } else {
                        window["checkListColItemRight_" + (i + 1)].innerHTML = "<i class='fas font-1.5em mr-3' aria-hidden='true'></i><span class='text-font' id='" + baseName + "_" + arrayCheckList[(i + 1)].split(".")[0].replace(/\s/g, '') + "_spanHandler'>" + arrayCheckList[i + 1] + "</span>";
                    }
                    document.getElementById(baseName + '_checkListRowList' + i).append(window["checkListColItemRight_" + (i + 1)]);

                }
            }

            //add viewResultList in checkResult
            let viewResultList = document.createElement('div');
            viewResultList.setAttribute("id", baseName + "_errorList");
            viewResultList.setAttribute("class", "listErrors mt-2 p-3")
            viewResultList.innerHTML = "<ol id='" + baseName + "_listOfErrors' class='listOfErrors'></ol>";
            document.getElementById(baseName + "_checkResult").append(viewResultList);

            //adjust Class
            if (Number(baseName.split('-')[0].split('x')[0]) > 400) {
                $("#" + baseName + "_creativeChecklistContainer").removeClass("px-5");
                $("#" + baseName + "_creativeChecklistContainer").addClass('mx-5');
            }

            if (Number(baseName.split('-')[0].split('x')[0]) > 400) {
                $("<div class='w-100'></div>").insertAfter("#" + baseName + "_preview");
            }

            $("#" + baseName + "_iframeElement").on('load', function() {
                initCheckList(this, baseName);
            });
        }
    }
    //pagination
    pagination();
}

const pagination = () => {
    let items = $(".list-wrapper .list-item");
    let numItems = items.length;
    let perPage = 1;
    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function(pageNumber) {
            let showFrom = perPage * (pageNumber - 1);
            let showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
}

$(function() {
    $('#shareableLink').tooltip({
        placement: 'right',
        trigger: 'click'
    });

    $('#shareableLink').on("click", function() {
        document.getElementById("copyTarget").innerHTML = window.location.origin + window.location.pathname + window.location.search;
        copyToClipboard('#copyTarget');
        setTimeout(function() {
            $('#shareableLink').tooltip('hide')
        }, 1000)
    });

    $("#backToHome").on("click", function() {
        window.location.replace(window.location.origin + window.location.pathname);
    })
})


function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}