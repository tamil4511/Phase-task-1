$(document).ready(function () {
    var boolean = true;

    function toggleButtonVisibility() {
        if (boolean) {
            $("#register-btn").prop("disabled", false);
        } else {
            $("#register-btn").prop("disabled", true);
            $("#register-btn").css("cursor", "not-allowed");
        }
    }

    $("#register").submit(function (event) {
        event.preventDefault();     
        if (boolean) {
            $("#register")[0].reset();
            alert("Registration Successful");
            login();
        } 
    });

    var loginBooean = true;
    $("#login").submit(function (event) {
        event.preventDefault();
        if (loginBooean) {
            $("#login")[0].reset();
            alert("Login Successful");
        }
        else
        {
            $("#loginSubmit").prop("disabled", true);
        }
    });
    $("#LoginUsername").focusout(function () {
        var username = $("#LoginUsername").val();
        if (username.length < 3) {
            $("#Login-Username-error").text("Username must be at least 3 characters");
            loginBooean = false;
        } else {
            $("#login-username-error").text("");
            loginBooean = true;
        }
    });
    $("#LoginPassword").focusout(function () {
        var password = $("#LoginPassword").val();
        if (password.length < 8) {
            $("#Login-Password-error").text("Password must be at least 8 characters");
            loginBooean = false;
        } else {
            $("#login-password-error").text("");
            loginBooean = true;
        }
    });









    $("#Firstname").focusout(function () {
        var firstName = $("#Firstname").val();
        if (firstName.length < 3) {
            $("#Firstname-error").text("First Name must be at least 3 characters");
            boolean = false;
        } else if (firstName.length > 20) {
            $("#Firstname-error").text("First Name must be less than 20 characters");
            boolean = false;
        } else if (!firstName.match(/^[a-zA-Z]+$/)) {
            $("#Firstname-error").text("First Name must contain only alphabets");
            boolean = false;
        } else {
            $("#Firstname-error").text("");
            boolean = true;
        }
        toggleButtonVisibility();
    });

    $("#Lastname").focusout(function () {
        var lastName = $("#Lastname").val();
        if (lastName.length < 3) {
            $("#Lastname-error").text("Last Name must be at least 3 characters");
            boolean = false;
        } else if (lastName.length > 20) {
            $("#Lastname-error").text("Last Name must be less than 20 characters");
            boolean = false;
        } else if (!lastName.match(/^[a-zA-Z]+$/)) {
            $("#Lastname-error").text("Last Name must contain only alphabets");
            boolean = false;
        } else {
            $("#Lastname-error").text("");
            boolean = true;
        }
        toggleButtonVisibility();
    });

    $("#Date").focusout(function () {
        var date = $("#Date").val();
        if (date == "") {
            $("#Date-error").text("Please select a date");
            boolean = false;
        } else {
            $("#Date-error").text("");
            boolean = true;
            var age = calculateAge(new Date(date));
            if (age < 18) {
                $("#Age").val(age);
                $("#Age-error").text("Age must be greater than 18");
                boolean = false;
            } else {
                $("#Age").val(age);
                $("#Age-error").text("");
                boolean = true;
            }
        }
        toggleButtonVisibility();
    });

    function calculateAge(birthDate) {
        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDifference = today.getMonth() - birthDate.getMonth();
    
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    $("#Age").focusout(function () {
        var age = $("#Age").val();
        if (age == "") {
            $("#Age-error").text("Please enter your age");
            boolean = false;
        } else if (age < 18) {
            $("#Age-error").text("Age must be greater than 18");
            boolean = false;
        } else {
            $("#Age-error").text("");
            boolean = true;
        }
        toggleButtonVisibility();
    });

    $("#Phone").focusout(function () {
        var phone = $("#Phone").val();
        if (phone == "") {
            $("#Phone-error").text("Please enter your phone number");
            boolean = false;
        } else if (!phone.match(/^[0-9]+$/)) {
            $("#Phone-error").text("Phone number must contain only digits");
            boolean = false;
        } else if (phone.length != 10) {
            $("#Phone-error").text("Phone number must be of 10 digits");
            boolean = false;
        } else {
            $("#Phone-error").text("");
            boolean = true;
        }
        toggleButtonVisibility();
    });

    $("#E-mail").focusout(function () {
        var email = $("#E-mail").val();
        if (email == "") {
            $("#Email-error").text("Please enter your email");
            boolean = false;
        } else if (!email.match(/\S+@\S+\.\S+/)) {
            $("#Email-error").text("Please enter a valid email");
            boolean = false;
        } else {
            $("#E-mail-error").text("");
            boolean = true;
        }
        toggleButtonVisibility();
    });

    $("#Address").focusout(function () {
        var address = $("#Address").val();
        console.log(address);
        if (address == "") {
            $("#Address-error").text("Please enter your address");
            boolean = false;
        } else {
            $("#Address-error").text("");
            boolean = true;
        }
        toggleButtonVisibility();
    });

    const stateCityMap = {
        "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
        "Karnataka": ["Bengaluru", "Mysore", "Mangalore"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
        "West Bengal": ["Kolkata", "Darjeeling", "Howrah"],
    };
    
    $(document).ready(function () {
        // Populate state options
        const stateSelect = $("#State");
        const citySelect = $("#City");
    
        for (let state in stateCityMap) {
            stateSelect.append(new Option(state, state));
        }
    
        stateSelect.change(function () {
            const selectedState = $(this).val();
            citySelect.empty().append(new Option("Select City", ""));
    
            if (selectedState) {
                const cities = stateCityMap[selectedState];
                for (let city of cities) {
                    citySelect.append(new Option(city, city));
                }
            }
        });
    
        // State validation
        stateSelect.focusout(function () {
            if (!$(this).val()) {
                $("#State-error").text("Please select a state");
            } else {
                $("#State-error").text("");
            }
        });
    
        // City validation
        citySelect.focusout(function () {
            if (!$(this).val()) {
                $("#City-error").text("Please select a city");
            } else {
                $("#City-error").text("");
            }
        });
    });
    
    $("#Username").focusout(function () {
        var username = $("#Username").val();
        if (username.length < 3) {
            $("#Username-error").text("Username must be at least 3 characters");
            boolean = false;
        } else if (username.length > 20) {
            $("#Username-error").text("Username must be less than 20 characters");
            boolean = false;
        } else {
            $("#Username-error").text("");
            boolean = true;
        }
        toggleButtonVisibility();
    });

    $("#Enterpassword").focusout(function () {
        var enterPassword = $("#Enterpassword").val();
        var hasAlphabet = /[a-zA-Z]/.test(enterPassword); 
        var hasNumber = /[0-9]/.test(enterPassword);    
        var hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(enterPassword); 
    
        if (enterPassword.length < 8) {
            $("#Enterpassword-error").text("Password must be at least 8 characters");
            boolean = false;
        } else if (enterPassword.length > 20) {
            $("#Enterpassword-error").text("Password must be less than 20 characters");
            boolean = false;
        } else if (!hasAlphabet || !hasNumber || !hasSymbol) {
            $("#Enterpassword-error").text("Password must include at least one alphabet, one number, and one symbol");
            boolean = false;
        } else {
            $("#Enterpassword-error").text("");
            boolean = true;
        }
        toggleButtonVisibility();
    });
    

    $("#Confirmpassword").focusout(function () {
        var enterPassword = $("#Enterpassword").val();
        var confirmPassword = $("#Confirmpassword").val();
        
        if (confirmPassword != enterPassword) {
            $("#Confirmpassword-error").text("Passwords do not match");
            boolean = false;
        } else {
            $("#Confirmpassword-error").text("");
            boolean = true;
        }
        toggleButtonVisibility();
    });

    
    toggleButtonVisibility();
});

$(document).ready(function () {
    $("#contact-form").submit(function (event) {
        event.preventDefault(); 
        $("#contact-form")[0].reset();
    });
    $("#Contact-FirstName").focusout(function () {
        var name = $("#Contact-FirstName").val();
        if (name.length < 3) {
            $("#contact-name-error").text("Name must be at least 3 characters");
            $("#Contact-FirstName").css("border", "2px solid red");
        }else if (!name.match(/^[a-zA-Z]+$/)) {
            $("#contact-name-error").text("First Name must contain only alphabets");
            $("#Contact-FirstName").css("border", "2px solid red");
        }  else {
            $("#contact-name-error").text("");
            $("#Contact-FirstName").css("border", "2px solid green");
        }
    });
    $("#Contact-LastName").focusout(function () {
        var name = $("#Contact-LastName").val();
        if (name.length < 3) {
            $("#contact-lastname-error").text("Name must be at least 3 characters");
            $("#Contact-LastName").css("border", "2px solid red");
        } else {
            $("#contact-lastname-error").text("");
            $("#Contact-LastName").css("border", "2px solid green");
        }
    }
    );
    $("#Contact-Email").focusout(function () {
        var email = $("#Contact-Email").val();
        if (email == "") {
            $("#contact-email-error").text("Please enter your email");
            $("#Contact-Email").css("border", "2px solid red");
        } else if (!email.match(/\S+@\S+\.\S+/)) {
            $("#contact-email-error").text("Please enter a valid email");
            $("#Contact-Email").css("border", "2px solid red");
        } else {
            $("#contact-email-error").text("");
            $("#Contact-Email").css("border", "2px solid green");
        }
    });
    $("#Message").focusout(function () {
        var message = $("#Message").val();
        if (message == "") {
            $("#Message-error").text("Please enter your message");
            $("#Message").css("border", "2px solid red");
        } else {
            $("#Message-error").text("");
            $("#Message").css("border", "2px solid green");
        }
    });
});

var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");
var toggleBtn = document.getElementById("btn");
var formBox = document.querySelector(".form-box");

function register() {
    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    toggleBtn.style.left = "110px";
    formBox.style.height = "1100px";
}

function login() {
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    toggleBtn.style.left = "0px";
    formBox.style.height = "450px";
}

document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");

    let slideIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index < 0) {
            slideIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            slideIndex = 0;
        } else {
            slideIndex = index;
        }
        carouselContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", () => showSlide(slideIndex - 1));
    nextBtn.addEventListener("click", () => showSlide(slideIndex + 1));
    setInterval(() => showSlide(slideIndex + 1), 3000);
});
document.getElementById("contact").style.display = "none";
function contact() {
    document.getElementById("contact").style.display = "flex";
    document.getElementById("about-us").style.display = "none";
}

function aboutUs() {
    document.getElementById("contact").style.display = "none";
    document.getElementById("about-us").style.display = "flex";
}