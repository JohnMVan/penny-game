//examining local storage to see if there's anything in the counters, then setting the starting count to that if there is.

let headCount = 0;
if (localStorage.getItem("headCount") !== null){
    headCount = parseInt(localStorage.getItem("headCount"));
}

let tailCount = 0;
if (localStorage.getItem("tailCount") !== null){
    tailCount = parseInt(localStorage.getItem("tailCount"));
}

let totalCount = 0;

scoreUpdate()

//ran after we've determined if t here's local stoage.  this function recaluctes the grid.


document.querySelector("#flipButton").addEventListener("click", 
function(){

    let isHeads = Math.random() < 0.5;
    
    if (isHeads){
        console.log("It's heads", headCount)
        document.querySelector("img").src = "./assets/images/penny-heads.jpg"
        document.querySelector("#outCome").textContent = "You Rolled Heads!"
        
        headCount++

    } else {
        console.log("It's tails", tailCount)
        document.querySelector("img").src = "./assets/images/penny-tails.jpg"
        document.querySelector("#outCome").textContent = "You Rolled Tails!"

        tailCount++
    }

    //storing the data in local storage....dev tools/application/local storage.  need to maek sure you put a "key" name and value.
    localStorage.setItem("headCount", headCount);
    localStorage.setItem("tailCount", tailCount);

    scoreUpdate()
})

    

    // all of these lines of code are being done on page load
    function scoreUpdate () {
      
        totalCount = headCount + tailCount;
        
        let headPercentage = 0;
        let tailPercentage = 0;
       
        if (totalCount > 0){
            headPercentage = Math.round(headCount/totalCount * 100);
            tailPercentage = Math.round(tailCount/totalCount * 100);
        }
        
        document.querySelector("#headsCounter").textContent = headCount;
        document.querySelector("#tailsCounter").textContent = tailCount;
        document.querySelector("#headPerc").textContent = headPercentage + "%";
        document.querySelector("#tailPerc").textContent = tailPercentage + "%";
    }
    
    //call function clearBoard, then reloads the page to clear the values from the screen.
    document.querySelector("#clearButton").addEventListener('click', function () {
        clearBoard();
        window.location.reload();
    })

    //clear scoreboard
    function clearBoard () {
        localStorage.setItem("headCount", 0);
        localStorage.setItem("tailCount", 0);
    }

