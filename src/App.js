import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 90%;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #34495e;
  line-height: 1.6;
`;

const Button = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #2980b9;
  }
`;

function App() {
  return (
    <Container>
      <Card>
        <Title>欢迎来到我的项目</Title>
        <Description>
          这是一个使用 React 和 Styled Components 构建的简单示例页面。
          我们可以在这里展示更多的内容和功能。
        </Description>
        <Button onClick={() => alert('感谢访问！')}>点击我</Button>
      </Card>
    </Container>
  );
}

export default App;