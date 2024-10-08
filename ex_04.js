document.querySelectorAll('.plus-btn, .minus-btn, .delete-btn, .like-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        document.querySelectorAll('.plus-btn').forEach(button => {
            button.onclick = function () {
                const quantityInput = this.parentElement.querySelector('input[type="text"]'); 
                quantityInput.value = parseInt(quantityInput.value) + 1; 
            };
        });
        document.querySelectorAll('.minus-btn').forEach(button => {
            button.onclick = function () {
                const quantityInput = this.parentElement.querySelector('input[type="text"]'); 
                if (parseInt(quantityInput.value) > 1) {
                    quantityInput.value = parseInt(quantityInput.value) - 1; 
                }
            };
        });
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.onclick = function () {
                this.closest('.item').remove(); 
            };
        });
        if (btn.classList.contains('like-btn')) btn.classList.toggle('is-active');
    });
});
