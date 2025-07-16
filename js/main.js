document.addEventListener('DOMContentLoaded', function() {
    var agreementCheckbox = document.getElementById('cookieAgreement');
    var registrationForm = document.getElementById('registrationForm');
    
    agreementCheckbox.addEventListener('change', function() {
        if (agreementCheckbox.checked) {
            localStorage.setItem('cookieAgreement', 'true');
        } else {
            localStorage.removeItem('cookieAgreement');
        }
    });

    registrationForm.addEventListener('submit', function(event) {
        var cookieAgreement = localStorage.getItem('cookieAgreement');
        
        if (!cookieAgreement) {
            event.preventDefault();
            alert('You must agree to the use of cookies.');
        }
    });
});
