const animCounter = element => {
  const toValue = Number(element.dataset.toValue);
  const endsSymbl = element.dataset.endsSymbl || '';
  const duration = element.dataset.duration || 700;

  if (!toValue) return

  let current = 0;

  const intervalStep = Math.abs(Math.floor(duration / toValue));
  const step = intervalStep === 0 ? Math.abs(Math.floor(toValue / duration)) * 2 : 1

  const timerId = setInterval(() => {
    current += step;
    const newVal = current > toValue ? toValue : current;

    element.textContent = newVal + endsSymbl

    if (current >= toValue) clearInterval(timerId)
  }, intervalStep)
}

const onStatsIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return

    document.querySelectorAll('.stat-item > .value').forEach(animCounter)
    observer.unobserve(entry.target)
  });
}

const onStepsIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return

    document.querySelectorAll('.work-step-item')?.forEach((item, idx) => {
      setTimeout(() => {
        item.classList.add('fade-ease-in')
      }, idx * 400)
    })
    observer.unobserve(entry.target)
  });
}

const onPathWaysIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return

    document.querySelector('.map-container').classList.add('fade-ease-in');
    observer.unobserve(entry.target)
  });
}

const mapContainer = document.querySelector('.map-container');

if (mapContainer) {
  const pathsObserver = new IntersectionObserver(onPathWaysIntersection, {
    threshold: 0.1
  })

  setTimeout(() => { pathsObserver.observe(mapContainer) }, 200)
}

const statSection = document.querySelector('.stat-section');

if (statSection) {
  const observer = new IntersectionObserver(onStatsIntersection, {
    threshold: 0.1
  })

  observer.observe(statSection)
}


const stepsContainer = document.querySelector('.steps-container');

if (stepsContainer) {
  const stepsObserver = new IntersectionObserver(onStepsIntersection, {
    threshold: 0.1
  })
  stepsObserver.observe(stepsContainer)
}
