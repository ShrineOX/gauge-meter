function setGauge(value) {
  document.querySelector('.circle--mask').style.transform = `rotate(${value}deg)`;
  document.querySelector('.marker-container').style.transform = `rotate(${value}deg)`;
}

document.querySelector('.range-input').addEventListener('change', event => {
  const value = event.target.value;
  setGauge(value);
});
