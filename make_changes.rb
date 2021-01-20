def make_change 
    penny = 1
    nickel = 1
    dime = 1 
    quarter = 1
    count = 0
  
    while penny = (0..100) do 
      while nickel = (0..20) do
        while dime = (0..10) do
          while quarter = (0..4) do 
            if (penny + nickel * 5 + dime * 10 + quarter * 25) = 100
              puts "#{penny} pennies" + "#{nickel} nickels" + "#{dime} dimes" + "#{quarter} quarters"
              count = count + 1
            end
          end
        end
      end
    end
    puts "#{count} ways to make a dollar"
  end
  
  make_change

  def make_change 
    penny = (0<=>100)
    nickel = (0<=>20)
    dime = (0<=>10)
    quarter = (0<=>4)
    count = 0
    if (penny + nickel * 5 + dime * 10 + quarter * 25) = 100
              puts "#{penny} pennies" + "#{nickel} nickels" + "#{dime} dimes" + "#{quarter} quarters"
              count = count + 1 
    end
    puts "#{count} ways to make a dollar"
  end
  
  make_change





  JS working

  let aq = 100/25;
  let ad = 100/10;
  let an = 100/5;
  let ap = 100;

  for(let q=0; q<= aq; q++){

      for(let d=0; d<= ad; d++){

          for(let n=0;n<= an; n++){

              for(let p=0;p<=ap; p++){

                  if(((q*25) + (d*10) + (n*5) + p ) == 100){

                      console.log("Q: "+q+" D: "+d+" N: "+n+" P: "+p );

                  }
              }
          }
      }
  }

  #with count
  let aq = 100/25;
  let ad = 100/10;
  let an = 100/5;
  let ap = 100;
  let count = 0;

  for(let q=0; q<= aq; q++){

      for(let d=0; d<= ad; d++){

          for(let n=0;n<= an; n++){

              for(let p=0;p<=ap; p++){

                  if(((q*25) + (d*10) + (n*5) + p ) == 100){

                      console.log("Q: "+q+" D: "+d+" N: "+n+" P: "+p );
                      count++;

                  }
              }
          }
      }
  }
  console.log(count);