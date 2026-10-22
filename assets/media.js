document.querySelectorAll('.play-demo').forEach((button) => {
  const image = button.closest('figure').querySelector('img');
  const label = button.closest('figure').querySelector('.demo-label').textContent;
  button.addEventListener('click', () => {
    const playing = button.getAttribute('aria-pressed') === 'true';
    image.src = playing ? image.dataset.poster : image.dataset.animation;
    button.setAttribute('aria-pressed', String(!playing));
    button.setAttribute('aria-label', `${playing ? '播放' : '停止'}${label}示範`);
    button.textContent = playing ? '播放示範 ▷' : '停止播放 □';
  });
});
