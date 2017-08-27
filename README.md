## 使用方法
### 開發 server 啟動
```
git clone https://github.com/yuxuan39/vegetable-price-tracker.git
npm start
```  
  
這樣就可以啟動 webpeck 了，以後只要一存檔，網頁就會更新。

### 假資料 Server 啟動
```
# 安裝 json server
npm install -g json-server
# 進入專案資料夾
cd vegetable-price-tracker
# 在 8888 port 啟動假資料 server
json-server --watch dummy/dummy.json --port 8888

# 用 browser 打開 http://localhost:8888/data 即可見假資料內容

```

## 檔案存放
* 進入 src 的 components
* 看你要做的部分是屬於 Body、Header 還是 Footer，再把檔案寫在裡面，像是導覽列就寫在 Header 這樣
* **確定功能沒問題再 commit App，免得衝突到其他功能**



