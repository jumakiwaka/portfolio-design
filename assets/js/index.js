

const appState = {
    url: 'ratings.html',
}

const popUpForm = () => {
    const newWindow = open('/ratings.html', 'Rate', 'width=200,height=200,location=0,toolbar=no,menubar=no,status=no,resizable=no,titlebar=no');
    newWindow.focus();
    newWindow.document.querySelector('button').addEventListener('click', () => {
        newWindow.close();
    })
}

document.querySelector('.intro button').addEventListener('click', () => {
    popUpForm();
});

const toggleAbout = (e) => {
    const div = document.querySelector('.about-me + div');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
}

const btn = document.querySelector('.about-me > button');

btn.addEventListener('click', (e) => {
    toggleAbout(e);
});

