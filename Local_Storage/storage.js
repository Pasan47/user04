//local storage
//cookies

document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
document.cookie = "userId=12345; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
document.cookie = "theme=dark; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
document.cookie = "theme=white; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// Adding multiple items to sessionStorage
sessionStorage.setItem('username', 'JohnDoe');
sessionStorage.setItem('userId', '12345');
sessionStorage.setItem('theme', 'dark');


// Adding multiple items to localStorage
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('userId', '12345');
localStorage.setItem('theme', 'dark');
