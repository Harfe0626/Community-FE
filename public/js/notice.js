const writeNotice = document.getElementById('writeNotice'); 
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

writeNotice.addEventListener('click', () => {
    window.location.href='/noticewrite';
})

fetch('/js/json/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Error');
        }
        return response.json();
    })
    .then(data => {
        data.forEach((a, i) => {
            const noticeCard = document.createElement('div');
            noticeCard.innerHTML = `
            <div
                class="card"
                onclick="location.href='/noticedetail?id=${a.id}';"
                data-id="${a.id}"
            >
                <div class="card-title"><h3>${a.title}</h3></div>
                <div class="card-cont">
                    <div class="card-info">
                        <p>
                            좋아요 0 댓글 ${a.comments} 조회수 ${a.views}
                        </p>
                    </div>
                    <div class="card-date">
                        <p>${a.date}</p>
                    </div>
                </div>
                <div class="card-writer">
                    <div class="profile">
                        <img class="image" src="/images/profile_img.webp" />
                    </div>
                    <p class="writer">${a.writer}</p>
                </div>
            </div>`;
            document.querySelector('.card-base').append(noticeCard);
        });
    })
    .catch(error => {
        console.error('오류:', error);
    });

fetch('/js/json/users.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Error');
        }
        return response.json();
    })
    .then(users => {
            const user = users.find(users => users.id === parseInt(userId));
            if (user) {
                takeUserInfo(user);
            } else {
                alert('Cannot find UserInfo');
            }
    })
    .catch(error => {
        console.error('오류:', error);
        // 오류 발생 시 할 작업 추가
    });

    function takeUserInfo(users) {
        const userInfo = document.createElement('div');
        userInfo.innerHTML = `
        <div class="Top">
            <h2>아무 말 대잔치</h2>
            <a href="memberinfo?id=${users.id}" id="userInfo"> 
                <img class="image" src="/images/profile_img.webp"/>
                <!-- http://localhost:3000/images/profile_img.webp -->
            </a>
        </div>
        `;
        document.querySelector('.MainTitle').appendChild(userInfo);
    }
