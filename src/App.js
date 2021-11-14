import "./style.scss";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import TimerIcon from '@mui/icons-material/Timer';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function App() {
  return (
    <div className="card-container">
      <img
        src="https://assets.afcdn.com/recipe/20161114/26634_w1200h800c1cx2736cy1824.webp"
        alt="cake"
      />
      <div className="infos-container">
        <div className="difficulty"><StarIcon/><StarBorderIcon/><StarBorderIcon/></div>
        <div className="time"><TimerIcon/>30 min</div>
        <div className="person"><PersonIcon/>4 personnes</div>
        <div className="favorite"><FavoriteBorderIcon/></div>
      </div>
      <div className="text">
        <h2>Brownies</h2>
        <h3>Ingrédients</h3>
        <ul>
          <li>70g Farine</li>
          <li>30g Maïzena</li>
          <li>200g Chocolat</li>
          <li>150g Sucre</li>
          <li>100g Cerneau Noix</li>
          <li>3 Oeufs</li>
          <li>100g Beurre</li>
        </ul>
        <h3>Préparation</h3>
        <p>Préchauffer votre four à 150°C</p>
        <p>Casser le chocolat et le faire fondre avec le beurre</p>
        <p>Mélanger la farine, la maïzena et le sucre dans un saladier.</p>
        <p>Y incorporer le chocolat fondu.</p>
        <p>
          Battre les oeufs, les ajouter à la préparation et mélanger le tout.
        </p>
        <p>Y ajouter les cerneaux de noix.</p>
        <p>Beurrer et farinez un plat peu profond.</p>
        <p>
          Y verser la préparation et mettre au four à 150°C pendant environ 25
          min.
        </p>
      </div>
    </div>
  );
}

export default App;
