const showOne = () => {
    let caption = document.getElementById('caption1');
    let title = document.getElementById('title1');
    caption.style.visibility = 'visible';
    title.style.visibility = 'visible';
    titleBackground.style.visibility = 'visible';
    captionBackground.style.visibility = 'visible';
}

const hideOne = () => {
    let caption = document.getElementById('caption1');
    let title = document.getElementById('title1');
    caption.style.visibility = 'hidden';
    title.style.visibility = 'hidden';
    titleBackground.style.visibility = 'hidden';
    captionBackground.style.visibility = 'hidden';
}

const showTwo = () => {
    let caption = document.getElementById('caption2');
    let title = document.getElementById('title2');
    caption.style.visibility = 'visible';
    title.style.visibility = 'visible';
    titleBackground.style.visibility = 'visible';
    captionBackground.style.visibility = 'visible';
}

const hideTwo = () => {
    let caption = document.getElementById('caption2');
    let title = document.getElementById('title2');
    caption.style.visibility = 'hidden';
    title.style.visibility = 'hidden';
    titleBackground.style.visibility = 'hidden';
    captionBackground.style.visibility = 'hidden';
}

const showThree = () => {
    let caption = document.getElementById('caption3');
    let title = document.getElementById('title3');
    caption.style.visibility = 'visible';
    title.style.visibility = 'visible';
    titleBackground.style.visibility = 'visible';
    captionBackground.style.visibility = 'visible';
}

const hideThree = () => {
    let caption = document.getElementById('caption3');
    let title = document.getElementById('title3');
    caption.style.visibility = 'hidden';
    title.style.visibility = 'hidden';
    titleBackground.style.visibility = 'hidden';
    captionBackground.style.visibility = 'hidden';
}

const showFour = () => {
    let caption = document.getElementById('caption4');
    let title = document.getElementById('title4');
    caption.style.visibility = 'visible';
    title.style.visibility = 'visible';
    titleBackground.style.visibility = 'visible';
    captionBackground.style.visibility = 'visible';
}

const hideFour = () => {
    let caption = document.getElementById('caption4');
    let title = document.getElementById('title4');
    caption.style.visibility = 'hidden';
    title.style.visibility = 'hidden';
    titleBackground.style.visibility = 'hidden';
    captionBackground.style.visibility = 'hidden';
}

const showFive = () => {
    let caption = document.getElementById('caption5');
    let title = document.getElementById('title5');
    caption.style.visibility = 'visible';
    title.style.visibility = 'visible';
    titleBackground.style.visibility = 'visible';
    captionBackground.style.visibility = 'visible';
}

const hideFive = () => {
    let caption = document.getElementById('caption5');
    let title = document.getElementById('title5');
    caption.style.visibility = 'hidden';
    title.style.visibility = 'hidden';
    titleBackground.style.visibility = 'hidden';
    captionBackground.style.visibility = 'hidden';
}

let iconOne = document.getElementById('icon1');
let iconTwo = document.getElementById('icon2');
let iconThree = document.getElementById('icon3');
let iconFour = document.getElementById('icon4');
let iconFive = document.getElementById('icon5');
let titleBackground = document.getElementById('title');
let captionBackground = document.getElementById('caption');

iconOne.addEventListener('mouseover', showOne);
iconOne.addEventListener('mouseout', hideOne);
iconTwo.addEventListener('mouseover', showTwo);
iconTwo.addEventListener('mouseout', hideTwo);
iconThree.addEventListener('mouseover', showThree);
iconThree.addEventListener('mouseout', hideThree);
iconFour.addEventListener('mouseover', showFour);
iconFour.addEventListener('mouseout', hideFour);
iconFive.addEventListener('mouseover', showFive);
iconFive.addEventListener('mouseout', hideFive);

