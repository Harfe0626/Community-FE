const login = document.getElementById('login');

document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/js/json/users.json');
        if (!response.ok) {
            throw new Error('Network Error');
        }
        const users = await response.json();
        
        const user = users.find(({ email: userEmail, password: userPassword }) => userEmail === email && userPassword === password);
        
        if (user) {
            alert(`Welcome, ${user.nickname}`);
            window.location.href=`/notice?id=${user.id}`;
        } else {
            alert('Check your Email and Password.');
        }
    } catch (error) {
        console.error('오류:', error);
        // 오류 발생 시 할 작업 추가
    }
});