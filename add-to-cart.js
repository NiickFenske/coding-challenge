document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form[action="/cart/add"]');

    var addedToast = document.getElementById('liveToast');
    var toastBootstrap = bootstrap.Toast.getOrCreateInstance(addedToast);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
 
        var product_id = form.querySelector('#product_id').value;
        var quantity = form.querySelector('#quantity').value;
        var variant_id = document.querySelector('.variantSwatches .variantSwatch.selected').dataset.variantId;

        let formData = {
            'items': [{
                'id': product_id,
                'quantity': quantity,
                'variant_id': variant_id
            }]
        }

        fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            toastBootstrap.show();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var variantSwatches = document.querySelectorAll('.variantSwatch');

    variantSwatches.forEach(function(swatch) {
        swatch.addEventListener('click', function() {
            variantSwatches.forEach(function(swatch) {
                swatch.classList.remove('selected');
            });
            swatch.classList.add('selected');
        });
    });
});