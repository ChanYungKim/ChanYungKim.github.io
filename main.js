const panelHeaders = document.querySelectorAll('.panel-header');

panelHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    header.classList.toggle('active');
    const content = header.nextElementSibling;
    if (content.style.display === 'none') {
      content.style.display = 'block';
      header.querySelector('arrow').style.transform = 'rotate(180deg)';
    } else {
      content.style.display = 'none';
      header.querySelector('arrow').style.transform = 'rotate(0)';
    }
  });
});