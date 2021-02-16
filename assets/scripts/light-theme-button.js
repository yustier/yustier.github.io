document.write("<div id='light-theme-wrapper'><input type='checkbox' id='light-theme'><label for='light-theme'><span></span></label><div id='swImg'></div></div>");

let btn = document.querySelector("#light-theme");

if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
} else if (localStorage.getItem('theme') === 'dark') {
    btn.checked = false;
    document.getElementById('favicon').setAttribute('href', './assets/img/favicons-night/favicon.ico')
} else {
    btn.checked = true;
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    document.getElementById('header-icon').innerHTML = "<img class='icon' src='./assets/img/i6chan_c-128.png' alt='アイコン'></img>";
}

btn.addEventListener("change", () => {
    if (btn.checked) {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        document.getElementById('header-icon').innerHTML = "<img class='icon' src='./assets/img/i6chan_c-128.png' alt='アイコン'></img>";
        document.getElementById('favicon').setAttribute('href', './assets/img/favicons-day/favicon.ico')
    } else {
        localStorage.setItem('theme', 'dark');
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        document.getElementById('header-icon').innerHTML = "<img class='icon' src='./assets/img/k6chan_t-128.png' alt='アイコン'></img>";
        document.getElementById('favicon').setAttribute('href', './assets/img/favicons-night/favicon.ico')
    }
});
