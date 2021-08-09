let toggleClass = document.querySelector('.message a');

toggleClass.addEventListener('click', function () {

    $('.login-form ').hide();
    $('.register-form').show();


});
let login = document.querySelector('.login');
login.addEventListener('click', function () {

    $('.login-form ').show();
    $('.register-form').hide();
});



