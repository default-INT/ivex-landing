const LOAD_OBJ_AS_SVG_CLASS = 'svg-load'

const loadObjectAsSvg = (element) => {
  element.addEventListener('load', (event) => {
    const svgDoc = event.target.contentDocument;
    const svgElement = svgDoc.querySelector('svg');
    const parentNode = event.target.parentNode;
    const childList = [...parentNode.children];

    const childrenWithoutObject = childList
      .filter(item => !item.className.includes(LOAD_OBJ_AS_SVG_CLASS));

    const objClasses = event.target.className.replace(LOAD_OBJ_AS_SVG_CLASS, '')
      .split(' ')
      .filter(item => Boolean(item));

    svgElement.classList.add(...objClasses);

    parentNode.replaceChildren(...[svgElement, ...childrenWithoutObject]);
  })
}

document.querySelectorAll(`.${LOAD_OBJ_AS_SVG_CLASS}`)?.forEach(loadObjectAsSvg);
