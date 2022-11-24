console.log("로딩됨 ㅇㅂㅇ")
const backend_base_url = "http://127.0.0.1:8000"
const frontend_base_url = "http://127.0.0.1:5500"

var number = 1;
do {
  function showPreview(event, number){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("file-ip-"+number+"-preview");
      preview.src = src;
      preview.style.display = "block";
    } 
    
  }
  function myImgRemove(number) {
      document.getElementById("file-ip-"+number+"-preview").src = "https://i.ibb.co/ZVFsg37/default.png";
      document.getElementById("file-ip-"+number).value = null;
    }
  number++;
}
while (number < 5);







async function ImageFiles() {

  console.log('버튼 돼유?')
  const image = document.getElementById('file-ip-1').files[0]

  const formData = new FormData();
  
  formData.append("image", image)
 
  console.log(image)
  const response = await fetch(`${backend_base_url}/post/`, {
      headers: { "Authorization": "Bearer " + localStorage.getItem("access"), },
      method: 'POST',
      body: formData
  }
  )

  console.log(formData)

  if (response.status == 200) {
     alert("★업로드 완료★")
     window.location.replace(`${frontend_base_url}/image.html`);
  } else {
     alert(response.status)
  }

  return response.json()


}


