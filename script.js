const navbar = document.getElementById('navbar');

window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-slate-400/70', 'backdrop-blur', 'shadow-md');
    navbar.classList.remove('bg-slate-400');
  } else {
    navbar.classList.add('bg-slate-400');
    navbar.classList.remove('bg-slate-400/70', 'backdrop-blur', 'shadow-md');
  }
};
