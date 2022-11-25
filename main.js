console.log("ㅇㅁㅇ");

window.onload = async function loadArticles() {
  const response = await fetch("http://127.0.0.1:8000/post/article/", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("access"),
    },
  });

  response_json = await response.json();

  image_json = response_json[0];
  //console.log('제이슨?',response_json)
  //console.log('이미지 왜 안나와',image_json)
  const image_container = document.getElementById("user-box");
  //console.log(image_container)

  for (i = 0; i < response_json.length; i++) {
    const image = response_json[i]["picture"];

    const new_image = `<div class='thumbnail' id="user-box">
            <div class='photoContainer'>
              <a href='#'>
                <img src='http://127.0.0.1:8000/${image}'/>
                <div class='photoInfo'>
                  <h3>"Loneliness of autumn"</h3>
                  <span class='paintingDate'>Leonid Afremov</span>
                </div>          
              </a>
            </div>
          </div>`;

    image_container.insertAdjacentHTML("beforeend", new_image);
  }
};

//게시글 삭제 함수
// console.log("로드됨")

// function handleDelete(d) {
//     const singleItem = document.getElementById(d.id)
//     singleItem.remove()
// }

// // const content = itemInput.value
// // if (content) {
//     const myList = document.getElementById('gallery')
//     const listItem = document.getElementsById('user-box')
//     console.log(myList.getElementsByTagName('div').length)
//     let list_number = myList

//     const deleteButton = document.createElement('Button')
//     deleteButton.innerHTML = "삭제"
//     deleteButton.setAttribute("onclick", "handleDelete(this)")
//     deleteButton.setAttribute("id", '${list_number}th-item-delete-button')
//     newList.appendChild(deleteButton)
