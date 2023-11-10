import React, { useState } from 'react';

function Acessar() {
    const [currentDateTime, setCurrentDateTime] = useState(null);

    const handleClick = () => {
    const now = new Date().toISOString();
    setCurrentDateTime(now.toLocaleString());
    fetch("http://localhost:3000/dados", {
        method: "POST",
        body: JSON.stringify(now)
    })
};

    return (
        <div>
            <button onClick={handleClick}>Mostrar Data e Hora Atual</button>
            {currentDateTime && <p>Data e Hora Atual: {currentDateTime}</p>}
        </div>
    )
}


export default Acessar;