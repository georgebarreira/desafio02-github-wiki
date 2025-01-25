import { useState } from "react";
import gitlogo from "../assets/gitlogo.png";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";

import { Container } from "./styles";
import { api } from "../services/api";

const App = () => {
  const [currentRepo, setCurrentRepo] = useState("");
  const [respos, setRepos] = useState([]);

  const handleSearchRepos = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = respos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      } else {
        alert("Repositório já adicionado");
      }
    } else {
      alert("Repositório não encontrado"); // Não está alertando pois fica esperando o dado pra vida
    }
  };

  const handleRemoveRepo = (id) => {
    const newRepos = respos.filter((repo) => repo.id !== id);
    setRepos(newRepos);
  };

  return (
    <Container>
      <img src={gitlogo} height={72} width={72} alt="Github logo" />
      <Input
        value={currentRepo}
        onChange={(e) => {
          setCurrentRepo(e.target.value);
        }}
      />
      <Button onClick={handleSearchRepos} />

      {respos.map((repo) => (
        <ItemRepo
          key={repo.id}
          name={repo.name}
          full_name={repo.full_name}
          html_url={repo.html_url}
          onRemove={() => handleRemoveRepo(repo.id)}
        />
      ))}
    </Container>
  );
};

export default App;
