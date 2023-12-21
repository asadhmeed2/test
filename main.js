const MAX_DAYS_IN_MONTH_FIRST_DIGIT = 3;
const MONTH_IN_YEAR=12;
const FIRST_MONTH_IN_YEAR=1;
const FIRST_MONTH_IN_YEAR_WITH_TWO_DIGIT=10;

let count =0;

for(let i =FIRST_MONTH_IN_YEAR; i<=MONTH_IN_YEAR; i++){
    if(i<MAX_DAYS_IN_MONTH_FIRST_DIGIT){
        count++
    }
    if(i >= FIRST_MONTH_IN_YEAR_WITH_TWO_DIGIT){
        count++
    }
}

console.log(count);