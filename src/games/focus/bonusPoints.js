export const inARow = num => {
    let text = "";
    let points = 0;
    switch (num) {
        case 1:
            text = "You Got It";
            points = 100;
            break;
        case 2:
            text = "2 In A Row";
            points = 250;
            break;
        case 3:
            text = "Turkey";
            points = 400;
            break;
        case 4:
            text = "Grand Slam";
            points = 750;
            break;
        case 5:
            text = "Perfect Accuracy";
            points = 1000;
            break;
        default:
            break;
    }
    return { text, points };
};

export const timeLeft = timer => {
    return { text: "Time Left", points: timer };
};

export const timeBased = timer => {
    let text, points;
    if (Math.ceil(timer) === 30) {
        text = "Quick Draw";
        points = 300;
    } else if (Math.floor(timer) === 0) {
        text = "To The Wire";
        points = 50;
    }
    if (points && text) {
        return { text, points };
    }
    return null;
};

export default {
    inARow,
    timeLeft,
    timeBased
};
