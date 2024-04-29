form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData ={
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        nickname : document.getElementById('nickname').value
    }
        
    fetch('../public/js/json/users.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data saved:', data);
    })
    .catch(error => {
        console.error('Error saving data:', error);
    });
});