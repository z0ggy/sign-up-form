// create hide function witch will hide selected element
var hide = function()
{
    document.querySelector('.banner').style.display = 'none';
}



// select element and add event listener with hide function
document.querySelector('.banner-btn').addEventListener('click', hide);