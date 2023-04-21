

window.onload=function digital_fn(){

    const toggle = document.querySelector('#nav .toggle-btn')
    const collapse = document.querySelector('#nav .collapse')

    toggle.addEventListener('click', ()=>{
        collapse.classList.toggle('active')
    })

    // masonry js
    let grid = document.querySelector('#site-main .recent-work-area .grid')

    let msnry = new Masonry(grid,{
        itemSelector: '.flex-item',
        gutter:100,
        fitWidth: true
    })
}

const rellax = new Rellax('.rellax',{
    center:true
});