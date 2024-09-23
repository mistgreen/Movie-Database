import Header from "../components/Header";
import Footer from "../components/Footer";
import Library from "../components/Library";
import FavouritesContextProvider from "../contexts/FavouritesContext";

export default function Watchlist() {
    return (
      <FavouritesContextProvider>
        <div className="home-content">
          <div className="watchlist-header">
            <Header/>
          </div>
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