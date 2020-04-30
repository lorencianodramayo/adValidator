function getOverAllProgress(baseName) {
    let getDivOBJ = document.getElementById(baseName + "_checkList").querySelectorAll(".fa-check").length;
    console.log
    document.getElementById(baseName + "_progress").setAttribute('data-percent', Number(getDivOBJ + "0"));
    document.getElementById(baseName + "_progress").setAttribute('data-text', Number(getDivOBJ + "0") + '%');
    $('#' + baseName + '_progress').circliful();
    //progress circlit
    $(".preloader").fadeOut(1000, function(){
    	$("#resultHandler").fadeIn(1000);
    });
}