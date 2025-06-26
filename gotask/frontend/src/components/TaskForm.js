import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';

const TaskForm = ({ onAdd }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onAdd({
      description: values.description,
      dueDate: values.dueDate ? values.dueDate.toISOString() : null,
    });
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="description" label="Descripción" rules={[{ required: true, message: 'Ingresa una descripción' }]}> 
        <Input placeholder="¿Qué tienes que hacer?" />
      </Form.Item>
      <Form.Item name="dueDate" label="Fecha objetivo">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>Agregar tarea</Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm; 