// const backend_base_url = "http://127.0.0.1:8000";
// const frontend_base_url = "http://127.0.0.1:5500";

// //회원가입
// async function handleSign() {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   console.log(email, password);

//   const response = await fetch("http://127.0.0.1:8000/users/signup/", {
//     headers: {
//       "content-type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({
//       email: email,
//       password: password,
//     }),
//   });

//   console.log(response);
//   if (response.status == 200) {
//     alert("회원가입 성공");
//     window.location.href = "http://127.0.0.1:5500/login.html";
//   }
// }

// //로그인
// async function handleLogin() {
//   console.log("버튼 눌러짐"); //버튼확인
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   console.log(email, password); // 이메일,패스워드 되는지 확인

//   const response = await fetch("http://127.0.0.1:8000/users/api/token/", {
//     headers: {
//       "content-type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({
//       email: email,
//       password: password,
//     }),
//   });

//   // aeccess, refresh
//   const response_json = await response.json();

//   console.log(response_json);
//   if (response.status == 200) {
//     localStorage.setItem("access", response_json.access);
//     localStorage.setItem("refresh", response_json.refresh);

//     // PAYLOAD
//     const accessToken = response_json.access;
//     const base64Url = accessToken.split(".")[1];
//     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//     const jsonPayload = decodeURIComponent(
//       atob(base64)
//         .split("")
//         .map(function (c) {
//           return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//         })
//         .join("")
//     );

//     localStorage.setItem("payload", jsonPayload);
//     alert("로그인 됐어욤");
//     window.location.href = "http://127.0.0.1:5500/main.html";
//   } else {
//     //로그인 실패시
//     alert("로그인 다시 확인해주세염");
//   }
// }

// //로그아웃
// async function logout() {
//   localStorage.removeItem("payload");
//   localStorage.removeItem("access");
//   localStorage.removeItem("refresh");

//   window.location.replace(`${frontend_base_url}login.html`);
// }

const backend_base_url = "http://127.0.0.1:8000";
const frontend_base_url = "http://127.0.0.1:5500";

//회원가입
async function handleSign() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);

  const response = await fetch("http://127.0.0.1:8000/users/signup/", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  console.log(response);
  if (response.status == 200) {
    alert("회원가입 성공");
    window.location.href = "http://127.0.0.1:5500/login.html";
  }
}

//로그인
async function handleLogin() {
  console.log("버튼 눌러짐"); //버튼확인
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password); // 이메일,패스워드 되는지 확인

  const response = await fetch("http://127.0.0.1:8000/users/api/token/", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  // aeccess, refresh
  const response_json = await response.json();

  console.log(response_json);
  if (response.status == 200) {
    localStorage.setItem("access", response_json.access);
    localStorage.setItem("refresh", response_json.refresh);

    // PAYLOAD
    const accessToken = response_json.access;
    const base64Url = accessToken.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    localStorage.setItem("payload", jsonPayload);
    alert("로그인 됐어욤");
    window.location.href = "http://127.0.0.1:5500/main.html";
  } else {
    //로그인 실패시
    alert("로그인 다시 확인해주세염");
  }
}

//로그아웃
async function handleIogout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("payload");
}
