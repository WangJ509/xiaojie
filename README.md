# 小傑輸入法 XiaoJie

為臺灣繁體中文打造的 macOS 注音輸入法，以小麥注音為基礎，加入在 Mac 本機執行的 AI 選字與永久選字學習。

- [介紹與安裝](https://wangj509.github.io/xiaojie/)
- [開發故事](https://wangj509.github.io/xiaojie/story.html)
- [評測方法與限制](https://wangj509.github.io/xiaojie/evaluation.html)
- [下載最新版本](https://github.com/WangJ509/xiaojie/releases/latest)
- [回報問題](https://github.com/WangJ509/xiaojie/issues)
- [致謝與授權](THIRD_PARTY_NOTICES.md)

## 安裝

需要 Apple Silicon Mac，macOS 14 以上。下載 release 的 ZIP 並解壓縮到「下載項目」，開啟終端機執行：

```sh
sh ~/Downloads/XiaoJie-2026.10.17/install.sh
```

再到「系統設定 → 鍵盤 → 輸入方式 → 編輯 → ＋ → 繁體中文」加入「小傑輸入法」。未出現時請登出再登入。

安裝包包含小傑模型。這是尚未經 Apple 公證的試用版本；安裝腳本會移除下載包的隔離標記。使用 Caps Lock 切換中英前，請關閉 macOS 的「使用大寫鎖定鍵切換至及切換自 ABC」。

一般打字和 AI 選字在本機執行。選用的語音輸入預設關閉，啟用後會將錄音傳送至 Google Gemini，需要自己的 API key。

## 這個 repository 放什麼？

這裡提供介紹網站、使用說明與可下載的 release。輸入法的開發原始碼維持在原本的 repository，不在這裡同步；網站上的選字動畫只是流程示意，不會執行模型。

網站是無建置依賴的靜態 HTML、CSS、JavaScript，由 GitHub Pages 發布 `main` 分支的根目錄。模型與安裝包只放在 GitHub Releases，不加入 Git 歷史。

## 後續更新

1. 將測試完成的安裝包、SHA-256 校驗碼與對應版本授權告知上傳至新的 GitHub Release。
2. 更新網站與本文件的版本號、下載網址和安裝指令。
3. 將網站變更推送至 `main`，GitHub Pages 會自動更新。

## 致謝

感謝 [OpenVanilla 小麥注音](https://github.com/openvanilla/McBopomofo) 與所有貢獻者。輸入法本體與上游元件的 MIT 授權見 [LICENSE.txt](LICENSE.txt)，第三方元件與模型訓練資料來源見 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 網站內容來源

網站整合原網站分支的打字與語音示範、開發故事和原專案 README 的評測表。影片以 GIF 保存，預設顯示靜態預覽，訪客可自行播放或停止。新增章節時，請在 `story.html` 同步維護目錄與章節錨點；新增媒體時，提供 GIF、靜態預覽及可讀的替代文字。
