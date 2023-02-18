import { Link } from "react-router-dom";
import style from './footer.module.css'

//Assets
import PokemonPic from '../assets/pikachu.png'
import LocationPic from '../assets/pointer.png'
import ItemsPic from '../assets/pokeball.png'



const Footer = () => {
    return (
        <footer className={style.footer}>
            <Link className={style.footerLink} to="/pokemons">
                <img className={style.footerIcon} src={PokemonPic} alt="Pokeball" />
                Pokemons
            </Link>
            <Link  to="/items">
                <img className={style.footerIcon} src={ItemsPic} alt="Items" />
                Items
            </Link>
            <Link  to="/map">
                <img className={style.footerIcon} src={LocationPic} alt="Map" />
                Map
            </Link>
        </footer>
    )
}

export default Footer;