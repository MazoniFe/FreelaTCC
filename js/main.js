import { chatlist, createChat } from './chatbtn.js';

window.onload = () => {
    const storageChatList = localStorage.getItem('chatList');
    const chatListDiv = document.getElementById('chat-list');
    chatListDiv.innerHTML = storageChatList;
};


window.addEventListener("click", (e) => {
    const targetId = e.target.id;
    const targetClass = e.target.classList;
    const href = e.target.getAttribute('href');
    if (targetClass.contains('login-button')) showWindow('login-window', true);
    if (targetClass.contains('closeWindowButton')) hiddenWindow(e.target.parentNode, true);
    if (targetClass.contains('register-button')) showWindow('register-window', true);
    if (targetClass.contains('register-freelancer-button')) showWindow('register-freelancer', true);
    if (targetClass.contains('chat-button')) addChat(e.target);
    if (targetClass.contains('minimize-chat')) switchChat(e.target);
});

window.addEventListener("onmouseover", (e) => {
    const targetId = e.target.id;
    const targetClass = e.target.classList;

});

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) purpleHeader();
    else whiteHeader();

    if (window.scrollY > 1900) hideMenu();
    else showMenu();
});



function switchChat(window) {
    const chatListDiv = document.getElementById('chat-list');
    const chatWindow = window.parentNode;
    const id = window.id;

    if (id === 'open-chat') {
        chatWindow.animate({ transform: 'translateY(+25.6rem)' }, { duration: 500 });
        const set = setTimeout(() => {
            chatWindow.style.bottom = "-25.6rem";
            chatWindow.children[1].src = './img/plus.png';
            chatWindow.children[1].id = 'closed-chat';
            localStorage.setItem('chatList', chatListDiv.innerHTML);
        }, 485);
    } else {
        chatWindow.animate({ transform: 'translateY(-25.6rem)' }, { duration: 500 });
        const set = setTimeout(() => {
            chatWindow.style.bottom = "0";
            chatWindow.children[1].src = './img/minimize.png';
            chatWindow.children[1].id = 'open-chat';
            localStorage.setItem('chatList', chatListDiv.innerHTML);
        }, 485);
    }
}

function addChat(profile) {
    const chatListDiv = document.getElementById('chat-list');
    const parent = profile.parentNode;
    const profileName = parent.children[1];
    const profileImg = parent.parentNode.children[0].src;

    let storageChatList = JSON.parse(window.localStorage.getItem('chatList2'));

    if (storageChatList !== null) {
        for (let i = 0; i < storageChatList.length; i++) {
            if (storageChatList[i] === profileName.id) {
                console.log('ja existe');
                return;
            };
        }
    }

    const chatWindow = createChat(profileImg, profileName.innerText, profileName.id);
    chatListDiv.appendChild(chatWindow);
    localStorage.setItem('chatList', chatListDiv.innerHTML);
    localStorage.setItem('chatList2', JSON.stringify(chatlist));

}

function whiteHeader() {
    const header = document.querySelector("header");
    const logo = document.getElementById("logo");
    const loginButton = document.querySelector("button");
    const menuBtn = document.getElementsByClassName("menu-btn");

    header.style.background = 'white';
    logo.src = "/img/logos/logo-bg-white.svg";
    loginButton.classList.remove("white-bg");
    loginButton.classList.add("purple-bg");

    for (let i = 0; i < menuBtn.length; i++) {
        menuBtn[i].classList.remove("white-color");
        menuBtn[i].classList.add("green-color");
    }
}

function purpleHeader() {
    const header = document.querySelector("header");
    const logo = document.getElementById("logo");
    const loginButton = document.querySelector("button");
    const menuBtn = document.getElementsByClassName("menu-btn");

    header.style.background = '#6B1A8E';
    logo.src = "/img/logos/logo-bg-purple.svg";
    loginButton.classList.add("white-bg");
    loginButton.classList.remove("purple-bg");

    for (let i = 0; i < menuBtn.length; i++) {
        menuBtn[i].classList.remove("green-color");
        menuBtn[i].classList.add("white-color");
    }
}

function hideMenu() {
    const header = document.querySelector("header");
    header.style.top = "-50rem";
}

function showMenu() {
    const header = document.querySelector("header");
    header.style.top = "0";
}

function showWindow(id, haveShadow) {
    document.body.classList.add('stop-scrolling');
    const window = document.getElementById(id);
    window.style.display = 'flex';

    if (id === 'register-window') {
        const loginWindow = document.getElementById('login-window');
        hiddenWindow(loginWindow, true);
    }
    if (id === 'login-window') {
        const registerFreeWindow = document.getElementById('register-freelancer');

        if (registerFreeWindow.style.display === 'flex')
            hiddenWindow(registerFreeWindow);
    }

    if (haveShadow) {
        const shadow = document.getElementById('screen-shadow');
        shadow.style.display = 'block';
    }
}

function hiddenWindow(window, removeShadow) {
    window.style.display = 'none';
    document.body.classList.remove('stop-scrolling');
    if (removeShadow) {
        const shadow = document.getElementById('screen-shadow');
        shadow.style.display = 'none';
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        if (href != '#home') {
            document.querySelector(this.getAttribute('href')).scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    });
})