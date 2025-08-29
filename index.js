const minEl = document.getElementById('min');
const maxEl = document.getElementById('max');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');
const genBtn = document.getElementById('generate');
const clearBtn = document.querySelector('.clear');

function toInt(value) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.trunc(n) : NaN;
}

function getRandomIntInclusive(min, max) {
  // Inclusive of both min and max:
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validate(min, max) {
  if (!Number.isFinite(min) || !Number.isFinite(max)) return 'Please enter valid numbers.';
  if (min > max) return 'Min must be less than or equal to Max.';
  return '';
}

function handleGenerate() {
  errorEl.textContent = '';
  const min = toInt(minEl.value);
  const max = toInt(maxEl.value);

  const msg = validate(min, max);
  if (msg) {
    errorEl.textContent = msg;
    resultEl.textContent = '—';
    return;
  }

  const n = getRandomIntInclusive(min, max);
  resultEl.textContent = n.toString();
}

function handleClear() {
  minEl.value = '1';
  maxEl.value = '100';
  errorEl.textContent = '';
  resultEl.textContent = '—';
  minEl.focus();
}

genBtn.addEventListener('click', handleGenerate);
clearBtn.addEventListener('click', handleClear);

// Allow Enter key to generate
[minEl, maxEl].forEach(el => {
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleGenerate();
  });
});
