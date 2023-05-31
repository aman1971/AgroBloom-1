const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const blur = document.querySelector('.blur')


registerLink.addEventListener('click', () => { wrapper.classList.add('active'); });

loginLink.addEventListener('click', () => { wrapper.classList.remove('active'); });

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    blur.style.display = "block";
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    blur.style.display = "none";
});

const searchInput = document.querySelector('.search-input')

//Search product input field enter keypress event
searchInput.addEventListener('input',enterSearch)

function enterSearch() {
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            window.location.href = './search?product-name='+searchInput.value
        }
    })
}