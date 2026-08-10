/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {

    const hourAngle = (hour%12) * 30 + minutes *0.5
    const minuteAngle = minutes*6

    const diff = Math.abs(hourAngle - minuteAngle)

    console.log(diff)

    return Math.min(diff, 360-diff)


    
};