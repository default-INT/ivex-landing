const addFadeInHover = (legendSelector, pathSelector, toValue = 0.3) => {
  const allLegendItems = document.querySelectorAll(legendSelector);

  allLegendItems.forEach(item => {
    item.addEventListener('mouseenter', event => {
      const target = event.target;
      const triggeredPath = target.dataset?.toHover;

      const allWayPathItems = [...document.querySelectorAll(pathSelector)]
      const legendList = [...allLegendItems]

      allWayPathItems
        .filter(pathWay => pathWay.dataset?.triggerName !== triggeredPath)
        .forEach(pathWay => pathWay.style.opacity = toValue)

      legendList
        .filter(pathWay => pathWay.dataset?.toHover !== triggeredPath)
        .forEach(pathWay => pathWay.style.opacity = toValue)
    })

    item.addEventListener('mouseleave', () => {
      const allWayPathItems = document.querySelectorAll(pathSelector);
      const legendList = [...allLegendItems]

      allWayPathItems.forEach(pathWay => pathWay.style.opacity = '')
      legendList.forEach(pathWay => pathWay.style.opacity = '')
    })
  })
}

addFadeInHover('.china-legend-item', '.path-border')
addFadeInHover('.legend-item', '.path-way')
