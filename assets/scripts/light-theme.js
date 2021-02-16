if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
} else if (localStorage.getItem('theme') === 'dark') {
    document.getElementById('favicon').setAttribute('href', './assets/img/favicons-night/favicon.ico')
} else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    document.getElementById('header-icon').innerHTML = "<img class='icon' src='./assets/img/i6chan_c-128.png' alt='アイコン'></img>";
}
