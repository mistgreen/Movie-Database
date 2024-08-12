import Footer from "../components/Footer";
import Library from "../components/Library";
import FavouritesContextProvider from "../contexts/FavouritesContext";

export default function Profile() {

    return (
      <FavouritesContextProvider>
        <div>
          <h2> Your Profile </h2>
          <Library/>
          <Footer/>
        </div>
      </FavouritesContextProvider>
    );
  }