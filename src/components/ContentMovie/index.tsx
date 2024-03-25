import { MovieDetails } from "../../utils/types";
import "./styles.scss";
// import { Badge } from "@ui5/webcomponents-react"

type ContentMovieProps = {
  movieData: MovieDetails;
}

export const ContentMovie = ({ movieData }: ContentMovieProps) => {
    return (
        <section className="content-movie-description">
          <div className="info-movie">
            <h2>{movieData.Title}</h2>
            <span><strong>Actors</strong> {movieData.Actors}</span>
            <div className='secondary-information-movie'>
              <div className="tag-rating">
                <span>IMDb</span>
              </div>
              {/* <Badge design='Set3'>IMDb</Badge> */}
              <p>{movieData.imdbRating}</p>
              <p>{movieData.Runtime}</p>
              <p>{movieData.Year}</p>
              <p>{movieData.Genre}</p>
            </div>
            <p className='description-movie'>
              {movieData.Plot}
            </p>
          </div>
          <div className="card-movie">
            <img
              src={movieData.Poster}
              className="card-img-top"
              alt="Movie Poster"
            />
          </div>
        </section>
    )
}