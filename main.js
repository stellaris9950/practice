


let results = ["yes", "no", "maybe"]




function count(){
    let countYes = 0;
    let countNo = 0;
    let countMaybe = 0;
    for ( let i = 0; i < results.length; i++ ) {
        if(results[i] = "yes" ){
          countYes++;
        }
        else if(results[i] = "no" ){
            countNo++;
          }
        else {
            countMaybe++;
        }
    }

    alert(countYes)
    alert(countNo)
    alert(countMaybe)
}


let age = [18,19,20,21,0,1,2,3]

function ageCount(){
    let age18 = 0;
    let age0 = 0;
    for ( let i = 0; i < age.length; i++ ) {
        if(age[i] < 18 ){
          age0++;
        }
        else {
            age18++
        }
    }
    alert(age0);
    alert(age18);
}

\
