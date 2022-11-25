console.log("로딩됨 ㅇㅂㅇ");
const backend_base_url = "http://127.0.0.1:8000";
const frontend_base_url = "http://127.0.0.1:5500";

var number = 1;
do {
  function showPreview(event, number) {
    if (event.target.files.length > 0) {
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("file-ip-" + number + "-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  }
  function myImgRemove(number) {
    document.getElementById("file-ip-" + number + "-preview").src =
      "https://i.ibb.co/ZVFsg37/default.png";
    document.getElementById("file-ip-" + number).value = null;
  }
  number++;
} while (number < 5);

async function ImageFiles() {
  console.log("버튼 돼유?");
  const image = document.getElementById("file-ip-1").files[0];
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const picture = document.getElementById("picture").value;
  const image_style = document.getElementById("image_style").value;
  const formData = new FormData();

  console.log(title);

  formData.append("title", title);
  formData.append("content", content);
  formData.append("picture", picture);
  formData.append("image_style", image_style);
  formData.append("picture", image);

  console.log(formData);
  const response = await fetch(`${backend_base_url}/post/article/`, {
    headers: { Authorization: "Bearer " + localStorage.getItem("access") },
    method: "POST",
    body: formData,
  });

  console.log(formData);

  if (response.status == 200) {
    alert("★업로드 완료★");
    window.location.replace(`${frontend_base_url}/image.html`);
  } else {
    alert(response.status);
  }

  return response.json();
}
$(document).ready(function () {
  $("#cards-boxss").empty();
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/post/article/", //사용자가 가져온 API를 넣으세요
    data: {},
    success: function (response) {
      let article = response;
      for (let i = 70; i < 80; i++) {
        let title = article[i]["title"];
        let picture_url = article[i]["picture"];
        console.log(picture_url);
        let content = article[i]["content"];
        let article_id = article[i]["id"];

        let element_card = document.createElement("div");
        element_card.setAttribute("class", "card");

        let link = document.createElement("a");
        // link.setAttribute("href", "여기에 주소 넣으세요");
        let img = document.createElement("img");
        img.setAttribute("class", "card-img-top");
        let img_src = backend_base_url + `/${picture_url}`;
        console.log(img_src);
        img.setAttribute("src", img_src);
        img.setAttribute("alt", title);
        link.appendChild(img);

        let element_card_body = document.createElement("div");
        element_card_body.setAttribute("class", "card_body");
        let card_body_title = document.createTextNode(title);
        element_card_body.appendChild(card_body_title);

        element_card.appendChild(link);
        element_card.appendChild(element_card_body);
        $("#cards-boxss").append(element_card);

        element_card.setAttribute("onclick", "articleDetail(this.id)");
      }
    },
  });
});
