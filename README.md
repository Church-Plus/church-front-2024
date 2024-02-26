# 🎶 찬양팀을 위한 협업 웹 서비스 Church+

![ChurchPlus](https://github.com/Church-Plus/church-front-2024/assets/130584299/3e383f26-62f3-455c-8161-30db0cfd08b9)

- 배포 URL : .netlify.app

<br>

## 프로젝트 소개

- Church+는 교회 찬양팀을 위한 협업 플랫폼으로 악보 관리와 콘티 제작에 도움을 주는 서비스입니다.
- 소속되어있는 찬양팀을 생성하고 과거 사용했던 악보들을 주차별로 업로드하여 저장할 수 있습니다.
- 콘티에서 전달받는 많은 정보를 사용자가 보기 쉽도록 배치하고, 관련 링크를 제공합니다. 
- 악보 맞춤형 검색 기능을 통해 원하는 악보를 빠르고 쉽게 찾을 수 있습니다.

<br>

### Church+ 팀원 구성
|  기획자   |    디자이너     | 프론트엔드 개발자   | 프론트엔드 개발자     | 백엔드 개발자     | 백엔드 개발자     | 
| :------: |  :------: | :------: |  :------: | :------: |  :------: | 
|   김현우  |  박지희    | 최예라    | 임종현    | 장유진    | 이정명    | 

<br />

## 프론트엔드 개발자들의 개인 깃허브 

| **최예라** | **임종현** | 
| :------: |  :------: | 
| [<img src="https://github.com/Church-Plus/church-front-2024/assets/130584299/6d107e34-9a32-48ca-bfaf-bb9c6f5e7105" height=160 width=160> <br/> @YearaChoi](https://github.com/YearaChoi) | [<img src="https://github.com/Church-Plus/church-front-2024/assets/130584299/d8ec3e93-3b24-4808-b27c-1252c8ca0364" height=160 width=160> <br/> @dkrehd0519](https://github.com/dkrehd0519) | 

</div>

<br>

## 1. 개발 환경

- Front : HTML, React, styled-components, prettier
- 버전 및 이슈관리 : Github, Github Issues
- 협업 툴 : Discord, Notion
- 서비스 배포 환경 : Netlify

<br>

## 2. 개발 가이드라인 

### 이슈 작성

✹ **Git Issue**

- 작업할 기능에 대한 issue를 작성합니다.
- issue 제목은 **[타입] - 설명**으로 통일합니다. (ex. [Style] - 텍스트 스타일 추가)
- Assignees에는 작업을 맡은 사람을 태그합니다.
- Labels에는 해당 작업과 맞는 유형을 태그합니다.
- 설명란에는 어떤 작업을 할 예정인지, 관련된 이슈번호가 있는지 참고한 내용이 있는지 등 필요한 내용을 적습니다.
<br />

### 브랜치 생성

✹  **Git Branch**

- 각자 생성한 브랜치에서만 작업합니다.
- 브랜치 이름 구조는 <**/#이슈번호/본인파트/-본인이름**> 입니다. (ex. #1/MainPage-Yeara)
<br />

### Commit 메시지 작성법

|  |  |  |
| --- | --- | --- |
| type | Description | Example |
| feat | 새로운 기능 추가, 구현 | feat : 로그인 기능 구현 |
| edit | 단순 오타 수정 | edit : 로그인 캐시 처리 방식 수정 |
| style | UI작업, 스타일 관련 파일 추가 및 수정 | style : 폰트 등록 |
| add | asset 파일(이미지, 아이콘 등) 추가 | add : 위젯 이미지 추가 |
| chore | 파일, 경로를 옮기거나 이름 변경 | chore : feet -> feat 이름 변경 |
| delete | 덤프 파일 삭제 | delete : Empty.md 파일 삭제 |
| merge | 브랜치 병합(merge) | merge : pull request #3 from LikeLionHGU/Haeun_Style/#1 |
| fix | 버그 픽스 | fix : Color 버그 수정 |
| docs | 문서 작업 | docs : Readme 작성 |
| refactor | 코드 리팩토링 | refactor : 변수명 수정 |
| model | 데이터베이스(모델) 작업 | model : 데이터 모델 생성 |
| init | 프로젝트 생성 | init : 프로젝트 생성 |
| test | 테스트 케이스 생성 | test: 테스트 케이스 생성 |
| 빌드관련 |  |  |  
| build | 재빌드 | build: 동일버전 재빌드(x.xx) |
| version | 버전 업 | version : 버전(2.0.0) 업데이트 |

<br />

## 3. 프로젝트 구조

```
src
 ┣ apis
 ┃ ┣ createFolder.jsx
 ┃ ┣ createGroup.jsx
 ┃ ┣ createMusic.jsx
 ┃ ┣ sendAccessTokenToBackend.jsx
 ┃ ┗ updateMusic.jsx
 ┣ assets
 ┃ ┣ Icons
 ┃ ┃ ┣ FolderEdit.svg
 ┃ ┃ ┣ GoogleLogin.svg
 ┃ ┃ ┣ Vector.svg
 ┃ ┃ .
 ┃ ┃ .
 ┃ ┃ .
 ┃ ┣ Logos
 ┃ ┃ ┣ C+_Logo.svg
 ┃ ┃ ┣ ChoseYourTeam..svg
 ┃ ┃ ┗ SelectTeamC+_Logo.svg
 ┃ ┣ bgImg
 ┃ ┃ ┣ LoginBackground1.svg
 ┃ ┃ ┣ LoginBackground2.svg
 ┃ ┃ ┣ LoginBackground3.svg
 ┃ ┃ ┣ LoginBackground4.svg
 ┃ ┃ ┗ LoginBackground5.svg
 ┃ ┣ colors
 ┃ ┃ ┗ palette.jsx
 ┃ ┣ commonStyle
 ┃ ┃ ┣ AlreadyHaveTeam.svg
 ┃ ┃ ┣ AlreadyHaveTeamHover.svg
 ┃ ┃ ┣ CompleteButton.svg
 ┃ ┃ .
 ┃ ┃ .
 ┃ ┃ .
 ┃ ┣ fonts
 ┃ ┃ ┣ GlobalStyle.jsx
 ┃ ┃ ┣ Pretendard-Thin.ttf
 ┃ ┃ ┣ Pretendard-Thin.woff
 ┃ ┃ ┗ Pretendard-Thin.woff2
 ┃ ┣ groupImg
 ┃ ┃ ┣ 1.svg
 ┃ ┃ ┣ groupImg2.svg
 ┃ ┃ ┗ groupImg3.svg
 ┃ ┣ pages
 ┃ ┃ ┗ SelectTeamPage.svg
 ┃ ┗ positionImg
 ┃ ┃ ┣ 10_Pastor.svg
 ┃ ┃ ┣ 1_Leader.svg
 ┃ ┃ ┣ 2_MainCindy.svg
 ┃ ┃ .
 ┃ ┃ .
 ┃ ┃ .
 ┣ components
 ┃ ┣ Common
 ┃ ┃ ┣ Common.jsx
 ┃ ┃ ┣ FileEditDropdown.jsx
 ┃ ┃ ┣ SelectUpdateDelete.jsx
 ┃ ┃ ┗ SwitchToggle.jsx
 ┃ ┣ Main
 ┃ ┃ ┣ DropdownMenu.jsx
 ┃ ┃ ┣ FirstMain.jsx
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┣ Menu.jsx
 ┃ ┃ ┗ SelectDropdown.jsx
 ┃ ┗ Modal
 ┃ ┃ ┣ CreateFolderModal.jsx
 ┃ ┃ ┣ DeleteFileModal.jsx
 ┃ ┃ ┣ FolderDeleteModal.jsx
 ┃ ┃ ┣ FolderUpdateModal.jsx
 ┃ ┃ ┣ MuiModal.jsx
 ┃ ┃ ┣ ReadModal.jsx
 ┃ ┃ ┣ UPdateFileModal.jsx
 ┃ ┃ ┣ UploadModal.jsx
 ┃ ┃ ┗ UploadModalSelectDropdown.jsx
 ┣ pages
 ┃ ┣ CreateTeamPage
 ┃ ┃ ┣ InputName.jsx
 ┃ ┃ ┣ InputTeamName.jsx
 ┃ ┃ ┣ SelectPosition.jsx
 ┃ ┃ ┗ SelectTeamPage.jsx
 ┃ ┣ HomePage
 ┃ ┃ ┣ FirstMainPage.jsx
 ┃ ┃ ┣ FolderPage.jsx
 ┃ ┃ ┗ MonthPage.jsx
 ┃ ┗ LoginPage
 ┃ ┃ ┣ GoogleLogin.jsx
 ┃ ┃ ┗ Loading.jsx
 ┣ App.css
 ┣ App.js
 ┣ index.css
 ┗ index.js

```

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2022-02-05 ~ 2022-02-24
- UI, 기능 구현 : 2022-02-10 ~ 2022-02-22
- API 연결 : 2022-02-21 ~ 2022-02-24

<br>

### 작업 관리

- Notion과 Issues를 사용하여 진행 상황을 공유했습니다.
- 매일 전체 회의를 진행하며 작업의 방향성과 소통 내용을 노션에 정리하였습니다.

<br />

## 5. 개선 목표

<br/>

## 6. 프로젝트 후기

### 👩‍💻 최예라

### 🧑‍💻 임종현

<br/>

