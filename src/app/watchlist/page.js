import Header from "../components/Header";
import Footer from "../components/Footer";
import Library from "../components/Library";
import FavouritesContextProvider from "../contexts/FavouritesContext";

export default function Watchlist() {
    return (
      <FavouritesContextProvider>
        <div>
          <Header/>
          <Library/>
          <Footer/>
        </div>
      </FavouritesContextProvider>
    );
  }