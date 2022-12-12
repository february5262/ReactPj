# Getting Started

### Project Structure

```bash
├─ node_modules/                     # Project dependencies
├─ api/                              # Api 호출 모듈
├─ components                        # component 관리
├─ models                            # model 관리
├─ pages/                            # page 관리
│ ├─ _app.tsx                        # 모든 페이지에서 공통 처리 
│ ├─ _document.tsx                   # <Head>, <Body> 공통 처리 
│ ├─ _error.tsx                      # error page
│ ├─ index.tsx                       # Root page
├─┬ public/                          # 정적 파일 관리
│ ├─ locales                         # 다국어 처리 (default: ko)
├─ store                             # recoil로 관리되는 state 관리
├─ styles                            # Global, Module css style 관리
├─ utils/                            # 공통 모듈성 Util 관리
│ ├─ App.tsx                         # 최상위 component
│ ├─ index.tsx                       # root element에 App.tsx 컴포넌트를 렌더링
|- .env-cmdrc                        # App 환경변수 관리
|- .eslintrc.yml                     # eslint config 설정
|- .prettierrc.yml                   # prettier config 설정
|- package.json                      # 프로젝트 정보 및 의존성(dependencies)을 관리
|- tsconfig.json                     # typescript config 설정
```

### UI Framework

material design을 사용할 수 있는 https://mui.com/ 를 표준으로 사용

### CI - 소스관리

- GitLab 계정 발급

### Install dependendies

```
npm install
```

### Start application

```
npm start
```
