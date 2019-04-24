# chatworkからのmentionでraspberry piのカメラ写真を取得

## 概要

2019年の社内EDI-THON Jチームプロジェクトとして作成

## 処理のフロー

### 1. chatworkのbotへtoメッセージが送られる

### 2. webhookで登録されているAPI Gatewayへリクエストされる

### 3. lambdaを実行しIotへpublish

### 4. raspberry ipからsubscribe。写真撮影

### 5. 写真を/rooms/{room_id}/filesでPOST
