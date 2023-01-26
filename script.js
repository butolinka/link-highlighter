const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(){ 
    const linkCoord = this.getBoundingClientRect();
    const coords = {
        width:linkCoord.width,
        height: linkCoord.height,
        top: linkCoord.top + window.scrollY,
        left: linkCoord.left + window.scrollX
    };
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));