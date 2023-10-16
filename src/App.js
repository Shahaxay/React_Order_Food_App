import React from "react";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
function App() {
  const title='Delicious Food, Delivered To You';
  const slogan1='Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or deliver at home.';
  const slogan2='All our meals are cooked with high quality ingredients, just in time and of course by experienced chefs!'
  return (
    <React.Fragment>
      <Header/>
      <Banner title={title} slogan1={slogan1} slogan2={slogan2}/>
    </React.Fragment>
  );
}

export default App;
