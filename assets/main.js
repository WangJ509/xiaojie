const character = document.querySelector('#demo-character');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let demoTimer;
function replayDemo() {
  window.clearTimeout(demoTimer);
  character.textContent = '在';
  character.classList.remove('resolved');
  const resolve = () => {
    character.textContent = '再';
    character.classList.add('resolved');
  };
  if (reducedMotion) resolve();
  else demoTimer = window.setTimeout(resolve, 1400);
}
document.querySelector('#replay').addEventListener('click', replayDemo);
replayDemo();
document.querySelector('#copy-command').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  const command = document.querySelector('#install-command').textContent;
  try {
    await navigator.clipboard.writeText(command);
    status.textContent = '已複製安裝指令';
  } catch {
    status.textContent = '請選取上方指令並手動複製。';
  }
});
