<template>
    <v-app>
      <v-container class="py-5">
        <v-card class="elevation-3" color="primary" dark>
          <v-card-title class="headline"> To-Do List</v-card-title>
        </v-card>
  
        <v-card class="my-5 pa-4 elevation-2">
          <!-- 新しいTo-Doアイテムを追加するフォーム -->
          <v-form @submit.prevent="addTodo" class="d-flex align-center">
            <v-text-field
              v-model="newTodo"
              label="Add a new task"
              outlined
              dense
              hide-details
              class="flex-grow-1"
              color="primary"
            ></v-text-field>
            <v-btn type="submit" color="accent" class="d-flex align-center">
              <v-icon left>mdi-plus</v-icon>
              ADD
            </v-btn>
          </v-form>
        </v-card>
  
        <!-- To-Doリストの表示 -->
        <v-card class="elevation-1">
          <v-list>
            <v-list-item v-for="todo in todos" :key="todo.id" class="my-2">
              <v-list-item-content>
                <v-list-item-title>{{ todo.title }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon color="red lighten-1" @click="deleteTodo(todo.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>
    </v-app>
  </template>
  
  <script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from '../api';

// 型定義
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos = ref<Todo[]>([]);
const newTodo = ref<string>('');

// To-DoリストをAPIから取得
const fetchTodos = async () => {
  const response = await api.getTodos();
  todos.value = response.data as Todo[]; // 型アサーション
};

// 新しいTo-Doアイテムを追加
const addTodo = async () => {
  if (!newTodo.value.trim()) return;
  await api.createTodo({ title: newTodo.value, completed: false });
  newTodo.value = '';
  await fetchTodos();
};

// To-Doアイテムを削除
const deleteTodo = async (id: number) => {
  await api.deleteTodo(id);
  await fetchTodos();
};

// コンポーネントのマウント時にTo-Doリストを取得
onMounted(fetchTodos);
  
  // コンポーネントのマウント時にTo-Doリストを取得
  onMounted(fetchTodos);
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  .v-card-title {
    font-size: 1.5rem;
  }
  .v-card {
    border-radius: 12px;
  }
  .v-list-item-title {
    font-size: 1.2rem;
  }
  </style>