<template>
    <div>
        <!-- タイトル -->
        <h1>To-Do List</h1>

        <!-- 新しいTo-Doアイテムを追加するフォーム -->
        <form @submit.prevent="addTodo">
        <!-- 新しいタスクを入力するための入力フィールド -->
        <input v-model="newTodo" placeholder="Add a new task" />
        <button type="submit">Add</button>
        </form>

        <!-- To-Doリストを表示する -->
        <ul>
        <!-- todosリストの各項目をループで表示 -->
        <li v-for="todo in todos" :key="todo.id">
            <span>{{ todo.title }}</span>
            <!-- To-Doアイテムを削除するボタン -->
            <button @click="deleteTodo(todo.id)">Delete</button>
        </li>
        </ul>
    </div>
</template>
  
<script>
  import api from '../api'; // API通信を行うファイルをインポート
  
  export default {
    data() {
      return {
        todos: [], // To-Doアイテムのリスト
        newTodo: '', // 新しいTo-Doアイテムのタイトル
      };
    },
    mounted() {
      // コンポーネントがマウントされたときにTo-Doリストを取得
      this.fetchTodos();
    },
    methods: {
      // To-DoリストをAPIから取得するメソッド
      async fetchTodos() {
        const response = await api.getTodos();
        this.todos = response.data; // APIから取得したデータをtodosに格納
      },
  
      // 新しいTo-Doアイテムを追加するメソッド
      async addTodo() {
        const todo = { title: this.newTodo, completed: false }; // 新しいTo-Doの内容
        await api.createTodo(todo); // APIを通じて新しいTo-Doを作成
        this.newTodo = ''; // 入力フィールドをクリア
        this.fetchTodos(); // 最新のTo-Doリストを取得
      },
  
      // 指定されたIDのTo-Doアイテムを削除するメソッド
      async deleteTodo(id) {
        await api.deleteTodo(id); // APIを通じてTo-Doを削除
        this.fetchTodos(); // 最新のTo-Doリストを取得
      },
    },
  };
</script>