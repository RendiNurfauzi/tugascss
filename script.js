// JavaScript
document.getElementById('hamburgerCheckbox').addEventListener('change', function() {
    document.getElementById('menu').style.transform = this.checked ? 'translate(0, 0)' : 'translate(-100%, 0)';
  });
  