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
            displayDetail(post);
            console.log(post);
        } else {
            console.log(post);
        }
    })
    .catch(error => {
        console.error('오류:', error);
    });

    function displayDetail(data) {
        const noticeDetail = document.createElement('div');
        noticeDetail.innerHTML = `
        <div class="card">
            <div class="card-title" id="title">
                <h3>${data.title}</h3>
            </div>
            <div class="card-writer">
                <img class="image" src="/images/profile_img.webp" />
                <p id="writer">
                    <strong>${data.writer}</strong>
                </p>
                <span id="date">${data.date}</span>
                <div class="buttons">
                    <button
                        type="button"
                        class="edit"
                        onclick="location.href='/noticeedit?id=${data.id}'"
                    >수정</button>
                    <button
                        type="button"
                        class="delete"
                        onclick="window.history.back();"
                    >삭제</button>
                </div>
            </div>
            <div class="card-cont">
                <img class="cont" src="/images/IMG_3918.JPG" id="image" />
                <p id="content">
                    ${data.content}
                </p>
                <div class="cont-info">
                <div class="views" id="views">
                    조회수<br />${data.views}
                </div>
                <div class="comm" id="comments">
                    댓글<br />${data.comments}
                </div>
                </div>
            </div>
        </div>
        `;
        document.querySelector('.card-base').appendChild(noticeDetail);
    }

    // editNotice.addEventListener('click', () => {
    //     alert('Do you want to edit it?');
    //     window.location.href='../../views/NoticeEdit.html';
    // })
    // deleteNotice.addEventListener('click', () => {
    //     alert('Do you want to delete it?');
    //     window.location.href='../../views/Notice.html';
    // })