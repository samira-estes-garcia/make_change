function makeChange() {

    let formVal = $("#total").val;
    console.log(formVal); 
    let totalCents = (formVal*100)

    // number of coins to make a dollar
    let numQ = totalCents/25;
    let numD = totalCents/10;
    let numN = totalCents/5;
    let numP = totalCents/100;

    //number of combinations
    count = 0;

    for(let q = 0; q <= numQ; q++){

        for(let d = 0; d <= numD; d++){
    
            for(let n = 0; n <= numN; n++){
    
                for(let p = 0; p <= numP; p++){
    
                    if( ((q * 25) + (d * 10) + (n * 5) + p) == totalCents ){
    
                        console.log("Q: "+q+" D: "+d+" N: "+n+" P: "+p );
                        count++;
                    }
                }
            }
        }
    }
}
