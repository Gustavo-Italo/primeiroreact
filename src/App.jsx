import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [corMensagem, setCorMensagem] = useState('');

  const calcularMedia = (e) => {
    e.preventDefault();

    const num1 = parseFloat(nota1);
    const num2 = parseFloat(nota2);
    const mediaCalculada = (num1 + num2) / 2;
    setMedia(mediaCalculada.toFixed(2));

    if (mediaCalculada >= 7) {
      setMensagem(`Parabéns ${nome}, você foi aprovado`);
      setCorMensagem('blue');
    } else if (mediaCalculada >= 4) {
      setMensagem(`Ops ${nome}, você está em exame`);
      setCorMensagem('green');
    } else {
      setMensagem(`Ops ${nome}, você foi reprovado`);
      setCorMensagem('red');
    }
  };

  return (
    <div>
      <h1>Programa situação do aluno</h1>

      <form onSubmit={calcularMedia}>
        <p>
          Nome do Aluno:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </p>
        <p>
          1° Nota:
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={nota1}
            onChange={(e) => setNota1(e.target.value)}
            required
          />
        </p>
        <p>
          2° Nota:
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={nota2}
            onChange={(e) => setNota2(e.target.value)}
            required
          />
        </p>
        <button type="submit">Exibir Média e Situação</button>
      </form>

      {media && <h3>Média das notas: {media}</h3>}
      {mensagem && (
        <h4 style={{ color: corMensagem }}>{mensagem}</h4>
      )}
    </div>
  );
}

export default App;



