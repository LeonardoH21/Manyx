import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `sessao`, `horario`, `data_agendamento`) VALUES(?, ?, ?, ?, ?, ?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.sessao,
    req.body.horario,
    req.body.data_agendamento,
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `sessao` = ?, `horario` = ?, `data_agendamento` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.sessao,
    req.body.horario,
    req.body.data_agendamento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
