let theme_button = document.getElementById('change-theme')
let new_button = document.getElementById('new-note')
let save_button = document.getElementById('save')
let cancel_button = document.getElementById('cancel')
let text_area = document.getElementById('note_input')

let notesArray = [
    {title:"Note One", body:"some text 1"},
    {title:"Note Two", body:"some text 2"},
]

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
    // Scroll through all elements that have a dark theme and apply the dark-mode class.
    for (element in dark_elements){
        var tags = document.getElementsByTagName(dark_elements[element])
        for (let i = 0; i < tags.length; i++)
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

function reveal_text(){
    // Reveals the cancel and save buttons with the text area.
    // This function exists as I reveal the text multiple times, but only hide once.
    cancel_button.toggleAttribute('hidden', false)
    text_area.toggleAttribute('hidden', false)
    save_button.toggleAttribute('hidden', false)
}

new_button.onclick = function(){
    if(text_area.hasAttribute('hidden')){
        reveal_text()
    } else{
        text_area.value = ""; // Clears the text_area
    }
}

save_button.onclick = function(){
    var text = text_area.value.split('\n')
    var title_text = text[0]
    text.splice(0, 1)
    var body_text = text.join('\n')
    let found = false
    for(i in notesArray){
        if (notesArray[i]['title'] === title_text){
            notesArray[i]['body'] = body_text
            found = true
            break; // Break as we know the item already exists
        }
    }
    if(!found){
        notesArray.push(
            {title: title_text,
             body:  body_text})
        document.querySelector('ul').insertAdjacentHTML("beforeend",`\
        <li><span>${notesArray[notesArray.length - 1]['title']}</span></li>`)
    }
}

document.querySelector('ul').addEventListener('click', function(e){
    var target_text = e.target.innerText
    for(i in notesArray){
        if(notesArray[i]['title'] === target_text){
            text_area.value = target_text + "\n" + notesArray[i]['body']
            reveal_text()
            break; // Break as we know we've found our note.
        } 
    }
    
})