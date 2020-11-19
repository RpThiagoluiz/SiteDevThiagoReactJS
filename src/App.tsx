import React, { Fragment } from 'react'
import GlobalStyles from './assets/styles/Globalstyles'
import LandingPage from './pages/Landing'



const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <LandingPage />
    </Fragment>
  )
}



export default App;
