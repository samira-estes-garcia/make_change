$("#form").submit(function(event){
    console.clear();
    event.preventDefault();
    
    //capture form amount submission and convert to cents
    let formVal = $("#total").val();
    console.log(formVal); 
    let totalCents = (formVal*100)
    console.log(totalCents)

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

    for(let q = 0; q <= numQ; q++){
         for(let d = 0; d <= numD; d++){
            for(let n = 0; n <= numN; n++){
              for(let p = 0; p <= numP; p++){
                    if(((q*25) + (d*10) + (n*5) + p ) == totalCents) {
                        let combo = new coinCount(q, d, n, p);
                        coinList.push(combo);
                        count++;
                      }
                }
            }
        }
    }
    console.log(`Count: ${count}`);
    console.table(coinList)
});