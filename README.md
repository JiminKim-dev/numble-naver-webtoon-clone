# [Numble] react-native로 네이버웹툰 만들기 챌린지

![](https://oopy.lazyrockets.com/api/v2/member/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1fc1c986-6747-4deb-8f9e-a81058dafad3%2Freact-native_%25EB%2584%25A4%25EC%259D%25B4%25EB%25B2%2584%25EC%259B%25B9%25ED%2588%25B0.png&blockId=cfba133f-4147-4e47-89a9-41ffbdad7432&t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0bmFtZSI6Ind3dy5udW1ibGUuaXQiLCJyb2xlIjoiYXBpIiwiaWF0IjoxNjc4NjQzNTQzLCJleHAiOjE2Nzg2NTQzNDN9.HLIDgKr35oC_u4RyIv47P2lXxAW2Qgob3TTh2XbMvLE)

- 일정 : 23.02.28 ~ 23.03.12
- 내용 : 네이버 웹툰의 목록 화면을 표현해보는 [챌린지](https://www.numble.it/31b52cfb-f13a-4a77-b33f-584683835ba8)

## 실행 방법

```
yarn install
yarn start
```

## 폴더 구조

```
numble-naver-webtoon-clone
┣ src
┃ ┣ assets - 이미지
┃ ┣ components - 기타 컴포넌트
┃ ┣ hooks - 커스텀 훅
┃ ┣ navigations - React navigation
┃ ┣ screens - screen 컴포넌트
┃ ┣ styles - 스타일과 관련된 상수, 함수
┃ ┣ types - 타입
┃ ┗ utils - 기타 유틸 함수
┣ .eslintrc.js
┣ .gitignore
┣ .prettierrc.js
┣ App.tsx
┣ README.md
┣ app.json
┣ babel.config.js
┣ package.json
┣ tsconfig.json
┗ yarn.lock
```

- components: 재사용이 가능하거나 screen에 있기에 코드량이 많은 경우 분리했습니다.
- types: 타입간 결합이 필요하거나 다양한 곳에서 사용하는 타입의 경우 해당 폴더에 분리했습니다.

## 구현 내용

- [x] 1. 상단 헤더 (쿠키 , 돋보기 고정 )
- [x] 2. 스크롤시 Header , Footer 노출 , 최상단 스크롤시 미노출
- [x] 3. 가로 swipe 화면 구현
- [x] 4. 요일별 목록 화면 ( 좌 우 swipe가능)
- [x] 5. 숫자가 이미지 위로 노출되도록 가로 슬라이드 구현
- [x] 6. 3가지 묶음 가로 슬라이드구현
- [x] 7. 하단 탭 구성 ( Main , My )
- [x] 8. 하단 탭 마이 부분 좋아요 목록 구현 (상단탭 x) - 실제 관심 목록과 연관 x, 랜덤데이터 노출
- [x] 9. 상세 페이지 ( 관심 버튼클릭시 등록하겠냐 묻는 alert 노출)
- [ ] 10. 상세 설명 처음 가려짐, arrow 버튼 클릭시 보여지게 노출

| WebtoonScreen                                                                                                                 | Myscreen                                                                                                                      | DetailScreen                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/85747667/224565563-38a9f548-e9dd-44d1-b74a-53d5ea95f491.gif" width="40%"> | <img src="https://user-images.githubusercontent.com/85747667/224566128-3f7f1265-70f9-4e5e-ac17-4e91de4f25eb.gif" width="40%"> | <img src="https://user-images.githubusercontent.com/85747667/224566210-2fb9a8ca-69c7-4393-bdf0-562133253ff3.gif" width="40%"> |

### 미구현 내용

- open api fetching
- 요일 swipe시 스크롤 위치 동기화
- 컴포넌트 최적화
