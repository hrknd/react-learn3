import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea className="form-control" id="formEventBody" />
        </div>
        <button className="btn btn-primary">イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
        <button className="btn btn-danger">全ての操作ログを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead><tr><th>ID</th><th>タイトル</th><th>ボディ</th><th>削除</th></tr></thead>
        <tbody><tr><th></th><th></th><th></th><th></th></tr></tbody>
      </table>
      <h4>操作ログ一覧</h4>
    </div>
  );
}

export default App;