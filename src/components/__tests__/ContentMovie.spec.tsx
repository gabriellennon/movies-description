import { render, screen } from '@testing-library/react';
import { ContentMovie } from '../ContentMovie';

describe('<ContentMovie />', () => {
  it('renders movie details correctly', () => {
    const mockMovieData = {
      Title: 'Inception',
      Year: '2010',
      Rated: 'PG-13',
      Released: '16 Jul 2010',
      Runtime: '148 min',
      Genre: 'Action, Adventure, Sci-Fi',
      Director: 'Christopher Nolan',
      Writer: 'Christopher Nolan',
      Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
      Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      Language: 'English, Japanese, French',
      Country: 'USA, UK',
      Awards: 'Won 4 Oscars. Another 152 wins & 217 nominations.',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTgwNTA4Nzg5MDE@._V1_SX300.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '8.8/10' }],
      Metascore: '74',
      imdbRating: '8.8',
      ImdbVotes: '2,160,862',
      ImdbID: 'tt1375666',
      Type: 'movie',
      DVD: '20 Dec 2010',
      BoxOffice: '$292,576,195',
      Production: 'Syncopy, Warner Bros., Legendary Entertainment',
      Website: 'N/A',
      Response: 'True'
    };
    render(<ContentMovie movieData={mockMovieData} />);

    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByText('148 min')).toBeInTheDocument();
    expect(screen.getByText('Action, Adventure, Sci-Fi')).toBeInTheDocument();
    expect(screen.getByText('Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page')).toBeInTheDocument();
    expect(screen.getByText('A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.')).toBeInTheDocument();
    expect(screen.getByAltText('Movie Poster')).toHaveAttribute('src', 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTgwNTA4Nzg5MDE@._V1_SX300.jpg');
  });
});
