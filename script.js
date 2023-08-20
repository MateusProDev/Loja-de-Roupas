const btnContact = document.querySelector('.tld-btn-contatos');

btnContact.addEventListener('click', function(){
    const boxContact = document.querySelector('.tld-info');
    
    boxContact.classList.toggle('tld-contact-open');
    this.classList.toggle('tld-transform-icon');
});

