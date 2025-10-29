function run(responseTimes) {
  
let average = responseTimes[0];
    let count = 1;
    for(let i = 1; i<responseTimes.length - 1; i++){
        console.log(responseTimes[i])
        if(responseTimes[i] > average){
           count++ 
        }
        average =  (average + responseTimes[i]) / 2
        console.log(average,'average is here')
    }
  console.log(count,'count is here')
}

const res = run([100,200,150,300])
