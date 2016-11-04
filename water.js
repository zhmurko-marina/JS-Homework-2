/**
 * Created by Marina on 03.11.2016.
 */

/*
    [7, 0, 1, 3, 4, 1, 2, 1]                // 9
    [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]       // 10
    [2, 2, 1, 2, 2, 3, 0, 1, 2]             // 4
    [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]       // 24
    [2, 2, 2, 2, 2]                         // 0
*/

var arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],
    leftValue = arr[0], rightValue = arr[1],
    maxValue, indexOfMaxValue,
    result = 0, i = 1,
    n = arr.length;

Array.prototype.max = function () {
    return Math.max.apply(Math, this);
};

maxValue = arr.max();
indexOfMaxValue = arr.indexOf(maxValue);

function volumeCalc(leftValue, rightValue, index) {
    if (this.leftValue < this.rightValue && index < indexOfMaxValue) {
        this.leftValue = this.rightValue;
        this.rightValue = arr[index + 1];
    }
    else if (index < indexOfMaxValue) {
        result += this.leftValue - this.rightValue;
        this.rightValue = arr[index + 1];
    }
    else if (index === indexOfMaxValue) {
        this.rightValue = arr[n - i];
        this.leftValue = arr[n - i - 1];
        i++;
    }
    else if (this.leftValue > this.rightValue && index > indexOfMaxValue) {
        this.rightValue = arr[n - i];
        this.leftValue = arr[n - i - 1];
        i++;
    }
    else if (index > indexOfMaxValue) {
        result += this.rightValue - this.leftValue;
        this.leftValue = arr[n - i - 1];
        i++;
    }
    return result;
}

var res = arr.reduce(volumeCalc);
document.write(res);