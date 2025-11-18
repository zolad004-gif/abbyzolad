// Small script to set the copyright year and add basic behaviors
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;
});
