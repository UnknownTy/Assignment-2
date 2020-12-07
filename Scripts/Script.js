let theme_button = document.getElementById('change-theme')
let new_button = document.getElementById('new-note')
let save_button = document.getElementById('save')
let cancel_button = document.getElementById('cancel')

theme_button.onclick = function(){
    let dark_elements = [
        'header',
        'aside',
        'textarea',
        'Button',
        'body',
        'footer',
        'main',
        'form',
    ]
    for (element in dark_elements){
        var tags = document.getElementsByTagName(dark_elements[element])
        for (let i = 0; i<tags.length; i++)
        {
            tags[i].classList.toggle("dark-mode")
        }
    }
    if (theme_button.innerText === 'Dark Theme'){
        theme_button.innerText = 'Light Theme'
    } else{
        theme_button.innerText = 'Dark Theme'
    }
}