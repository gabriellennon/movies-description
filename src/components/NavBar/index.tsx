import './styles.scss';
import moviePNG from '../../assets/images/movie.png';

export const NavBar = () => {
    return (
        <nav>
            <img
            src={moviePNG}
            alt={'Movie description logo'}
            />
            <p>Movie Description_</p>
      </nav>
    )
}