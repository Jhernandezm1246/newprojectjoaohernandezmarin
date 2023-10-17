import React from "react";
import "./Home.css"

const Home = () =>{


    return(
<div className="container mt-5">
  {/* Información personal */}
  <div className="mb-5">
    <header>
      <h1>Joao Hernandez</h1>
    </header>
    <div className="contenedor-habilidades">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-header">Sobre La persona</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Edad: 28 años</li>
          <li className="list-group-item">Ciudad Natal: San Jose</li>
          <li className="list-group-item">Telefono: +506 8737-3325</li>
          <li className="list-group-item">Correo: jhmbao@gmail.com</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Habilidades técnicas e idiomas */}
  <div className="mb-5">
    <header>
      <h1>Mis Habilidades</h1>
    </header>
    <div className="contenedor-habilidades">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-header">Habilidades Técnicas</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Excel: Uso avanzado para análisis de datos y creación de informes.</li>
          <li className="list-group-item">Python: Desarrollo de scripts y aplicaciones.</li>
          <li className="list-group-item">HTML: Creación de contenido web.</li>
          <li className="list-group-item">CSS: Diseño y estilo de páginas web.</li>
        </ul>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <div className="card-header">Idiomas</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Español: Nativo.</li>
          <li className="list-group-item">Inglés: Nivel avanzado.</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Proyectos */}
  <div className="mb-5">
    <header>
      <h1>Mis Proyectos</h1>
    </header>
    <div className="contenedor-habilidades">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-header">Proyectos</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Página de pacientes:</b></li>
          <li className="list-group-item">
            <a href="https://regal-gingersnap-670012.netlify.app/?authuser=1" target="_blank" rel="noopener noreferrer">
              https://regal-gingersnap-670012.netlify.app/?authuser=1
            </a>
          </li>
          <li className="list-group-item"><b>Página de fraces:</b></li>
          <li className="list-group-item">
            <a href="https://proyectojoaohernandez.netlify.app" target="_blank" rel="noopener noreferrer">
            https://proyectojoaohernandez.netlify.app
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Footer */}
  <footer className="text-center">
    <p>&copy; 2023 Mi Página de Habilidades</p>
  </footer>
</div>
    )
}

export default Home