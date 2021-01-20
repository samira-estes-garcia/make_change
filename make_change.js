$("#form-usd").submit(function(event){

    //clear console in case user has submitted before, prevent default submission, clear error messages
    console.clear();
    event.preventDefault();
    $(".error").hide();
    
    //capture form amount submission and convert to cents
    let formVal = $("#total").val();
    console.log(`Value you entered: $${formVal}`); 
    let totalCents = (formVal*100)
    console.log(`Value converted to cents: ${totalCents}¢`)
    //debugger;

    //display error if formVal is invalid aka negative number or NaN
     if (formVal < 0 || isNaN(formVal)) {
            $(".usd-error").html(`<p class="error">Please enter a valid positive number</p>`)
            // $("#form-usd").trigger("reset")
            console.log(`Please change this value to a valid number: ${formVal}`);
    }

    // number of coins to make a dollar
    let numQ = totalCents/25;
    let numD = totalCents/10;
    let numN = totalCents/5;
    let numP = totalCents;

    //num coins to start with
    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;

    //array to push all combos into
    let coinList = [];

    //number of combinations
    count = 0;

    //function to intialize types of coins
    function coinCount(quarter, dime, nickel, penny) {
        this.quarter = quarter;
        this.dime = dime;
        this.nickel = nickel;
        this.penny = penny;
    } 

    //loop through each type of coin to see if coins needed to make a dollar is reached
    //increment and move to next coin
    for(let q = 0; q <= numQ; q++){
         for(let d = 0; d <= numD; d++){
            for(let n = 0; n <= numN; n++){
              for(let p = 0; p <= numP; p++){
                    if(((q*25) + (d*10) + (n*5) + p ) == totalCents) {
                        //set individual combo to a coin count obj, push into coinList, increment count
                        let combo = new coinCount(q, d, n, p);
                        coinList.push(combo);
                        count++;
                      }
                }
            }
        }
    }
    //console.log count and console.table coinList to format it in a readable way
    console.log(`Number of Combinations / Count: ${count}`);
    console.table(coinList)
});

$("#form-anarchy").submit(function(event) {
    console.clear();
    event.preventDefault();

    //capture the form submission
    let currency = $('#currency').val();
    console.log(currency); 
    let currencyArr = currency.split(",");
    console.log(currencyArr);
})