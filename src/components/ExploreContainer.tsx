import './ExploreContainer.css';

const ExploreContainer: React.FC = () => {
  return (
    <div id="container">
      <img className="explore-image" src="/assets/ionic-logo.svg" alt="Logotipo de Ionic" width={160} height={160} />
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>
      </p>
      <table className="explore-table">
        <caption>Componentes de Ionic</caption>
        <thead>
          <tr>
            <th scope="col">Componente</th>
            <th scope="col">Descripción</th>
            <th scope="col">Categoría</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IonButton</td>
            <td>Botón de acción</td>
            <td>Formularios</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExploreContainer;
