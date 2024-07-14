//One of our assignment problem on custom setInterval

/*custom mySetInterval function using the built-in setTimeout function.
The mySetInterval function should allow you to repeatedly execute a callback function at a 
specified time interval until a given end time is reached.*/

function main(intervalTime, endTime, message, arr) {
    //Approach 1 without end time
    function mySetIntervalWithoutEndTime(callback, time) {
        const timeout = () => {
            setTimeout(() => {
                callback();
                timeout();
            }, time);
        }
        timeout();
    }
   //approach 2 with end time- just to practice
    function mySetIntervalWithEndTime(callback, time) {

        let intTime = intervalTime;
        while (intTime <= endTime) {
            setTimeout(callback, time);
            console.log("i will be done in sometime");
            intTime += intervalTime;
            if(intTime >endTime){
                console.log("mySetIntervalWithEndTime function execution completed");
            }
        }
    }
    // Don't make any changes to below code X=X=X=X=X=X=X=X=X=X=X=X=X
     mySetIntervalWithEndTime(function () {
        arr.push(message);
    }, intervalTime);

    mySetIntervalWithoutEndTime(function () {
        arr.push(message);
        console.log("I never end");
    }, intervalTime);
    // X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X
}
let arr=[];
main(1000,4000,"print message",arr);