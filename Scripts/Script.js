let theme_button = document.getElementById('change-theme')
let new_button = document.getElementById('new-note')
let save_button = document.getElementById('save')
let cancel_button = document.getElementById('cancel')
let text_area = document.getElementById('note_input')

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

cancel_button.onclick = function(){
    cancel_button.toggleAttribute('hidden', true)
    text_area.toggleAttribute('hidden', true)

    save_button.toggleAttribute('hidden', true)
}

new_button.onclick = function(){
    if(text_area.hasAttribute('hidden')){
        cancel_button.toggleAttribute('hidden', false)
        text_area.toggleAttribute('hidden', false)
        save_button.toggleAttribute('hidden', false)
    } else{
        text_area.value = ""; // Clears the text_area
    }
}
let notesArray = [
    {title:"Note One", body:"some text 1"},
    {title:"Note Two", body:"some text 2"},
]

document.querySelector('ul').addEventListener('click', function(e){
    var target_text = e.target.innerText
    for(i in notesArray){
        if(notesArray[i]['title'] === target_text){
            text_area.value = target_text + "\n" + notesArray[i]['body']
            break; // Break as we know we've found our note.
        } 
    }
    
})
populate_notes(notesArray)