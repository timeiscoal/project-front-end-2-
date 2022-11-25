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






// // 필터 고르기
// async function chageLangSelect(){
//   console.log('qjs')
//   const langSelect = document.getElementById("selectbox");
   
//   // select element에서 선택된 option의 value가 저장된다.
//    selectValue = langSelect.options[langSelect.selectedIndex].value;
//    //console.log(22222222,selectValue)

//   // select element에서 선택된 option의 text가 저장된다.
//    selectText = langSelect.options[langSelect.selectedIndex].text;
//    //console.log(111111111,selectText)
//    langSelect.setAttribute("onclick", "filter_list()")
 
// }





// // 필터 데이터 불러오기
// async function filter_list() {
//   // 해당 url로 요청보내고 응답데이터 받기 : fetch
//   const response = await fetch('http://127.0.0.1:8000/post/article/', {
//       // headers:{
//       //     "Authorization":"Bearer "+localStorage.getItem("access")
//       // },
//       method:'GET'
//   })
//   // Promise 안에 담긴 데이터 꺼내오기
//   .then(response => {
//       return response.json();
//   }).then(data => {
//       return data
//   });
 

//   const filters = document.getElementById("selectbox"); // 각각의 필터이름,이미지가 담긴 div를 추가할 부모 div
//   console.log("필터",filters)

//   for (i = 0; i < response.length; i++) {
//       //console.log('여기까지',response)

//       const filter_pk = response[i]['category']
//       //console.log('찍히면',filter_pk)

//       const options = document.createElement("option")
//       options.id = filter_pk
//       //console.log('아이디',options.id)
//       options.innerText = response[i]['category']
//       //console.log('텍스트',options.innerText)
//       options.value = response[i]['category'] 
//       console.log('밸류',options.value)
     
//       options.setAttribute("onclick", "ImageFiles()")
//       filters.append(options)
//       console.log('셀렉트 박스----------',filters)
//       console.log('옵션ㄴㄴㄴㄴㄴㄴㄴㄴ',options)      

//   }
      
//       }














// // 이미지 업로드
// async function ImageFiles() {

//   console.log('버튼 돼유?')
//   const picture = document.getElementById('file-ip-1').files[0]
 
//   const image_style = document.getElementById('filter_pk').value


//   console.log('필터 왜 자꾸 이것만 나와',image_style)
//   console.log('사진',picture)

  

//   const formData = new FormData();
  
//   formData.append("image", picture)
//   formData.append("category", image_style)

  
//   const response = await fetch(`${backend_base_url}/post/article/`, { 
//       headers: { "Authorization": "Bearer " + localStorage.getItem("access"), },
//       method: 'POST',
//       body: formData
//   }
//   )

//   console.log('폼데이터?!',formData)
  
//   if (response.status == 200) {
//      alert("★업로드 완료★")
//      window.location.replace(`${frontend_base_url}/image.html`);
//   } else {
//      alert(response.status)
//   }

//   return response.json()

// }

