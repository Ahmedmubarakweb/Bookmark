const tabContainer=document.querySelector('.tab-container');
const tabContent=document.querySelectorAll('.tab-content');
const tabButtons=document.querySelectorAll('.btn-tab')





//tabed component
tabContainer.addEventListener('click',function(e){
 const clicked=e.target.closest('.btn-tab');

 //Guard pause
 if(!clicked) return;

 //remove active class
 tabButtons.forEach(t => t.classList.remove('btn-tab--active'));
 tabContent.forEach(t => t.classList.remove('tab-content--active'));

//activate tab
clicked.classList.add('btn-tab--active');

// Activate content area
document
.querySelector(`.tab-content--${clicked.dataset.tab}`)
.classList.add('tab-content--active');

});

