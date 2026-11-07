document.querySelectorAll('[data-copy],[data-copy-active],.prompt-tabs').forEach(element=>element.hidden=false);
let activePrompt='new';
document.querySelectorAll('[data-prompt]').forEach(button=>button.addEventListener('click',()=>{
  activePrompt=button.dataset.prompt;
  document.querySelectorAll('[data-prompt]').forEach(tab=>tab.setAttribute('aria-pressed',String(tab===button)));
  document.querySelectorAll('.prompt-text').forEach(panel=>panel.hidden=panel.id!=='prompt-'+activePrompt);
}));
document.querySelectorAll('[data-copy],[data-copy-active]').forEach(button=>button.addEventListener('click',async()=>{
  const target=document.getElementById(button.dataset.copy||'prompt-'+activePrompt),status=document.getElementById('copy-status');
  try{await navigator.clipboard.writeText(target.textContent.trim());status.textContent='已复制，可粘贴到你的工具中。';}
  catch{const range=document.createRange();range.selectNodeContents(target);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent='内容已选中，请手动复制。';}
}));
