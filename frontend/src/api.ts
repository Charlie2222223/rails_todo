import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Todoの型を定義
// title: Todoのタイトル
// completed: Todoが完了したかどうかのフラグ
interface Todo {
  id?: number; // TodoのID（任意、サーバーから自動生成）
  title: string;
  completed: boolean;
}

// Axiosインスタンスを作成
// 基本URLや共通ヘッダーを設定して、APIクライアントとして使用
const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1', // APIのベースURL
  headers: {
    'Content-Type': 'application/json', // リクエストのコンテンツタイプをJSONに指定
  },
});

// API操作を行うメソッド群をエクスポート
export default {
  // Todoリストを取得するメソッド
  // GET /todosエンドポイントにリクエストを送り、Todoの配列を返す
  getTodos(): Promise<AxiosResponse<Todo[]>> {
    return apiClient.get('/todos');
  },

  // 新しいTodoを作成するメソッド
  // POST /todosエンドポイントに新しいTodoを送信し、作成されたTodoを返す
  createTodo(todo: Todo): Promise<AxiosResponse<Todo>> {
    return apiClient.post('/todos', todo);
  },

  // 特定のTodoを更新するメソッド
  // PUT /todos/:idエンドポイントに更新内容を送信し、更新後のTodoを返す
  updateTodo(id: number, todo: Partial<Todo>): Promise<AxiosResponse<Todo>> {
    return apiClient.put(`/todos/${id}`, todo);
  },

  // 特定のTodoを削除するメソッド
  // DELETE /todos/:idエンドポイントにリクエストを送り、削除の結果を返す
  deleteTodo(id: number): Promise<AxiosResponse<void>> {
    return apiClient.delete(`/todos/${id}`);
  },
};