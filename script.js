const item = document.querySelector('.item');
const plasholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend', dragend)

for (const plasholder of plasholders) {
    plasholder.addEventListener('dragover',dragover)
    plasholder.addEventListener('dragenter',dragenter)
    plasholder.addEventListener('dragleave',dragleave)
    plasholder.addEventListener('drop',dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
    
}
function dragend(event) {
    event.target.className = 'item';
    
}
function dragover(event) {
    event.preventDefault()
}
function dragenter(event) {
    event.target.classList.add('hovered')
    
}
function dragleave(event) {
    event.target.classList.remove('hovered')
    
}
function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}