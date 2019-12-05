
window.mdc.autoInit();
const drawer = document.querySelector('.mdc-drawer').MDCDrawer;

// open drawer on nav icon
document.getElementsByClassName("mdc-top-app-bar__navigation-icon")[0].addEventListener("click", function () {
    drawer.open = true;
});

// close drawer on selection
let navs = document.getElementsByClassName("mdc-list-item");

for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function () {
        drawer.open = false;
        console.log("yup yup");
    })
};


