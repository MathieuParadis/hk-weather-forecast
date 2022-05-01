// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import NavMenuCard from '../components/NavMenuCard';

// DATA IMPORTS
import navMenu from '../data/NavMenu';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="home">
      <h1>Home page</h1>  

        <div className="row row-cols-2 row-cols-md-4 g-4 mb-4">
          { 
            navMenu.homepage.map((element) => {
              return (
                <NavMenuCard navElement={element} key={element.title} />
              )
            })
          }
        </div>  
    </div>
  );
};

export default Home;