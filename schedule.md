[2021.10.7]

-   6h
-   프로젝트 기획
-   초기 프로젝트 설정 중 사용 라이브러리 학습중
    -   파이어베이스 : 기본 사용법
    -   Redux : 개념 학습 중

[2021.10.8]

-   6h
-   contextAPI, Redux 학습

[2021.10.9]

-   6h
-   Redux saga, TypeScript 학습

[2021.10.10]

-   10h
-   TypeScript 학습
-   프로젝트 초기셋팅 (TypeScript + redux saga 메인 페이지 띄우기)

[2021.10.11]

-   1h
-   firebase 학습
-   오늘 다른 일정이 있어 작업량이 작음.

[2021.10.12]

-   6h
-   디자인 작업
-   라우트 작업
-   헤더 구현 & 메인 페이지 디자인 입히기

[2021.10.13]
3h

## 계획

-   일기 작성 화면 디자인 및 기능 구현
-   파이어베이스 연동하기 (도큐먼트 아이디 가져오는 방법 / content 개행 문자)
-   토글형식의 에러메세지
-   추상화 레벨 맞추기.

## 실제한일

-   git pull 잘못받아서 git reflog, git reset 명령어 사용
-   git action으로 배포환경 만들어보는 중.
    일단 git branch main을 배포하는 걸로 해보자
-   git action으로 이것 저것해보다가 개발 브런치에서 pull 하고 이것 저것하다가 작업한 거 날려먹음 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
-   로딩 추가

## TODO

-   firebase api 가져오는 부분 정리하기
    컬렉션 목록 가져올때 자동생성되는 id를 도큐먼트리스트안에 넣어서 가져오는 방법. (타입스크립트)
-   날짜, 입력일자로 정렬해야함. 입력일자를 insert 하도록

[2021.10.15]
2h

## 실제한일

-   도메인 구입 후 연결(http://jimin.xyz:50091/)

## 할일

-   도메인 포트번호 없애는 방법 알아보기.

[2021.10.16]

-   작업 없음

[2021.10.17]

## TODO

3h

-   [ ] nginx 서버로 포트포워딩(?) 하기
-   [x] 작성페이지 분리 (1h)
-   [ ] mood/weather 컴포넌트 분리
-   [x] 날짜, 입력일자 받기 (10min)
-   [x] 텍스트 에디터 추가하기 (1h) 텍스트 에디터(quill) 스타일 수정 필요
-   [ ] 반응형 적용하기
-   [ ] 1차 릴리즈 태그 추가하기
-   [ ] github action 이용하여 자동 배포 설정하기
-   [ ] /diary/RCq6RZIKUdEBAouiybVY 로 직접 url 접속한 경우 404 Error 발생

[2021.10.18]

## TODO

-   [x] 삭제 기능.. redux가 아직 익숙하지 않아서 힘드네요
-   [ ] 수정 기능
-   [ ] 좋아요 기능
-   [ ] mood/weather 컴포넌트 분리
-   [ ] 반응형 적용하기
-   [ ] 1차 릴리즈 태그 추가하기
-   [ ] nginx 서버로 포트포워딩(?) 하기
-   [ ] github action 이용하여 자동 배포 설정하기
-   [ ] /diary/RCq6RZIKUdEBAouiybVY 로 직접 url 접속한 경우 404 Error 발생

[2021.10.18]

오늘도 일이 있어서 작업을 많이 못했다..
수정기능 하기위해서 기존 작성 페이지를 활용하고 싶은데, saga로 데이터 받아와서 뿌려준다음에 수정완료 누르면 put? patch? 메소드로 수정을 할 예정.
수정 완료 한다음에는 이전에 디테일 화면으로 이동.

## TODO

-   [ ] 수정 기능 작업중. 1h
-   [ ] 좋아요 기능
-   [ ] mood/weather 컴포넌트 분리
-   [ ] 반응형 적용하기
-   [ ] 1차 릴리즈 태그 추가하기
-   [ ] nginx 서버로 포트포워딩(?) 하기
-   [ ] github action 이용하여 자동 배포 설정하기
-   [ ] /diary/RCq6RZIKUdEBAouiybVY 로 직접 url 접속한 경우 404 Error 발생
