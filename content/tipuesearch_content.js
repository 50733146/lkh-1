var tipuesearch = {"pages": [{'title': '倉儲', 'text': 'The website is\xa0 https://github.com/50733146/lkh-1 \n source:\xa0 https://github.com/mdecourse/cmstemplate \n #branch 林冠澔 (Lin,Kuan,Hao)\xa0 \n', 'tags': '', 'url': '倉儲.html'}, {'title': '2021', 'text': '', 'tags': '', 'url': '2021.html'}, {'title': '2021.03.02', 'text': 'sign up the warehousing \n', 'tags': '', 'url': '2021.03.02.html'}, {'title': '2021.03.04', 'text': 'add ssh keys to\xa0 https://github.com/settings/keys \n 1.建立 OpenSSH key\xa0 \xa0 \n # pair ssh-keygen -t rsa -b 4096 -C\xa0 "使用者學號" \n 2.Putty 作為 SSH 連線客戶端工具 \n #\xa0 https://www.putty.org/ \n 3.以 SSH 協定與 Github 連線 \n 建立一對 OpenSSH key pair, private key 保留在近端, 將 public key 登記在 Github 所屬帳號設定中 \n #\xa0set GIT_SSH=%Disk%:\\putty\\plink.exe \n 表示 git 將透過 putty 工具以 ssh 加密協定對 Github 連線 \n 4.利用 SSH 對 Gitlab 連線 \n 將OpenSSH 格式的 public key 登錄到 Gitlab 帳號下 \n 利用 putty.exe 建立 session 名稱為 github.com 的設定, 其中設定 AUTH 與 Proxy 資料 \n 在.git/config\xa0以url = git@gitlab.com:user_name/url 對 gitlab 連接 \n --------------------------------------------------------------------------------- \n ssh:網路連線加密機制,可以利用 ssh 帳號@遠端主機 ip 或符號名稱, 就可以輸入認證密碼, 登入到遠端主機,無須提供密碼認證 \n \n', 'tags': '', 'url': '2021.03.04.html'}, {'title': '2021.03.11', 'text': 'git pull origin master \n 1.acp.bat 2.cms.bat 3.http-serve.py 4.localhost.crt 5.localhost.key move to LKH \n Reference:\xa0 https://cythilya.github.io/2018/06/19/git-merge-branch-into-master/ \n acp.bat:已接將git add . 、git commit -m "message"、git push 合併 \n cms.bat:已將cd cmsimde、python wsgi.py 合併 \n --------------------------------------------------------------------------------- \n acp.bat、cms.bat將指令精簡化 \n', 'tags': '', 'url': '2021.03.11.html'}, {'title': '2021.04.28', 'text': '建立Windows系統與Ubuntu系統\xa0 \n 1.Windows 10專業版 \n 開機後的網路設置-IPv6 名稱：kmollab \n 2.Ubuntu server 20.04-1 \n 開機後的網路設置-IPv6 \n DNS設置-系上配置 \n 名稱：kmol \n ----------------------- \n *預計建立虛擬主機，開機時自動開啟動態、靜態網站 \n', 'tags': '', 'url': '2021.04.28.html'}, {'title': '2021.05.13', 'text': '自行利用 Ubuntu 建立可啟動 CMSiMDE 動態系統與 Fossil SCM 伺服器的目的 \n', 'tags': '', 'url': '2021.05.13.html'}, {'title': '2021.07.01', 'text': '\n 建立 Heroku 帳號 \n 建立 Heroku app \n 下載 Heroku CLI 程式檔案, 解開至隨身碟 Y: 所在位置或 \n 修改命令搜尋路徑\xa0--在start.bat中加入: \n \n set   path_heroku = % Disk % :\\heroku\\ bin ; \n path =% path_heroku % ; \n set   HTTP_PROXY = http: / / [ 2001 : 288 : 6004 : 17 :: 53 ]: 3128 \n set   HTTPS_PROXY = http: / / [ 2001 : 288 : 6004 : 17 :: 53 ]: 3128 \n \n \n 測試 Heroku\xa0 \n \n #heroku --version \n \n \n 設定 Heroku 代理主機 \n \n #heroku login -i \n \n \n 設定同步倉儲,進到倉儲位置下\xa0 \n \n #heroku git:remote -a "heroku app name" \n \n \n 以 git 進行提交推送\xa0 \n \n #git push heroku\xa0 \n \n \n \n --------------------------------------------------- \n 過程中 \n \n 提交推送 #Failed to connect to github.com\xa0 \n \n 解決 \n \n git config --global --unset  HTTP_PROXY \n git config --global --unset  HTTPS_PROXY \n \n --------------------------------------------------- \n 之後heroku login，可直接push heroku同步到\xa0 https://git.heroku.com/lkh-1.git \n Heroku website:\xa0 https://dashboard.heroku.com/apps/lkh-1 \n', 'tags': '', 'url': '2021.07.01.html'}, {'title': '2021.07.02', 'text': '在\xa0 https://github.com/50733146/lkh-1 \xa0中的README.md 使用svg檔 \n 將\xa0 https://50733146.github.io/lkh-1/ \xa0連結納入 \n -------------------------------------------------- \n 使用  WordPress \xa0 建立網站\xa0 \n website:\xa0 https://lkh125275799.wordpress.com/ \n', 'tags': '', 'url': '2021.07.02.html'}, {'title': '2021.07.03', 'text': '測試 github command 與github desktop \n git:  Download ↓ \n github desktop:  Download↓ \n', 'tags': '', 'url': '2021.07.03.html'}, {'title': 'SSH', 'text': '1.建立 OpenSSH key\xa0 \xa0 \n # pair ssh-keygen -t rsa -b 4096 -C\xa0 "使用者學號" \n 2.Putty 作為 SSH 連線客戶端工具 \n #\xa0 https://www.putty.org/ \n 3.以 SSH 協定與 Github 連線 \n 建立一對 OpenSSH key pair, private key 保留在近端, 將 public key 登記在 Github 所屬帳號設定中 \n #\xa0set GIT_SSH=%Disk%:\\putty\\plink.exe \n 表示 git 將透過 putty 工具以 ssh 加密協定對 Github 連線 \n 4.利用 SSH 對 Gitlab 連線 \n 將OpenSSH 格式的 public key 登錄到 Gitlab 帳號下 \n 利用 putty.exe 建立 session 名稱為 github.com 的設定, 其中設定 AUTH 與 Proxy 資料 \n 在.git/config\xa0以url = git@gitlab.com:user_name/url 對 gitlab 連接 \n --------------------------------------------------------------------------------- \n ssh:網路連線加密機制,可以利用 ssh 帳號@遠端主機 ip 或符號名稱, 就可以輸入認證密碼, 登入到遠端主機,無須提供密碼認證 \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'Heroku', 'text': '\n 建立 Heroku 帳號 \n 建立 Heroku app \n 下載 Heroku CLI 程式檔案, 解開至隨身碟 Y: 所在位置或 \n 修改命令搜尋路徑\xa0--在start.bat中加入: \n \n set \xa0 path_heroku = % Disk % :\\heroku\\ bin ; \n path =%path_heroku%; \n set \xa0 HTTP_PROXY = http: / / [ 2001 : 288 : 6004 : 17 :: 53 ]: 3128 \n set \xa0 HTTPS_PROXY = http: / / [ 2001 : 288 : 6004 : 17 :: 53 ]: 3128 \n \n \n 測試 Heroku\xa0 \n \n #heroku --version \n \n \n 設定 Heroku 代理主機 \n \n #heroku login -i \n \n \n 設定同步倉儲,進到倉儲位置下\xa0 \n \n #heroku git:remote -a "heroku app name" \n \n \n 以 git 進行提交推送\xa0 \n \n #git push heroku\xa0 \n \n \n \n --------------------------------------------------- \n 過程中 \n \n 提交推送 #Failed to connect to github.com\xa0 \n \n 解決 \n \n git config --global --unset   http.proxy \n git config --global --unset   https.proxy \n \n --------------------------------------------------- \n 之後heroku login，可直接push heroku同步到 https://git.heroku.com/lkh-1.git \n Heroku website: https://dashboard.heroku.com/apps/lkh-1 \n \n', 'tags': '', 'url': 'Heroku.html'}, {'title': 'LaTeX', 'text': 'MiKTeX:\xa0 https://miktex.org/download \n Download\xa0 ↓ \n TEXMAKER:  https://www.xm1math.net/texmaker/download.html \n Download\xa0 ↓ \n 指令參考\xa0 1.   2.   3. \xa0 4.   5. \n ------------------------------------------------------------------------- \n 只需要安裝 2 個軟件包，MiKTeX 和 Texmaker \n Texmaker 是 Latex 的編輯器，MiKTeX 負責編譯指令參考 \n', 'tags': '', 'url': 'LaTeX.html'}, {'title': '2021 P-TECH 暑期實習', 'text': '職缺相關之訊\xa0 2021 P-TECH 暑期實習職缺 \n 面試履歷\xa0 P-TECH實習 _林冠澔_ (TSS)System Services Representative -X86 \n 面試主管 \n \n Ray Chou-TSS Branch Dicector(好像是負責中部地區"台中以南、嘉義以北") \n Tasha Chang-Industry Program Manager, IBM Corporate Citizenship \n \n 面使流程 \n \n 主管自我介紹、在台中分部工作含蓋範圍 \n 自我介紹 \n 問想從這個職缺獲得什麼 \n 問未來的打算(長遠) \n 問精密機械(本科系)跟IT不同領域的落差如何看待 \n 問對IBM瞭解多少 \n 問對AI瞭解多少 \n 問主管問題(a.工作甚任條件、b.組織未來發展趨勢 \n \n 因為涵蓋範圍很廣，對知識、技術要求不多，主要是態度、企圖心等等 \n 主要有兩個，分別是AI跟Cloud \n \n \n 問衝突如何解決 \n End~ \n \n TSS部門參考資料\xa0 IBM-TSS.pdf \n ----------------------------------------------- \n 面試解果-今年疫情取消實習計畫 \n', 'tags': '', 'url': '2021 P-TECH 暑期實習.html'}, {'title': '插大', 'text': '', 'tags': '', 'url': '插大.html'}, {'title': '國立普通大學', 'text': '\n 成功大學-- 考古題 \n 台灣大學-- 考古題 \n 清華大學-- 考古題 \n 中央大學-- 考古題 \n 中興大學-- 考古題 \n 中正大學-- 考古題 \n 中山大學-- 考古題 \n', 'tags': '', 'url': '國立普通大學.html'}, {'title': '國立科技大學', 'text': '', 'tags': '', 'url': '國立科技大學.html'}, {'title': '私立普通大學', 'text': '\n \n', 'tags': '', 'url': '私立普通大學.html'}, {'title': '私立科技大學', 'text': '', 'tags': '', 'url': '私立科技大學.html'}, {'title': '程式', 'text': '', 'tags': '', 'url': '程式.html'}, {'title': 'Python', 'text': '', 'tags': '', 'url': 'Python.html'}, {'title': 'Html', 'text': '\n chat web on LKH on LKH \n \n \n <svg xmlns="http://www.w3.org/2000/svg" width="92" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="92" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h34v20H0z"/><path fill="#46BC99" d="M34 0h58v20H34z"/><path fill="url(#b)" d="M0 0h92v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="17" y="15" fill="#010101" fill-opacity=".3">chat</text><text x="17" y="14">web</text><text x="62" y="15" fill="#010101" fill-opacity=".3">on LKH</text><text x="62" y="14">on LKH</text></g></svg> \n \n \n                 LKH  Sorry, your browser does not support inline LKH.  \n <svg height="130" width="500">\n  <defs>\n    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">\n      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />\n      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />\n    </linearGradient>\n  </defs>\n  <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />\n  <text fill="#ffffff" font-size="45" font-family="Verdana" x="56" y="86"LKH</text>\n  Sorry, your browser does not support inline LKH.\n</svg> \n \n', 'tags': '', 'url': 'Html.html'}, {'title': 'Java', 'text': '', 'tags': '', 'url': 'Java.html'}, {'title': 'SQL', 'text': '', 'tags': '', 'url': 'SQL.html'}, {'title': 'C++', 'text': '', 'tags': '', 'url': 'C++.html'}, {'title': 'C#', 'text': '', 'tags': '', 'url': 'C#.html'}]};