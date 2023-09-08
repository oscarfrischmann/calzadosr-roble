const h1 = document.createElement('h1');
h1.innerText = 'calzadosroble.com.ar';
const container = document.createElement('div');
document.body.appendChild(container);
container.appendChild(h1);


h1.innerHTML = h1.innerText
    .split('')
    .map((letter, i) => `<span style="transition-delay:${i * 50}ms">${letter}</span>`)
    .join('')


h1.addEventListener('mouseover', () => {
    const span = document.getElementsByTagName('span');
    for (item of span) {
        item.style.transform = "translateY(-30px)"
        item.style.color = "rgb(228, 228, 135)"
    }
    setTimeout(()=>{
        for (item of span) {
            item.style.transform = "rotate(180deg)"
        }
    }, 1300)
})

h1.addEventListener('mouseleave', () => {
    const span = document.getElementsByTagName('span');
    setTimeout(() => {
        for (item of span) {
            item.style.transform = "translateY(0)"
            item.style.color = "green"
        }
    }, 2600)
})

