// cache mode selection
document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
})

document.getElementById("moon").addEventListener("click", function(){
  localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark');
  
  if (localStorage.getItem('mode') === 'dark') {
    document.querySelector('body').classList.add('dark');
  } else {
    document.querySelector('body').classList.remove('dark')
  }
})