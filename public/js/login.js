const login = document.getElementById('login');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/js/json/users.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Error');
        }
        return response.json();
    })
    .then(users => {
            // 사용자 정보와 입력된 정보 비교
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                alert(`Welcome, ${user.nickname}`);
                window.location.href=`/notice?id=${user.id}`;
            } else {
                alert('Check your Email and Password.');
            }
    })
    .catch(error => {
        console.error('오류:', error);
        // 오류 발생 시 할 작업 추가
    });

})