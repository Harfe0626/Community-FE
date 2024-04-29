form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        nickname: document.getElementById('nickname').value
    };

    try {
        const response = await fetch('/js/json/users.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Data saved:', data);
    } catch (error) {
        console.error('Error saving data:', error);
    }
});