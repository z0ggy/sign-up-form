//function after 'click now' button  form will display
var hide = function()
{
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.container').style.background = '#cc683c';

}



// select element 'Click Me' button and call hide function after click on it
document.querySelector('.banner-btn').addEventListener('click', hide);

//select "X" button 
document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('banner').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: !visible';
})