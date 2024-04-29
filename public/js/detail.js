const urlParams = new URLSearchParams(window.location.search);
const dataId = urlParams.get('id');

const fetchData = async () => {
    try {
        const response = await fetch('/js/json/data.json');
        if (!response.ok) {
            throw new Error('Network Error');
        }
        const data = await response.json();
        const post = data.find(item => item.id === parseInt(dataId));
        if (post) {
            displayDetail(post);
            console.log(post);
        } else {
            console.log(post);
        }
    } catch (error) {
        console.error('오류:', error);
    }
};

const displayDetail = (data) => {
    const { title, writer, date, content, views, comments, id } = data;
    const noticeDetail = document.createElement('div');
    noticeDetail.innerHTML = `
        <div class="card">
            <div class="card-title" id="title">
                <h3>${title}</h3>
            </div>
            <div class="card-writer">
                <img class="image" src="/images/profile_img.webp" />
                <p id="writer">
                    <strong>${writer}</strong>
                </p>
                <span id="date">${date}</span>
                <div class="buttons">
                    <button
                        type="button"
                        class="edit"
                        onclick="location.href='/noticeedit?id=${id}'"
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
                    ${content}
                </p>
                <div class="cont-info">
                <div class="views" id="views">
                    조회수<br />${views}
                </div>
                <div class="comm" id="comments">
                    댓글<br />${comments}
                </div>
                </div>
            </div>
        </div>
    `;
    document.querySelector('.card-base').appendChild(noticeDetail);
};

fetchData();


    // editNotice.addEventListener('click', () => {
    //     alert('Do you want to edit it?');
    //     window.location.href='../../views/NoticeEdit.html';
    // })
    // deleteNotice.addEventListener('click', () => {
    //     alert('Do you want to delete it?');
    //     window.location.href='../../views/Notice.html';
    // })