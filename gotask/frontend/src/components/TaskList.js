import React from 'react';
import { List, Checkbox, Button, Typography, Space, Tag } from 'antd';

const { Text } = Typography;

const TaskList = ({ tasks, onToggle, onDelete }) => (
  <List
    bordered
    dataSource={tasks}
    renderItem={task => (
      <List.Item
        actions={[
          <Button danger size="small" onClick={() => onDelete(task._id)}>Eliminar</Button>
        ]}
      >
        <Space direction="vertical">
          <Checkbox checked={task.completed} onChange={() => onToggle(task)}>
            <Text delete={task.completed}>{task.description}</Text>
          </Checkbox>
          <div>
            {task.dueDate && <Tag color="blue">Para: {new Date(task.dueDate).toLocaleDateString()}</Tag>}
            {task.completed && task.completedAt && <Tag color="green">Hecha: {new Date(task.completedAt).toLocaleDateString()}</Tag>}
          </div>
        </Space>
      </List.Item>
    )}
  />
);

export default TaskList; 