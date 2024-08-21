import Header from "../components/Header";
import Footer from "../components/Footer";
import Library from "../components/Library";
import FavouritesContextProvider from "../contexts/FavouritesContext";

export default function Watchlist() {
    return (
      <FavouritesContextProvider>
        <div className="main-page">
          <Header/>
          <div className="right-bar">
            <Library/>
          </div>
          <div className="watchlist-footer">
            <Footer/>
          </div>
          
        </div>
      </FavouritesContextProvider>
    );
  }