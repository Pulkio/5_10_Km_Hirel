import './Hero.css';
import logo from '../../assets/logos/SiteLogoWithDate.svg';
import waves from '../../assets/vectors/floor.svg';
import sun from '../../assets/vectors/sun.svg';
import montSaintMichel from '../../assets/vectors/montSaintMichel.svg';

const Hero = () => {

  return (
    <div className="heroContainer">
      <div className="textContainer">
        <div className="firstEventTag">Première édition</div>
        <img src={ logo }/>
        <h3>Parcours plat, Fun & Soleil <br />près de la Baie !</h3>
      </div>
      <img src={ waves } className="vector waves"/>
      <img src={ sun } className="vector sun"/>
      <img src={ montSaintMichel } className="vector montSaintMichel"/>
    </div>
  );
};

export default Hero;
