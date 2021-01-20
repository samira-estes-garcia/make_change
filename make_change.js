//handle form submission for first form
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

    // number of coins to make change for the formVal
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

//handle form submission for second form
$("#form-anarchy").submit(function(event) {
    console.clear();
    event.preventDefault();
    $(".error").hide();

    //capture the form submission for currencies
    let currency = $('#currency').val();
    console.log(currency); 
    let currencyArr = currency.split(",");
    console.log(currencyArr);
    console.log(currencyArr.length);

    //display error if currency input is invalid
    //given more time I would make sure the inputs were string, num, string, num, etc
    if (5 <= currencyArr.length <= 9) {
        $('.currency-error').html(`<p class="error">Please enter your currencies and their worth in the proper format`)
    }

    //capture form submission for amount to get change for, convert to "cents"
    let total = $("#currency-amount").val();
    totalCents = (total*100);
    //console.log(total);

    //display error if formVal is invalid aka negative number or NaN
    if (total < 0 || isNaN(total)) {
        $(".currency-amount-error").html(`<p class="error">Please enter a valid positive number</p>`)
        // $("#form-usd").trigger("reset")
        console.log(`Please change this value to a valid number: ${total}`);
    }

    //capture info from currencyArr
    currencyArr.length
    let currOneName = currencyArr[0];
    let currOneVal = currencyArr[1];
    let currTwoName = currencyArr[2];
    let currTwoVal = currencyArr[3];
    let currThreeName = currencyArr[4];
    let currThreeVal = currencyArr[5];
    let currFourName = currencyArr[6];
    let currFourVal = currencyArr[7];
    let currFiveName = currencyArr[8];
    let currFiveVal = currencyArr[9];

    // console.log(`${currOneName} x ${currOneVal} = 1 unit`);

    //how much is each type of currency worth? divide 1 unit by the value, multiply by 100, divide totalCents by worth
    let currOneWorth = (1/currOneVal)*100;
    currOneWorth = currOneWorth.toFixed(2);
    //console.log(`Currency One is worth: ${currOneWorth} of a unit`);
    let numCurrOne = totalCents/currOneWorth; 

    let currTwoWorth = (1/currTwoVal)*100;
    currTwoWorth = currTwoWorth.toFixed(2);
    //console.log(`Currency Two is worth: ${currTwoWorth} of a unit`);
    let numCurrTwo = totalCents/currTwoWorth; 

    let currThreeWorth = (1/currThreeVal)*100;
    currThreeWorth = currThreeWorth.toFixed(2);
    //console.log(`Currency Three is worth: ${currThreeWorth} of a unit`);
    let numCurrThree = totalCents/currThreeWorth; 

    let currFourWorth = (1/currFourVal)*100;
    currFourWorth = currFourWorth.toFixed(2);
    //console.log(`Currency Four is worth: ${currFourWorth} of a unit`);
    let numCurrFour = totalCents/currFourWorth; 

    let currFiveWorth = (1/currFiveVal)*100;
    currFiveWorth = currFiveWorth.toFixed(2);
    //console.log(`Currency Five is worth: ${currFiveWorth} of a unit`);
    let numCurrFive = totalCents/currFiveWorth; 

    //let num currencies to start with
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;

    //array to push all combos into
    let coinList = [];

    //number of combinations
    count = 0;

    //function to intialize types of coins
    function coinCount(currencyArr, currTwoName, currThreeName, currFourName, currFiveName) {
        this.currOneName = currencyArr;
        this.currTwoName = currTwoName;
        this.currThreeName = currThreeName;
        this.currFourName = currFourName;
        this.currFiveName = currFiveName;
    }

    //loop through each type of currency to see if currency needed to make a unit is reached
    //increment and move to next currency

    if (currencyArr.length == 10) {
        for(let a = 0; a <= numCurrOne; a++){
            for(let b = 0; b <= numCurrTwo; b++){
                for(let c = 0; c <= numCurrThree; c++){
                    for(let d = 0; d <= numCurrFour; d++){
                        for(let e = 0; e <= numCurrFive; e++) {
                            if(((a*currOneWorth) + (b*currTwoWorth) + (c*currThreeWorth) + (d*currFourWorth) + (e*currFiveWorth)) == totalCents) {
                                //set individual combo to a coin count obj, push into coinList, increment count
                                let combo = new coinCount(a, b, c, d, e);
                                coinList.push(combo);
                                count++;
                            }
                        }
                    }
                }
            }
        }
    } else if (currencyArr.length == 8) {
        for(let a = 0; a <= numCurrOne; a++){
            for(let b = 0; b <= numCurrTwo; b++){
                for(let c = 0; c <= numCurrThree; c++){
                    for(let d = 0; d <= numCurrFour; d++){
                        if(((a*currOneWorth) + (b*currTwoWorth) + (c*currThreeWorth) + (d*currFourWorth)) == totalCents) {
                            //set individual combo to a coin count obj, push into coinList, increment count
                            let combo = new coinCount(a, b, c, d);
                            coinList.push(combo);
                            count++;
                        }
                    }
                }
            }
        }
    } else {
        for(let a = 0; a <= numCurrOne; a++){
            for(let b = 0; b <= numCurrTwo; b++){
                for(let c = 0; c <= numCurrThree; c++){
                    if(((a*currOneWorth) + (b*currTwoWorth) + (c*currThreeWorth)) == totalCents) {
                        //set individual combo to a coin count obj, push into coinList, increment count
                        let combo = new coinCount(a, b, c);
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
})