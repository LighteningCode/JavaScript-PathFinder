'use strict'

$(document).ready(function () {

    $("#endPointer").fadeOut();
    $("#darkOverlay").fadeOut();

    var checkingPoints = []
    //Generate a grid of squares 
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

    // idk what this does
    $("body").addClass('h_block');


    $("#reset").click(function (e) { 
        e.preventDefault();
        location.reload();
    });

    // flags
    var start = false;
    var end = false;
    var block = true;
    var clear = false

    // start coordinates
    var startCoord = { x: 0, y: 0 }
    var endCoord = { x: 0, y: 0 }

    // function to get and store the start coordinates in the global variable
    function storeStartCoord(value) {
        startCoord = {
            x: value.x,
            y: value.y
        }
        console.log(startCoord);
    }

    // function to get and store end coordinates in the global variable
    function storeEndCoord(value) {
        endCoord = {
            x: value.x,
            y: value.y
        }
    }

    // function to add class to coordinates
    function AddClassToCoord(coord, className) {
        $(`[data-x="${coord.x}"][data-y="${coord.y}"]`).addClass(className);
    }
    // function to remove class form coordinates
    function removeClassFromCoord(coord, className) {
        $(`[data-x="${coord.x}"]+[data-y="${coord.y}"]`).removeClass(className);
    }

    // this function will just return 0 if any value is below zero
    function preventNegative(value) {
        if (value < 0) {
            return 0;
        } else {
            return value
        }
    }

    var counter = 0; // idk why this is here

    // function to to check if the inputed coordinate is a block or the end
    function checkBlockOrEnd(coord) {
        // if the input is the end return end and then fade the finishing items
        if ($(`[data-x="${coord.x}"][data-y="${coord.y}"]`).hasClass("end")) {
            $("#endPointer").fadeIn();
            $("#darkOverlay").fadeIn();
            return "end"
        };

        // state blocked 
        if ($(`[data-x="${coord.x}"][data-y="${coord.y}"]`).hasClass("block")) {
            return "blocked"
        };

        // state checking
        if ($(`[data-x="${coord.x}"][data-y="${coord.y}"]`).hasClass("checking")) {
            return "checking"
        };

        // if the block is not a checked, end, or blocked coord then then make it a checked block
        if ($(`[data-x="${coord.x}"][data-y="${coord.y}"]`).hasClass("item")) {
            //create a lag with the timeer
            setTimeout(() => {
                removeClassFromCoord(coord, "checking")
                $(`[data-x="${coord.x}"][data-y="${coord.y}"]`).addClass("checked")
            }, 1000);
            return false
        }
    }


    // function to check the northern coodinate
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
        AddClassToCoord(coord, 'checking')
        return coord;
    }

    // function to check the north-estern coodinate
    function checkNE(currentCoord) {
        let coordX = currentCoord.x;
        let coordY = currentCoord.y;
        coordX = preventNegative(coordX - 1)
        coordY = preventNegative(coordY + 1)
        let coord = { x: coordX, y: coordY }
        if (checkBlockOrEnd(coord) == "blocked" || checkBlockOrEnd(coord) == "checking" || checkBlockOrEnd(coord) == "checked") {
            return { x: "blocked", y: "blocked" }
        }
        if (checkBlockOrEnd(coord) == "end") {
            return { x: "end", y: "end" }
        }
        AddClassToCoord(coord, 'checking')
        return coord;

    }

    // function to check the north-western coodinate
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
        AddClassToCoord(coord, 'checking')
        return coord;

    }

    // function to check the southern coodinate
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
        AddClassToCoord(coord, 'checking')
        return coord;

    }

    // function to check the south-eastern coodinate 
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
        AddClassToCoord(coord, 'checking')
        return coord;

    }

    // function to check the south-western coodinate
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
        AddClassToCoord(coord, 'checking')
        return coord;

    }

    // function to check the eastern coodinate
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
        AddClassToCoord(coord, 'checking')
        return coord;

    }

    // function to check the western coodinate
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
        AddClassToCoord(coord, 'checking')
        return coord;

    }

    // remove the current start point used when the user is interracting with the interface
    function removeStart() {
        $(`[data-x="${startCoord.x}"]+[data-y="${startCoord.y}"]`).removeClass('start');
        console.log("startRemoved");
    }

    // remove the current end point used when the user is interracting with the interface
    function removeEnd() {

        $(`[data-x="${endCoord.x}"],[data-y="${endCoord.y}"]`).removeClass('end');
        console.log("endRemoved");
    }


    function selectEndCoord(newCoord) {
        $(selector).removeClass("start");
    }

    // when clicked the body element will change the color of blocks when hovered over
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

    // when clicked the body element will change the color of blocks when hovered over
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

    // when clicked the body element will change the color of blocks when hovered over
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

    // when clicked the body element will change the color of blocks when hovered over
    $("#clearbtn").click(function (e) {
        e.preventDefault();

        clear = true;
    });

    // based on which type of button is activated at a particular time perform a different function
    function activateClicks() {

        $('#myTable td.item').click(function (e) {

            // if the current coord does not have the class start and start is activated
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

            // if the current coord does not have the class "block" and "block" is activated
            if (!$(this).hasClass("block") && block) {
                $(this).addClass("block");
                $(this).removeClass('start');
                $(this).removeClass('end');
                console.log("block set");
            }

            // if the current coord does not have the class end and end is activated
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

    // when a coord is clicked and held down
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

        if (start == true) {
            startSound()
        }
        if (end == true) {
            endSound()
        }
    })

    // listen and play click events
    window.addEventListener('mouseup', function () {
        mouseIsDown = false;
        console.log("Mouse is up");
        $("#myTable td.item").off();
        activateClicks()

        $("td").mouseenter(function () {
            playHoverUI()
        });
        $("td").mouseout(function () {
            stopHoverUI()
        });
    })

    var infected = new Set();

    var infectedCount = 0

    function asyncMethod(coord) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                //for each one check to see if they are not infected
                let N = checkN(coord)
                let NE = checkNE(coord)
                let NW = checkNW(coord)

                let S = checkS(coord)
                let SE = checkSE(coord)
                let SW = checkSW(coord)

                let E = checkE(coord)

                let W = checkW(coord)

                let currentInfected = [N, NE, NW, S, SE, SW, W, E];

                let l;
                let count = 0;
                // loop over the currentInfected and add them to the infected
                for (l = 0; l < currentInfected.length; l++) {
                    const crd = currentInfected[l];
                    
                    if (crd.x == "blocked" || crd.y == "blocked") {
                        resolve()
                        continue;
                    } else if (crd.x == "end" || crd.y == "end") {
                        reject(crd)
                    } else {
                        if (!infected.has(JSON.stringify(crd))) {
                            infected.add(JSON.stringify(crd));
                        }
                        console.log(infected);
                        
                        infectedCount += 1;
                        resolve()
                    }
                }

            }, 100);
        })
    }

    var mainCounter = 0;

    async function main() {
        for (const coordinate of infected) {
            await asyncMethod(JSON.parse(coordinate)).then(function (data) {
                console.log(data);

                if (data === 7) {
                    console.log("Program will continue");
                    main();
                }

            }, function (data) {
                console.log(`Program has stopped end coordinate is ${data}`);
                throw new Error("Completed");
            });
            console.log(infectedCount);
            if (infectedCount > 250) {
                throw new Error("Fail")
            }
        }

 
    }




  



    $("#playbtn").click(function (e) {
        e.preventDefault();
        infected.add(JSON.stringify(startCoord))

        main();

        $("#stopBtn").click(function (e) {
            e.preventDefault();
            throw new Error("Completed")
        });

    });

    $("td").mouseenter(function () {
        playHoverUI()
    });
    $("td").mouseout(function () {
        stopHoverUI()
    });






    function playHoverUI(soundObj) {
        var sound = document.getElementById("hoverTD")
        sound.play()
    }

    function stopHoverUI() {
        var sound = document.getElementById("hoverTD")
        sound.pause()
        sound.currentTime = 0
    }


    function startSound() {
        var sound = document.getElementById("startSFX")
        sound.play()
    }
    function stop_startSound() {
        var sound = document.getElementById("startSFX")
        sound.pause()
        sound.currentTime = 0
    }

    function endSound() {
        var sound = document.getElementById("endSFX")
        sound.play()
    }
    function stop_endSound() {
        var sound = document.getElementById("endSFX")
        sound.play()
    }
});