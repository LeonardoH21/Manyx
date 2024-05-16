import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import UserConsultPage from "./pages/UserConsultPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe Routes e BrowserRouter
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <Router>
      <Container>
        <Title>Comandas do Dia</Title>
        <Routes> 
          <Route exact path="/" element={<Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />} /> 
          <Route path="/consult-users" element={<UserConsultPage />} /> 
        </Routes>
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </Router>
  );
}

export default App;