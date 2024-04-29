const editNotice = document.getElementById('editNotice'); 
const urlParams = new URLSearchParams(window.location.search);
const dataId = urlParams.get('id');

fetch('/js/json/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network Error');
        }
        return response.json();
    })
    .then(data => {
        const post = data.find(data => data.id === parseInt(dataId));
        if(post) {
            displayEdit(post);
            console.log(post);
        } else {
            console.log(post);
        }
    })
    .catch(error => {
        console.error('오류:', error);
    });

    function displayEdit(data) {
        const noticeEdit = document.createElement('div');
        noticeEdit.innerHTML = `
        <form id="form">
            <p><strong>제목 *</strong></p>
            <input type="text" name="email" placeholder="${data.title}"/>
            <p><strong>내용 *</strong></p>
            <textarea cols="80" rows="20" placeholder="${data.content}"></textarea>
        </form>
        <div class="image">
          <h4><strong>이미지</strong></h4>
          <div class="upload">
            <button type="button" class="upload">파일 선택</button>
            <p>파일을 선택해주세요.</p>
          </div>
        </div>
        <div class="write">
          <input
            type="submit"
            value="수정하기"
            onclick="location.href='/notice?id=${data.id}'"
          />
        </div>
        `;
        document.querySelector('.editPlace').appendChild(noticeEdit);
    }

