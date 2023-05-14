const button = document.getElementById('button');
const toasts = document.getElementById('toasts');
const toast = document.querySelector('.toast');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

const createNotification = (message = null, type = null) => {
    const notificationDiv = document.createElement('div');
    notificationDiv.classList.add('toast');
    notificationDiv.classList.add(type ? type : getRandomType())
    notificationDiv.classList.add('active')
    notificationDiv.innerText = message? message : getRandomMessage()

    toasts.appendChild(notificationDiv)
    // toast.classList.add('active')

    setTimeout(() => {
        notificationDiv.remove()
        // toast.classList.remove('active')
    },3000)

}

// function createNotification(message = null, type = null) {
//     const notif = document.createElement('div')
//     notif.classList.add('toast')
//     notif.classList.add(type ? type : getRandomType())

//     notif.innerText = message ? message : getRandomMessage()

//     toasts.appendChild(notif)

//     setTimeout(() => {
//         notif.remove()
//     }, 3000)
// }

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}