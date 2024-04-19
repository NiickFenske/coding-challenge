document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form[action="/cart/add"]');
    debugger;

    var addedToast = document.getElementById('liveToast');
    var toastBootstrap = bootstrap.Toast.getOrCreateInstance(addedToast);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var product_id = form.querySelector('#product_id').value;
        var quantity = form.querySelector('#quantity').value;
        var variant_id = form.querySelector('select[name="variant_id"]').value;

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
