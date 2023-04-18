

window.onload=function digital_fn(){

    const toggle = document.querySelector('#nav .toggle-btn')
    const collapse = document.querySelector('#nav .collapse')

    toggle.addEventListener('click', ()=>{
        collapse.classList.toggle('active')
    })
}