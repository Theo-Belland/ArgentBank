
import RouterComponent from "./components/Router/Router";
import "./style/main.css"; // import du style du projet

/***
 * composant principal de l'appli
 * Gère le routage et le Layout : créer un component spécifique pour le routage
 */

const App = () => {
  return (
   <RouterComponent />
  );
};

export default App;