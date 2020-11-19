import React from 'react'
import {
   Container
} from './styles'


const LandingPage: React.FC = () => {
   return (
      <Container>
         <h1>Bem-Vindo (a)!</h1>
         <p>Sou um web developer júnior, (HTML, CSS, JS).Experiência com desenvolvimento utilizando React.js.
            Possuo conhecimentos em Git, em styled components,SASS e typescript. 
            Expertise em React Hooks e outros populares workflows da biblioteca. 
            Esse site foi criado para ser utilizado de portifolio, nele você encontrará diversos projetos.
            Atualmente o site esta sendo atualizado para ReactJS.
         </p>

         
        <div className="container-icons">
           <a href="https://github.com/RpThiagoluiz" target="_blank"><img src="../../assets/img/imgLandingPage/github.svg" alt="GitHub RpThiagoLuiz"/></a>
           <a href="https://twitter.com/RpThiagoluiz" target="_blank" ><img src="../../assets/img/imgLandingPage/twitter.svg" alt="Twitter RpThiagoLuiz"/></a>
           <a href="https://www.linkedin.com/in/thiago-luiz-0984191a7/" target="_blank" ><img src="../../assets/img/imgLandingPage/linkedin.svg" alt="LinkedIn ThiagoLuiz"/></a>
        </div>
         
      </Container>
   )
}

export default LandingPage