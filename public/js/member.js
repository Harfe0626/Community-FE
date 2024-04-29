const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

fetch('/js/json/users.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Network Error');
    }
    return response.json();
})
.then(users => {
    const user = users.find(users => users.id === parseInt(userId));
    if(user) {
        displayUserInfo(user);
    } else {
        alert('Cannot find UserInfo');
    }
})
.catch(error => {
    console.error('오류:', error);
    // 오류 발생 시 할 작업 추가
});

function displayUserInfo(users) {
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
          <p>${users.email}</p>
          <p>닉네임</p>
          <input type="text" name="nickname" placeholder="${users.nickname}"/>
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
          onclick="location.href='notice?id=${users.id}'"
        />
        </div>
    `;
    document.querySelector('.container').appendChild(userInfoContainer);
}