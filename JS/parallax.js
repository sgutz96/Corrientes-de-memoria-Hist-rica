  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    document.querySelector('.color1').style.transform = `translateY(${scrollPosition * 0.05}px)`;
    document.querySelector('.color2').style.transform = `translateY(${scrollPosition * 0.1}px)`;
    document.querySelector('.color3').style.transform = `translateY(${scrollPosition * 0.15}px)`;
    document.querySelector('.color4').style.transform = `translateY(${scrollPosition * 0.2}px)`;
  });

