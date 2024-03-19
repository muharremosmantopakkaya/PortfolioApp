document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        if (validateForm()) {
            
            submitForm();
        } else {
            
            alert('Lütfen tüm alanları doldurun.');
        }
    });

    
    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        if (name === '' || email === '' || message === '') {
            return false;
        }
        return true;
    }

    
    function submitForm() {
        
        alert('Form gönderildi!'); 
        
        document.querySelector('form').reset();
    }

 
    var galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            
            var imageDescription = item.dataset.description;
           
            showModal(imageDescription);
        });
    });

   
    function showModal(imageDescription) {
        
        var modal = document.createElement('div');
        modal.classList.add('modal');

        var modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

    
        var modalTitle = document.createElement('h3');
        modalTitle.textContent = "Prompt";
        modalContent.appendChild(modalTitle);

        var infoText = document.createElement('p');
        infoText.textContent = imageDescription;
        modalContent.appendChild(infoText);

       
        var closeButton = document.createElement('button');
        closeButton.classList.add('modal-close');
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', function() {
            modal.remove();
        });
        modalContent.appendChild(closeButton);

        modal.appendChild(modalContent);

       
        document.body.appendChild(modal);
    }
});
