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

    

    
    const image_container = document.getElementById("user-box");

  

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

          image_container.insertAdjacentHTML("beforeend",new_image)
        }
      
      } 

//업로드 페이지 이동
  async function imageUload(){
    console.log('버튼 클릭')
      window.location.href="http://127.0.0.1:5500/image.html"

    }

// 로그아웃
async function handleLogout() {
  window.localStorage.clear(); //로컬스토리지토큰 삭제
  window.location.href="http://127.0.0.1:5500/login.html"
}

