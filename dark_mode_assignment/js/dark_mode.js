// find button and save it in variable theme_toggle
let theme_toggle = document.querySelector('#theme-toggle-btn');

// add an event listener
// when user clicks the theme toggle
theme_toggle.addEventListener('click', function(){
    // toggle dark mode
    document.body.classList.toggle('dark_mode');

    // check if body element has dark_mode class
    if(document.body.classList.contains('dark_mode')){
        // set the website theme as dark_mode in local storage
        localStorage.setItem('website_theme','dark_mode');
    }else{
        // otherwise se tthe website theme as default
        localStorage.setItem('website_theme','default');
  }
});

// create a function to retrieve the theme
function retrieve_theme(){
    // get the current website theme from local storage and save it in variable theme
    var theme = localStorage.getItem('website_theme');
    // if there is a theme
    if(theme != null){
        // remove the old theme, and apply the new theme
        document.body.classList.remove('default', 'dark_mode'); document.body.classList.add(theme);
    }
}

// call function
retrieve_theme();

// add an event listener to local storage to change the theme on all tabs
window.addEventListener("storage",function(){
    retrieve_theme();
},false);