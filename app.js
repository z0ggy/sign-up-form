//function after 'click now' button  form will display
var hide = function()
{
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.container').style.background = '#cc683c';

};



// select element 'Click Me' button and call hide function after click on it
document.querySelector('.banner-btn').addEventListener('click', hide);

//select "X" button  and use arrow function instead custom function
document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.container').style.cssText = ' background: linear-gradient(rgba(121, 93, 93, 0.8), rgba(0, 0, 0, .7)), url(images/bg1.jpeg) center no-repeat; background-size: cover';
});
