import Footer from "../components/Footer";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
  }
};

async function fetchMovie(id) {
  console.log("Id ---> " + id);
  let url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  
  let response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
  const data = await response.json();
  return data;
};

export default async function Movie({params}) {
  console.log("im a console log -->" + params.movie);
  const id  = params.movie;
  const movie = await fetchMovie(id);
    return (
    <section>
        <h2>
          {movie.title}
        </h2>
        <Footer/>
    </section>
    );
  }

  