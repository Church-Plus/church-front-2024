# 🎶 찬양팀을 위한 협업 웹 서비스 Church+

![ChurchPlus](https://github.com/Church-Plus/church-front-2024/assets/130584299/3e383f26-62f3-455c-8161-30db0cfd08b9)

- 배포 URL : (https://church-plus.netlify.app

<br>

## 프로젝트 소개

- Church+는 교회 찬양팀을 위한 협업 플랫폼으로 악보 관리와 콘티 제작에 도움을 주는 서비스입니다.
- 소속되어있는 찬양팀을 생성하고 과거 사용했던 악보들을 주차별로 업로드하여 저장할 수 있습니다.
- 콘티에서 전달받는 많은 정보를 사용자가 보기 쉽도록 배치하고, 관련 링크를 제공합니다.
- 악보 맞춤형 검색 기능을 통해 원하는 악보를 빠르고 쉽게 찾을 수 있습니다.

<br>

## Church+ 팀원 구성

| 기획자 | 디자이너 | 프론트엔드 개발자 | 프론트엔드 개발자 | 백엔드 개발자 | 백엔드 개발자 |
| :----: | :------: | :---------------: | :---------------: | :-----------: | :-----------: |
| 김현우 |  박지희  |      최예라       |      임종현       |    장유진     |    이정명     |

<br />

## 프론트엔드 개발자들의 개인 깃허브

|                                                                                        **최예라**                                                                                        |                                                                                         **임종현**                                                                                         |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
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

✹ **Git Branch**

- 각자 생성한 브랜치에서만 작업합니다.
- 브랜치 이름 구조는 <**/#이슈번호/본인파트/-본인이름**> 입니다. (ex. #1/MainPage-Yeara)
  <br />

### Commit 메시지 작성법

|          |                                       |                                                         |
| -------- | ------------------------------------- | ------------------------------------------------------- |
| type     | Description                           | Example                                                 |
| feat     | 새로운 기능 추가, 구현                | feat : 로그인 기능 구현                                 |
| edit     | 단순 오타 수정                        | edit : 로그인 캐시 처리 방식 수정                       |
| style    | UI작업, 스타일 관련 파일 추가 및 수정 | style : 폰트 등록                                       |
| add      | asset 파일(이미지, 아이콘 등) 추가    | add : 위젯 이미지 추가                                  |
| chore    | 파일, 경로를 옮기거나 이름 변경       | chore : feet -> feat 이름 변경                          |
| delete   | 덤프 파일 삭제                        | delete : Empty.md 파일 삭제                             |
| merge    | 브랜치 병합(merge)                    | merge : pull request #3 from LikeLionHGU/Haeun_Style/#1 |
| fix      | 버그 픽스                             | fix : Color 버그 수정                                   |
| docs     | 문서 작업                             | docs : Readme 작성                                      |
| refactor | 코드 리팩토링                         | refactor : 변수명 수정                                  |
| model    | 데이터베이스(모델) 작업               | model : 데이터 모델 생성                                |
| init     | 프로젝트 생성                         | init : 프로젝트 생성                                    |
| test     | 테스트 케이스 생성                    | test: 테스트 케이스 생성                                |
| 빌드관련 |                                       |                                                         |
| build    | 재빌드                                | build: 동일버전 재빌드(x.xx)                            |
| version  | 버전 업                               | version : 버전(2.0.0) 업데이트                          |

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
- API 연결 : 2022-02-21 ~ 2022-02-24

<br>

### 작업 관리

- Notion과 Issues를 사용하여 진행 상황을 공유했습니다.
- 매일 전체 회의를 진행하며 작업의 방향성과 소통 내용을 노션에 정리하였습니다.

<br />

## 5. 주요 기능 소개

### 팀 생성 및 선택 페이지

| ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/5565b2a6-ddf8-41ff-a81f-1dfab5bbc307) | ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/f2c21e5e-1748-4a6a-ad3c-9b1706afbade) | ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/d4ef91fa-8093-4552-9e75-5f361cf78ae6) | ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/71331da9-56c8-4b50-a759-b532374cd891) |
| :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
|                                                  팀 선택 페이지                                                  |                                               팀 이름 입력 페이지                                                |                                             사용자 이름 입력 페이지                                              |                                            사용자 포지션 선택 페이지                                             |

- 구글 로그인을 통해 간편하게 로그인을 진행할 수 있습니다.
- 기존에 생성한 팀이 있다면, 팀 이름을 클릭하여 해당 찬양팀에 공유되어있는 악보를 확인할 수 있습니다.
- 기존 팀이 존재하지 않는다면 팀 생성 버튼을 클릭하여 팀 이름, 사용자 이름, 사용자 포지션을 선택하여 새로운 팀을 생성할 수 있습니다.
  <br/>

