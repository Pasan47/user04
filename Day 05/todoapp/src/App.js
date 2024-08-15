// src/App.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { db, collection, addDoc, deleteDoc, doc, onSnapshot } from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const todosCollection = collection(db, 'todos');
    const unsubscribe = onSnapshot(todosCollection, (snapshot) => {
      const newTodos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTodos(newTodos);
    });

    return () => unsubscribe();
  }, []);

  const handleAddTodo = async () => {
    if (inputValue.trim()) {
      try {
        await addDoc(collection(db, 'todos'), {
          text: inputValue,
          timestamp: new Date()
        });
        setInputValue('');
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Todo App</h1>
          <Form.Group>
            <Form.Control
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new todo"
            />
            <Button className="mt-2" variant="primary" onClick={handleAddTodo}>
              Add
            </Button>
          </Form.Group>
          <ListGroup className="mt-4">
            {todos.map((todo) => (
              <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
                {todo.text}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
