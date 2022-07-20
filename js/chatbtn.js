export const chatlist = [];
export const canCreate = true;

export function createChat(imageDirectory, name, id) {

    //DECLARATION VARIABLES
    const chatWindow = document.createElement('div');
    const chatContent = document.createElement('div');
    const minimizeImg = document.createElement('img');
    const chatMenu = document.createElement('div');
    const profileImg = document.createElement('img');
    const profileName = document.createElement('h3');
    const msgConsole = document.createElement('div');
    const icons = document.createElement('div');
    const plusIcon = document.createElement('img');
    const camIcon = document.createElement('img');
    const galeryIcon = document.createElement('img');
    const microphoneIcon = document.createElement('img');
    const inputChat = document.createElement('input');

    //ASSING VALUES
    profileImg.src = imageDirectory;
    profileName.innerHTML = name;
    minimizeImg.src = './img/minimize.png';
    plusIcon.src = './img/chat/plus.svg';
    camIcon.src = './img/chat/cam.svg';
    galeryIcon.src = './img/chat/galery.svg';
    microphoneIcon.src = './img/chat/microphone.svg';

    //ASSING CLASSES AND ID
    chatWindow.classList.add('chat-window');
    chatContent.classList.add('chat-content');
    profileName.id = id;
    minimizeImg.classList.add('minimize-chat');
    minimizeImg.id = "open-chat";
    chatMenu.classList.add('chat_menu');
    msgConsole.classList.add('messages');
    icons.classList.add('interact-chat');

    //ASSINGS ELEMENTS CHILDS

    //Icons at iconsparent
    icons.appendChild(plusIcon);
    icons.appendChild(camIcon);
    icons.appendChild(galeryIcon);
    icons.appendChild(inputChat);
    icons.appendChild(microphoneIcon);

    //profile dat at menuChat
    chatMenu.appendChild(profileImg);
    chatMenu.appendChild(profileName);

    // all datas at chat-content
    chatContent.appendChild(chatMenu);
    chatContent.appendChild(msgConsole);
    chatContent.appendChild(icons);


    chatWindow.appendChild(chatContent);
    chatWindow.appendChild(minimizeImg);
    chatWindow.style.display = 'flex';
    chatlist.push(profileName.id);

    return chatWindow;
}