### 메인페이지

| <img width="400" alt="메인페이지" src="https://github.com/Church-Plus/church-front-2024/assets/130584299/23503698-124e-4685-98f9-44345d906a43"> |
| :---------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                Churh+ 메인화면 페이지                                                                 |

- 유저의 이름과 포지션을 좌측에 표시합니다.
- 유저가 저장한 모든 악보 파일을 한 페이지에 볼 수 있도록 구현했습니다.
  <br/>

### Church+ 웹서비스 주요 기능

| ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/d7823215-49d5-4cc1-8391-643d8bdf0934) | ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/0a215058-82e8-4744-9fa6-b662a5b40bfb) | ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/28436188-3489-4154-892e-8707a45d0b03) | ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/f49ea8de-6c19-4d9b-9c82-69a09f8c11c4) |
| :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
|                                               악보 제목별 검색기능                                               |                                                악보 Key 검색기능                                                 |                                                  폴더 생성기능                                                   |                                                  악보 생성기능                                                   |

- 메인페이지, 폴더 페이지, 폴더 안 악보 페이지에서 폴더 제목, 악보 제목별 검색 기능을 제공합니다.
- 드롭다운으로 검색하고자하는 악보의 Key를 검색하는 기능을 제공하여, 보다 편리하게 키 별로 악보를 정렬하여 찾을 수 있습니다.
- 제공되는 월 폴더 안에 사용자가 원하는 폴더를 생성하고, 폴더 안에 악보를 추가할 수 있도록 하였습니다.
  <br/>

### 폴더, 악보 CRUD 기능

| ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/b6c19c96-ffb5-4aff-951b-16e2bbe15cda) | ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/f9a13517-6e17-43fe-929f-a4deb0e2d332) | ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/1968e920-9d18-4391-8353-071f54675e24) | ![image](https://github.com/Church-Plus/church-front-2024/assets/130584299/65c09e52-9f81-4ce7-9830-e11f0a8d9495) |
| :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
|                                                 악보 업로드 모달                                                 |                                                  악보 확인 모달                                                  |                                                  파일 삭제 모달                                                  |                                                  파일 수정 모달                                                  |

- 악보 파일을 업로드 할 때, 악보 제목, 악보의 Key, 참고 영상 link, 안내자 멘트를 추가할 수 있도록 구현했습니다.
- 모달창을 띄워 유저가 확인하고자 하는 악보를 보여줍니다.
- 파일을 삭제하기 전 모달로 컨펌을 하는 과정을 추가하였고, 수정 기능을 구현했습니다.
  <br/>

## 6. 개선 목표

- 회원가입 기능
- 팀별 코드를 통해 기존에 있는 팀에 참여할 수 있는 기능
- 사용자 프로필 페이지 이미지 선택 및 업로드 기능
- 컴포넌트화로 재사용성 높이기 등

<br/>

## 7. 프로젝트 후기

### 👩‍💻 최예라

기획, 디자인, 프론트, 백엔드 모두 함께 작업하는 첫 프로젝트였습니다. 첫 프로젝트이다보니 각 트랙과 어떻게 소통을 해야할지 막연했던 부분들이 있었는데 3주의 시간동안 직접 협업을 경험하면서 어떤 소통이 좋은 소통인지 명확하게 배울 수 있었던 것 같습니다. 개인적으로 아쉬웠던 부분은 초기 폴더 구조를 설정할 때 더 멀리 보지 않고 설정하다보니, 페이지가 많아질수록 정리가 잘 되지 않았던 것 같습니다. 기간 내에 기능을 구현해야 하니 코드의 가독성과 재사용성이 떨어지는 부분도 있겠네요. 프로젝트를 진행하면서 부족한 부분과 앞으로 공부해나가야 할 분야들을 알 수 있었던 기회였고, 추후 리팩토링을 하는 과정을 가지면서 더 깔끔하고 효율적인 코드를 짜고 싶습니다. 3주동안 밤낮으로 고생한 팀원분들 모두 고생하셨습니다!!

### 🧑‍💻 임종현

참 많은 것을 얻어가는 협업이었습니다. 너무 좋은 팀원들을 만나서 행복하게 일할 수 있었고, 어려웠지만 각 트랙과 같이 부딪히면서 소통하는 법을 배운 것 같습니다. 개인적으로 개발속도가 느려서 개발이 늦게 끝난게 너무 아쉽습니다. 앞으로는 더 열심히 그리고 부지런히 개발해서 여유있게 끝내고 계속해서 발전시킬 수 있는 부분들을 발전시키고 싶습니다. 팀원분들 너무나도 고생많으셨고, 앞으로도 행복하게 같이 일했으면 좋겠습니다.

<br/>
