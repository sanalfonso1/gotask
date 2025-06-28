import React, { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

// Cambia esta URL por tu backend desplegado
const API_URL = 'https://gotask-backend.onrender.com/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error('Error al obtener tareas:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      await axios.post(`${API_URL}/tasks`, task);
      fetchTasks();
    } catch (err) {
      console.error('Error al agregar tarea:', err);
    }
  };

  const toggleTask = async (task) => {
    try {
      await axios.put(`${API_URL}/tasks/${task._id}`, {
        completed: !task.completed,
      });
      fetchTasks();
    } catch (err) {
      console.error('Error al actualizar tarea:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error('Error al eliminar tarea:', err);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#1677ff' }}>
        <Title style={{ color: 'white', margin: 0 }} level={3}>GoTask - Administrador de Tareas</Title>
      </Header>
      <Content style={{ padding: '24px', maxWidth: 600, margin: '0 auto', width: '100%' }}>
        <div style={{ marginTop: 24 }}>
          <TaskForm onAdd={addTask} />
          <div style={{ marginTop: 32 }}>
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} loading={loading} />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        GoTask ©2024
      </Footer>
    </Layout>
  );
}

export default App;
