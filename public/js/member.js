const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

const fetchUserInfo = async () => {
    try {
        const response = await fetch('/js/json/users.json');
        if (!response.ok) {
            throw new Error('Network Error');
        }
        const users = await response.json();
        const user = users.find(user => user.id === parseInt(userId));
        if (user) {
            displayUserInfo(user);
        } else {
            alert('Cannot find UserInfo');
        }
    } catch (error) {
        console.error('오류:', error);
        // 오류 발생 시 할 작업 추가
    }
};

const displayUserInfo = (user) => {
    const { email, nickname, id } = user;
    const userInfoContainer = document.createElement('div');
    userInfoContainer.innerHTML = `
    <div class="editUserInfo">
        <h2>회원정보수정</h2>
        <div class="profile">
          <p>프로필 사진 *</p>
          <img class="image" src="/images/profile_img.webp" />
        </div>
        <form id="form">
          <p>이메일</p>
          <p>${email}</p>
          <p>닉네임</p>
          <input type="text" name="nickname" placeholder="${nickname}"/>
          <input
            type="submit"
            value="수정하기"
            formaction="/memberedit"
          />
          <a href="/login">회원 탈퇴</a>
        </form>
        <input
          type="submit"
          value="수정완료"
          onclick="location.href='notice?id=${id}'"
        />
    </div>
    `;
    document.querySelector('.container').appendChild(userInfoContainer);
};

fetchUserInfo();


