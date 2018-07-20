
$(document).ready(function() {
//make funtion that randomly makes a number on page load between 19-120 and assign to target score div
    let randomNumber= 0;
    
    //variable for "Your Score" 
    let myScore = 0;

    let targetScore = () => {
        randomNumber =  Math.floor((Math.random() *101) +19);
            console.log(randomNumber);
            //assign ranomd number to target score div inside fucntion
            $('#targetScore').html(randomNumber);
    };//closes targetScore

targetScore();

    let addPuppies = () => {
//append puppy images to puupy div 
//add puppies links via jcript
        let dataNumber; 
        $("#puppies").html("")//clears out html before new puppies are added
        for (let i = 1; i < 5; i++) {
        dataNumber = Math.floor((Math.random() * 11) +1);    
       
        $('#puppies').append('<img src="assets/' + i +'.jpg" alt="Puppie' + i + '"height="200" width="275" class="pupimage" data-number="' + dataNumber + '">');
        
        console.log(dataNumber);
        }//closes
    }//closes puppy function
    
    addPuppies();///when game is over call this function again
    
//function to populate "Your Score div"
    let yourScorePopulater = () => {
        $("#yourScore").html(myScore);
    }//closes yourscore function

    yourScorePopulater();

// function that when you click on pic it will update "myScore "and rerun yourScorePopulator 
    $(document).on('click', '.pupimage', function() {
    // $('.pupimage').on('click', function() {
        console.log($(this).attr("data-number"));
        let thisPuppyNumber = parseInt($(this).attr("data-number"));
        myScore = myScore + thisPuppyNumber;
        yourScorePopulater();
        checkScore();
    });

//cap off myScore div so it does not exceed target score div

let checkScore = () => {
    if (myScore === randomNumber) {
        yourWins++;
        youAreAWinner();
        addPuppies();
        targetScore();
        myScore = 0;
        yourScorePopulater();
        
    } else if (myScore > randomNumber) {
        yourLoses++;
        youAreALoser();
        addPuppies();
        targetScore();
        myScore = 0;
        yourScorePopulater();

    }
};


//change winner/looser div
    let yourWins = 0;
    let yourLoses = 0; 

    let youAreAWinner = () => {
        $("#wins").html(yourWins);
    }//closes yourscore function
        youAreAWinner();

    let youAreALoser = () => {
        $("#losses").html(yourLoses);
    }//closes yourscore function
        youAreALoser();
     
// click puppy image to add value to "your score"
    // let yourScore = 0;

    // $('.Puppie1').on('click', () => {
    //     yourScore = yourScore + "data-number";
    //     console.log(yourScore);
    // })//closes on click






});//closes doc.ready

//datatype plus random number

        // function renderCrystals() {
        //     for (var key in crystals) {
        //       var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
        //       var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
        //       crystalDiv.append(crystalImg);
        //       $("#crystal-area").append(crystalDiv);
        //     }
        //   }