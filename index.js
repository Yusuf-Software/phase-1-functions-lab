// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue > 42) {
        return someValue - 42;
    }
    else if (someValue < 42) {
        return 42 - someValue;
    }
    else {
        return 0;
    }
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    // return ((destination - start) * 264);
    if (destination > start) {
        return (destination - start) * 264;
    }
    else if (destination < start) {
        return (start - destination) * 264;
    }
    else {
        return 0;
    }
}

// calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), 
// return the fare for the customer. The first four hundred feet are free. 
// For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!).
//  Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 
// Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' 
// if a ride over 2500 feet is requested.
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let dist = distanceTravelledInFeet(start, destination);
    if (dist <= 400) {
        console.log('Okay, then its free for you.')
        return 0;
    }
    else if (dist > 400 && dist <= 2000) {
        return (dist - 400) * 0.02;
    }
    else if (dist > 2000 && dist <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

}

console.log(calculatesFarePrice(43, 44));