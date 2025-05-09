// PREVIEW
console.log('Loading preview!');

// QUERY SELECTOR

const previewCard = document.querySelector('.js__previewCard');

const palette1 = document.querySelector('.js__palette1');
const palette2 = document.querySelector('.js__palette2');
const palette3 = document.querySelector('.js__palette3');

const jobInput = document.querySelector('.js__jobInput');
const emailInput = document.querySelector('.js__emailInput');

const previewJob = document.querySelector('.js__preview_job');
const previewEmail = document.querySelector('.js__preview_email');

// EVENTOS

jobInput.addEventListener('input', (event) => {
  console.log(jobInput.value);
  console.log(event.currentTarget.value);

  data.job = event.currentTarget.value;

  previewJob.innerHTML = data.job;
});

emailInput.addEventListener('input', (event) => {
  console.log(event.currentTarget.value);

  data.email = event.currentTarget.value;

  previewEmail.href = `mailto:${data.email}`;
});

const handleClickPalette = (event) => {
  data.palette = event.currentTarget.value;

  previewCard.classList.remove('palette1', 'palette2', 'palette3');

  previewCard.classList.add(`palette${event.currentTarget.value}`);
};

palette1.addEventListener('click', handleClickPalette);

palette2.addEventListener('click', handleClickPalette);

palette3.addEventListener('click', handleClickPalette);

// FIN PREVIEW