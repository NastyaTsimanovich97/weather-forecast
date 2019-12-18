import { createHtmlElement } from './generateHTML';

let tooltipElem;

document.onmouseover = (event) => {
  const { target } = event;

  const tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElem = createHtmlElement('div', 'tooltip', document.body);
  tooltipElem.innerHTML = tooltipHtml;

  const coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  const top = coords.top + target.offsetHeight + 11;

  tooltipElem.style.left = `${left}px`;
  tooltipElem.style.top = `${top}px`;
};

document.onmouseout = () => {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};
