$(document).ready(function () {

    $("#endPointer").fadeOut();

    var checkingPoints = []

    const body = document.body;
    for (var i = 0; i < 13; i++) {
        let row = `<tr>`;

        for (let j = 0; j < 18; j++) {
            let col = `<td data-x="${i}" data-y="${j}" class="item">${i},${j}</td>`
            row += col;
        }

        row += `</tr>`
        $("#myTable").append(row);
    }

    $("body").addClass('h_block');


    var start = false;
    var end = false;
    var block = true;
    var clear = false


    var startCoord = { x: 0, y: 0 }
    var endCoord = { x: 0, y: 0 }

    function storeStartCoord(value) {
        startCoord = {
            x: value.x,
            y: value.y
        }
        console.log(startCoord);
    }
    function storeEndCoord(value) {
        endCoord = {
            x: value.x,
            y: value.y
        }
    }

    function AddClassToCoord(coord, className) {
        $(`[data-x="${coord.x}"][data-y="${coord.y}"]`).addClass(className);
    }
    function removeClassFromCoord(coord, className) {
        $(`[data-x="${coord.x}"]+[data-y="${coord.y}"]`).removeClass(className);
    }

    function preventNegative(value) {
        if (value < 0) {
            return 0;
        } else {
            return value
        }
    }

    var counter = 0;

    function checkBlockOrEnd(coord) {
        if ($(`[data-x="${coord.x}"][data-y="${coord.y}"]`).hasClass("end")) {
            $("#endPointer").fadeIn();
            return "end"
        };
        if ($(`[data-x="${coord.x}"][data-y="${coord.y}"]`).hasClass("block")) {
            return "blocked"
        };
        if ($(`[data-x="${coord.x}"][data-y="${coord.y}"]`).hasClass("checking")) {
            return "checking"
        };
        if ($(`[data-x="${coord.x}"][data-y="${coord.y}"]`).hasClass("item")) {
            //create a lag with the timeer
            setTimeout(() => {
                removeClassFromCoord(coord, "checking")
                $(`[data-x="${coord.x}"][data-y="${coord.y}"]`).addClass("checked")
            }, 1000);
            return false
        }
    }

    function checkN(currentCoord) {
        let coordX = currentCoord.x
        let coordY = currentCoord.y
        coordX = preventNegative(coordX - 1)
        let coord = { x: coordX, y: coordY }
        if (checkBlockOrEnd(coord) == "blocked" || checkBlockOrEnd(coord) == "checking" || checkBlockOrEnd(coord) == "checked") {
            return { x: "blocked", y: "blocked" }
        }
        if (checkBlockOrEnd(coord) == "end") {
            return { x: "end", y: "end" }
        }
        console.log(arguments.callee.name, coord.x, coord.y);
        AddClassToCoord(coord, 'checking')
        return coord;
    }
    function checkNE(currentCoord) {
        let coordX = currentCoord.x
        let coordY = currentCoord.y
        coordX = preventNegative(coordX - 1)
        coordY = preventNegative(coordY + 1)
        let coord = { x: coordX, y: coordY }
        if (checkBlockOrEnd(coord) == "blocked" || checkBlockOrEnd(coord) == "checking" || checkBlockOrEnd(coord) == "checked") {
            return { x: "blocked", y: "blocked" }
        }
          if (checkBlockOrEnd(coord) == "end") {
            return { x: "end", y: "end" }
        }
        console.log(arguments.callee.name, coord.x, coord.y);
        AddClassToCoord(coord, 'checking')
        return coord;

    }
    function checkNW(currentCoord) {
        let coordX = currentCoord.x
        let coordY = currentCoord.y
        coordX = preventNegative(coordX - 1)
        coordY = preventNegative(coordY - 1)
        let coord = { x: coordX, y: coordY }
        if (checkBlockOrEnd(coord) == "blocked" || checkBlockOrEnd(coord) == "checking" || checkBlockOrEnd(coord) == "checked") {
            return { x: "blocked", y: "blocked" }
        }
          if (checkBlockOrEnd(coord) == "end") {
            return { x: "end", y: "end" }
        }
        console.log(arguments.callee.name, coord.x, coord.y);
        AddClassToCoord(coord, 'checking')
        return coord;

    }
    function checkS(currentCoord) {

        let coordX = currentCoord.x
        let coordY = currentCoord.y
        coordX = preventNegative(coordX + 1)
        let coord = { x: coordX, y: coordY }
        if (checkBlockOrEnd(coord) == "blocked" || checkBlockOrEnd(coord) == "checking" || checkBlockOrEnd(coord) == "checked") {
            return { x: "blocked", y: "blocked" }
        }
          if (checkBlockOrEnd(coord) == "end") {
            return { x: "end", y: "end" }
        }
        console.log(arguments.callee.name, coord.x, coord.y);
        AddClassToCoord(coord, 'checking')
        return coord;

    }
    function checkSE(currentCoord) {
        let coordX = currentCoord.x
        let coordY = currentCoord.y
        coordX = preventNegative(coordX + 1)
        coordY = preventNegative(coordY + 1)
        let coord = { x: coordX, y: coordY }
        if (checkBlockOrEnd(coord) == "blocked" || checkBlockOrEnd(coord) == "checking" || checkBlockOrEnd(coord) == "checked") {
            return { x: "blocked", y: "blocked" }
        }
          if (checkBlockOrEnd(coord) == "end") {
            return { x: "end", y: "end" }
        }
        console.log(arguments.callee.name, coord.x, coord.y);
        AddClassToCoord(coord, 'checking')
        return coord;

    }
    function checkSW(currentCoord) {
        let coordX = currentCoord.x
        let coordY = currentCoord.y
        coordX = preventNegative(coordX + 1)
        coordY = preventNegative(coordY - 1)
        let coord = { x: coordX, y: coordY }
        if (checkBlockOrEnd(coord) == "blocked" || checkBlockOrEnd(coord) == "checking" || checkBlockOrEnd(coord) == "checked") {
            return { x: "blocked", y: "blocked" }
        }
          if (checkBlockOrEnd(coord) == "end") {
            return { x: "end", y: "end" }
        }
        console.log(arguments.callee.name, coord.x, coord.y);
        AddClassToCoord(coord, 'checking')
        return coord;

    }
    function checkE(currentCoord) {
        let coordX = currentCoord.x
        let coordY = currentCoord.y
        coordY = preventNegative(coordY + 1)
        let coord = { x: coordX, y: coordY }
        if (checkBlockOrEnd(coord) == "blocked" || checkBlockOrEnd(coord) == "checking" || checkBlockOrEnd(coord) == "checked") {
            return { x: "blocked", y: "blocked" }
        }
          if (checkBlockOrEnd(coord) == "end") {
            return { x: "end", y: "end" }
        }
        console.log(arguments.callee.name, coord.x, coord.y);
        AddClassToCoord(coord, 'checking')
        return coord;

    }
    function checkW(currentCoord) {
        let coordX = currentCoord.x
        let coordY = currentCoord.y
        coordY = preventNegative(coordY - 1)
        let coord = { x: coordX, y: coordY }
        if (checkBlockOrEnd(coord) == "blocked" || checkBlockOrEnd(coord) == "checking" || checkBlockOrEnd(coord) == "checked") {
            return { x: "blocked", y: "blocked" }
        }
          if (checkBlockOrEnd(coord) == "end") {
            return { x: "end", y: "end" }
        }
        console.log(arguments.callee.name, coord.x, coord.y);
        AddClassToCoord(coord, 'checking')
        return coord;

    }


    function removeStart() {
        $(`[data-x="${startCoord.x}"]+[data-y="${startCoord.y}"]`).removeClass('start');
        console.log("startRemoved");
    }

    function removeEnd() {
        $(`[data-x="${endCoord.x}"],[data-y="${endCoord.y}"]`).removeClass('end');
        console.log("endRemoved");
    }


    function selectEndCoord(newCoord) {
        $(selector).removeClass("start");
    }

    // console.log($(window).width() / 10);

    $("#startbtn").click(function (e) {
        e.preventDefault();
        start = true;
        end = false;
        block = false;
        clear = false;
        if ($(body).hasClass('h_end')) {
            body.classList.replace("h_end", "h_start")
        }
        if ($(body).hasClass('h_block')) {
            body.classList.replace("h_block", "h_start")
        }


    });
    $("#endbtn").click(function (e) {
        e.preventDefault();
        start = false;
        end = true;
        block = false;
        clear = false;
        if ($(body).hasClass('h_start')) {
            body.classList.replace("h_start", "h_end")

        }
        if ($(body).hasClass('h_block')) {
            body.classList.replace("h_block", "h_end")
        }

    });
    $("#blockbtn").click(function (e) {
        e.preventDefault();
        start = false;
        end = false;
        block = true;
        clear = false;
        if ($(body).hasClass('h_end')) {
            body.classList.replace("h_end", "h_block")
        }
        if ($(body).hasClass('h_start')) {
            body.classList.replace("h_start", "h_block")
        }
    });
    $("#clearbtn").click(function (e) {
        e.preventDefault();

        clear = true;
    });

    function activateClicks() {

        $('#myTable td.item').click(function (e) {


            if (!$(this).hasClass("start") && start) {

                removeStart();
                let x = $(this).attr("data-x");
                let y = $(this).attr("data-y");
                let value = { x: parseInt(x), y: parseInt(y) }
                storeStartCoord(value)

                $(this).addClass("start");
                $(this).removeClass('block');
                $(this).removeClass('end');
                console.log("start set");

            }

            if (!$(this).hasClass("block") && block) {
                $(this).addClass("block");
                $(this).removeClass('start');
                $(this).removeClass('end');
                console.log("block set");
            }

            if (!$(this).hasClass("end") && end) {
                removeEnd()
                let x = $(this).attr("data-x");
                let y = $(this).attr("data-y");
                let value = { x: x, y: y }
                storeEndCoord(value)

                $(this).addClass("end");
                $(this).removeClass('start');
                $(this).removeClass('block');
                console.log("end set");
            }

            if (($(this).hasClass("end") || $(this).hasClass("start") || $(this).hasClass("block")) && clear) {
                $(this).removeClass("end");
                $(this).removeClass('start');
                $(this).removeClass('block');
                console.log("clear block");
            }
        })

    }


    var mouseIsDown = false;

    window.addEventListener('mousedown', function () {
        mouseIsDown = true;

        setTimeout(() => {
            if (mouseIsDown) {
                console.log("Mouse is down");
                $("#myTable td.item").hover(function () {
                    // over
                    if (!$(this).hasClass("block") && block) {
                        $(this).addClass("block");
                        $(this).removeClass('start');
                        $(this).removeClass('end');
                        console.log("block");
                    }

                    if (($(this).hasClass("end") || $(this).hasClass("start") || $(this).hasClass("block")) && clear) {
                        $(this).removeClass("end");
                        $(this).removeClass('start');
                        $(this).removeClass('block');
                        console.log("clear");
                    }
                }, function () {
                    // out
                }
                );
            }
        }, 50);
    })

    window.addEventListener('mouseup', function () {
        mouseIsDown = false;
        console.log("Mouse is up");
        $("#myTable td.item").off();
        activateClicks()
    })

    var infected = []
    var newInfected = [];

    $("#playbtn").click(function (e) {
        e.preventDefault();

        infected[0] = startCoord

      


        var newInfectedCounter = 0

        var el = true

        var innerLoop;
    
       var loop = setInterval(() => {
            while (el) {
                el = false
    
               innerLoop = setTimeout(() => {
    
                    console.log("copying");
                    infected = [] //empty array
                    //copy contents of newInfected to the infected and overwrite it
                    for (let k = 0; k < newInfected.length; k++) {
                        console.log(k);
                        infected[k] = newInfected[k]
                        console.log("copying");
        
                    }
                    console.log(newInfected);
                    console.log(infected);
                    newInfectedCounter = 0
    
                    el = true
                }, 1000);
    
                for (let i = 0; i < infected.length; i++) {
    
                    //for each one check to see if they 
                    N = checkN(infected[i])
                    NE = checkNE(infected[i])
                    NW = checkNW(infected[i])
        
                    S = checkS(infected[i])
                    SE = checkSE(infected[i])
                    SW = checkSW(infected[i])
        
                    E = checkE(infected[i])
        
                    W = checkW(infected[i])


                    //if end has been found stop loop
                    if (N.x == "end" || N.y == "end") {
                        clearInterval(loop)
                    }
                    if (NE.x == "end" || NE.y == "end") {
                        clearInterval(loop)
                    }
                    if (NW.x == "end" || NW.y == "end") {
                        clearInterval(loop)
                    }
                    if (S.x == "end" || S.y == "end") {
                        clearInterval(loop)
                    }
                    if (SE.x == "end" || SE.y == "end") {
                        clearInterval(loop)
                    }
                    if (SW.x == "end" || SW.y == "end") {
                        clearInterval(loop)
                    }
                    if (E.x == "end" || E.y == "end") {
                        clearInterval(loop)
                    }
                    if (W.x == "end" || W.y == "end") {
                        clearInterval(loop)
                    }
                   
    
                    //add the new infected to the new array to be added.
                    if (N.x != "blocked" || N.y != "blocked") {
                        newInfected[newInfectedCounter] = N
                        newInfectedCounter++
                    }
                    if (NE.x != "blocked" || NE.y != "blocked") {
                        newInfected[newInfectedCounter] = NE
                        newInfectedCounter++
                    }
                    if (NW.x != "blocked" || NW.y != "blocked") {
                        newInfected[newInfectedCounter] = NW
                        newInfectedCounter++
                    }
                    if (S.x != "blocked" || S.y != "blocked") {
                        infected[newInfectedCounter] = S
                        newInfectedCounter++
                    }
                    if (SE.x != "blocked" || SE.y != "blocked") {
                        newInfected[newInfectedCounter] = SE
                        newInfectedCounter++
                    }
                    if (SW.x != "blocked" || SW.y != "blocked") {
                        newInfected[newInfectedCounter] = SW
                        newInfectedCounter++
                    }
                    if (E.x != "blocked" || E.y != "blocked") {
                        newInfected[newInfectedCounter] = E
                        newInfectedCounter++
                    }
                    if (W.x != "blocked" || W.y != "blocked") {
                        newInfected[newInfectedCounter] = W
                        newInfectedCounter++
                    }
                }
    
            }
        }, 1000);
    
    
    



        $("#stopBtn").click(function (e) {
            e.preventDefault();
            clearInterval(loop)
        });







    });

});