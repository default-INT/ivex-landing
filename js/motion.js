const animateCounter = (element, start = 0) => {
  let startTime = null;
  const end = Number(element.dataset.toValue);
  const endsSymbl = element.dataset.endsSymbl || '';
  const duration = Number(element.dataset.duration) || 1000;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const progress = Math.min(timeElapsed / duration, 1);
    const currentNumber = Math.floor(progress * (end - start) + start);

    element.textContent = currentNumber + endsSymbl;

    if (timeElapsed < duration) return requestAnimationFrame(animation);

    element.textContent = end + endsSymbl;
  }

  requestAnimationFrame(animation);
}

const onStatsIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return

    document.querySelectorAll('.stat-item > .value').forEach(animateCounter)
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

const stickyNavBar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
  if (!stickyNavBar) return

  const { top } = stickyNavBar.getBoundingClientRect()

  if (top === 0) return stickyNavBar.classList.add('scrolled')

  return stickyNavBar.classList.remove('scrolled')
})
