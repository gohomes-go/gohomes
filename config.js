/* 매물대장 설정 파일
   Firebase(온라인 저장소)를 만든 뒤 아래 firebase 칸을 채우면 온라인 모드로 바뀝니다.
   비어 있으면 예전처럼 이 브라우저에만 저장되는 모드로 동작합니다. */
window.GOHOMES_CONFIG = {
  // Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹) → "SDK 설정 및 구성"의 firebaseConfig 내용을 그대로 붙여넣기
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // 매물을 등록·수정할 수 있는 관리자 구글 계정 (여러 개 가능)
  adminEmails: ["gohomesgogo@gmail.com"]
};
