const wechatBtn = document.getElementById('wechatBtn');
const qrModal = document.getElementById('qrModal');

qrModal.addEventListener('click', (e) => {
  e.stopPropagation();

  if (qrModal.style.display === 'none') return  qrModal.style.display = '';

  qrModal.style.display = 'none'
})

wechatBtn.addEventListener('click', () => {
  if (qrModal.style.display === 'none') return  qrModal.style.display = '';

  qrModal.style.display = 'none'
})
