let btn = document.getElementById('btn');
let container = document.getElementById('container')

btn.addEventListener('click', () => {
    createNotification();
})

function createNotification (){
    let notif = document.createElement('div');
    notif.classList.add('toast')

    notif.innerText = "Nouvelle ligne";

    container.appendChild(notif);

    setTimeout( () => {
        notif.remove();
    }, 3000)
}