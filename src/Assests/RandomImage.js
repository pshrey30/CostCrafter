const images = {
    1: require('../Assests/Images/1.png'),
    2: require('../Assests/Images/2.png'),
    3: require('../Assests/Images/3.png'),
    4: require('../Assests/Images/4.png'),
    5: require('../Assests/Images/5.png'),
    6: require('../Assests/Images/6.png'),
    7: require('../Assests/Images/7.png'),
    8: require('../Assests/Images/8.png'),
    9: require('../Assests/Images/9.png'),
    10: require('../Assests/Images/10.png'),
    11: require('../Assests/Images/11.png'),
    12: require('../Assests/Images/12.png'),
}

const RandomImage = () => {
    let min = 1;
    let max = 12;
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return images[rand];
}

export default RandomImage;