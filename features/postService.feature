#language:zh-TW
功能: PostService

  場景: 提供正確的序號，應該取得正確的 Post 資料
    假設 提供 post 序號 "1"
    當 使用序號取得 post 資料
    那麼 取得的 post 資料應該為
      """
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
      """
