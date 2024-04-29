const writeNotice = document.getElementById('writeNotice');
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

// 이벤트 리스너 화살표 함수로 변경
writeNotice.addEventListener('click', () => {
    window.location.href = '/noticewrite';
});

// 데이터 가져오는 함수
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network Error');
        }
        return await response.json();
    } catch (error) {
        console.error('오류:', error);
        return [];
    }
};

// 공지사항 카드 생성 함수
const createNoticeCard = (data) => {
    data.forEach((item) => {
        const noticeCard = document.createElement('div');
        noticeCard.innerHTML = `
            <div
                class="card"
                onclick="location.href='/noticedetail?id=${item.id}';"
                data-id="${item.id}"
            >
                <div class="card-title"><h3>${item.title}</h3></div>
                <div class="card-cont">
                    <div class="card-info">
                        <p>
                            좋아요 0 댓글 ${item.comments} 조회수 ${item.views}
                        </p>
                    </div>
                    <div class="card-date">
                        <p>${item.date}</p>
                    </div>
                </div>
                <div class="card-writer">
                    <div class="profile">
                        <img class="image" src="/images/profile_img.webp" />
                    </div>
                    <p class="writer">${item.writer}</p>
                </div>
            </div>`;
        document.querySelector('.card-base').appendChild(noticeCard);
    });
};

// 사용자 정보 표시 함수
const displayUserInfo = (user) => {
    const userInfo = document.createElement('div');
    userInfo.innerHTML = `
        <div class="Top">
            <h2>아무 말 대잔치</h2>
            <a href="memberinfo?id=${user.id}" id="userInfo"> 
                <img class="image" src="/images/profile_img.webp"/>
            </a>
        </div>
    `;
    document.querySelector('.MainTitle').appendChild(userInfo);
};

// 데이터 가져오고 처리하는 부분 비동기로 변경
(async () => {
    const users = await fetchData('/js/json/users.json');
    const user = users.find((user) => user.id === parseInt(userId));
    if (user) {
        displayUserInfo(user);
    } else {
        alert('Cannot find UserInfo');
    }

    const data = await fetchData('/js/json/data.json');
    createNoticeCard(data);
})();