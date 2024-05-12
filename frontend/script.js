const socket = io('http://localhost:3000', { transports: ['websocket'] });

// Emit click data on the entire document
document.addEventListener('click', (event) => {
    const data = {
        tag: event.target.tagName.toLowerCase(),
        text: event.target.innerText,
        id: event.target.id,
        class: event.target.className,
        headers: Object.fromEntries([...new Headers(window.navigator).entries()]), // Convert Headers to object
        localStorageData: getLocalStorageData(),
    };

    // Emit data to the server
    socket.emit('clickData', data);
});

function getLocalStorageData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        data[key] = value;
    }
    return data;
}