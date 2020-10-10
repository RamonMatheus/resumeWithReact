
import React from 'react';
import './App.css';
import Description from './components/Description';
import Header from './components/Header';
import AboutMe from './components/images/AboutMe';
import Nav from './components/Nav';
import Form from './components/Form';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">


      <Header title={"Gracias por estar aqui. ¡Bienvenidos!"}
        description={"Mi nombre es Ramón Matheus"} />

      <Nav />


      <AboutMe />

      <div>
        <div className="col col-description-title" id="Education">
          <h1><b>Mi Formación Educativa</b></h1>
        </div>
        <div className="row">
          <div className="col col-description">
            <Description title="Educación 👨‍🎓" title1="UPEL-IPB" description1="Titulo obtenido Profesor en la Especialidad de Mecánica Industrial en la Universidad Pedagógica Experimental Libertador, Barquisimeto-Venezuela, graduado en el año 2011." />
            <img src={require('../src/components/images/upel.jpg')} className=" img-icono" />
          </div>
          <div className="col col-description">
            <Description title="Educación 👨‍🎓" title1="IFTS12" description1="Tecnicatura en Análisis de Sistemas en curso, esta carrera me ha ayudado a entender más los conceptos de programación, bases de datos, diseño de software, metodologías agiles y sobre la formación integral como Analista de sistemas." />
            <img src={require('../src/components/images/IFTS12.png')} className=" img-icono" />
          </div>
          <div className="col col-description">
            <Description title="Educación 👨‍🎓" title1="Cursos" description1="HTML, CSS, JS, Bootstrap, Diseño Responsive, React Js, Java POO, JPA, Spring boot orientado a microservicios, Sql Server,Docker, MySql, MongoDB, Github y manejo básico de Git." />
            <img src={require('../src/components/images/photoDesktop.jpg')} className=" img-icono" />
          </div>
        </div>
      </div>
      <div>
        <div className="col col-description-title" id="Work">
          <h1><b>Desempeño Laboral</b></h1>
        </div>
        <div className="row">
          <div className="col col-description">
            <Description title="Profesor 👨‍🏫" title1="Colegio Vasco Da Gama" description1="Desde Marzo 2008 Hasta Julio 2016, desempeñando el cargo de docente en las materias: matemática, física y dibujo técnico a nivel secundario, planificación y ejecución de plan de estudios y calendario escolar. También como colaborador con el departamento de control de estudios." />
            <img src={require('../src/components/images/teacher.png')} className=" img-icono" />
          </div>
          <div className="col col-description">
            <Description title="Encargado 🤵" title1="Tanaj Argentina SRL" description1="Desde Noviembre 2016 hasta Septiembre 2020, desempeñando el cargo de Encargado de 4 locales con 10 personas a cargo. Apertura y cierre, capacitación a nuevo ingreso de ventas, control de stock, cierre de cajas, planificación de actividades grupales de cierre de mes y gestión de pedidos a proveedores." />
            <img src={require('../src/components/images/team.jpg')} className=" img-icono" />
          </div>
        </div>
      </div>
      <div className="col col-description-title" id="MisRedes">
        <h1><b>Mis Redes 💻</b></h1>
      </div>
      <div className="row">
        <div className="col col-description border border-info m-5">
          <Description title="GitHub 👨‍🏫" title1="Mi Portafolio" description1="" />
          <button type="onClick">
            <a target="_blank"
              href="https://github.com/RamonMatheus?tab=repositories">
              <i class="fab fa-github iconos">GitHub</i>
            </a>
          </button>
        </div>
        <div className="col col-description border border-info m-5">
          <Description title="LinkedIn 👨‍🏫" title1="Mi Perfil" description1="" />
          <button type="onClick">
            <a target="_blank"
              href="https://www.linkedin.com/in/ram%C3%B3n-matheus-bastidas-0b5993169?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8JeMAtJDQLG%2BPuR4B0yLVA%3D%3D">
              <i class="fab fa-linkedin iconos" color="blue">Linkedin</i>
            </a>
          </button>
        </div>
      </div>

      <div className="container formulario">
        <div className="col col-description-title" id="Contactame">
          <h1><b>Contáctame 📧</b></h1>
        </div>
      </div>
      <Form />

      <Footer />



    </div >
  );
}

export default App;
