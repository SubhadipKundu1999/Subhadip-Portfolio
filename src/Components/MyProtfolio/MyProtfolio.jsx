import React from 'react'
import "./MyProtfolio.css"
import PortfolioItem from './PortfolioItem'
import IMG0 from "../../assets/portfolio-0.png"
import IMG1 from "../../assets/portfolio-1.png"
import IMG2 from "../../assets/portfolio-2.png"
import IMG3 from "../../assets/portfolio-3.png"
import IMG4 from "../../assets/portfolio-4.png"
import IMG5 from "../../assets/portfolio-5.png"
import IMG6 from "../../assets/portfolio-6.png"
import IMG20 from "../../assets/game-hub.png"
const data =
  [
    {
      id: 0,
      title: " s-stack-overflow-clone ",
      githublink: "https://github.com/SubhadipKundu1999/stackoverflow-clone",
      livedemoLink: " https://s-stack-overflow-clone.netlify.app/",
      img: IMG0
    },
    {
      id: 1,
      title: "This is a beautiful Weather App",
      githublink: "https://github.com/SubhadipKundu1999/WeatherApp",
      livedemoLink: "https://s-weather-report.onrender.com/",
      img: IMG6
    },
    {
      id: 2,
      title: "game hub",
      githublink: "https://github.com/SubhadipKundu1999/Game_Hub",
      livedemoLink: "https://game-hub-topaz-delta.vercel.app/",
      img: IMG20
    },
    {
      id: 3,
      title: "let'S Chat WebApp",
      githublink: "https://github.com/SubhadipKundu1999/let-sChatWebApp",
      livedemoLink: "https://github.com/SubhadipKundu1999/let-sChatWebApp",
      img: IMG5
    },
    {
      id: 4,
      title: "A travel booking web site",
      githublink: "https://github.com/SubhadipKundu1999/travel-site",
      livedemoLink: "https://subhadipkundu1999.github.io/travel-site/",
      img: IMG3
    },
    {
      id: 5,
      title: " Codewell-Newsletter-Popup-challenge ",
      githublink: "https://github.com/SubhadipKundu1999/Codewell-Newsletter-Popup-challenge",
      livedemoLink: " https://subhadipkundu1999.github.io/Codewell-Newsletter-Popup-challenge/",
      img: IMG1
    },

    {
      id: 6,
      title: "Onedeck-codewell-challange ",
      githublink: "https://github.com/SubhadipKundu1999/Onedeck-codewell-challange",
      livedemoLink: " https://subhadipkundu1999.github.io/Onedeck-codewell-challange/",
      img: IMG4
    },

    {
      id: 7,
      title: "codewell-Fiber-Landing-Page",
      githublink: "https://github.com/SubhadipKundu1999/codewell-Fiber-Landing-Page",
      livedemoLink: " https://subhadipkundu1999.github.io/codewell-Fiber-Landing-Page/",
      img: IMG2
    },




  ]
const Protfolio = () => {
  return (
    <div className="container protfolio-container" id="portfolio">
      <h5 className='section-heading-text'>My recent work </h5>
      <h2 className='section-heading'>Portfolio</h2>

      <div className="protfolio-main-container">
        {
          data.map(({ id, title, githublink, livedemoLink, img }) => {
            return (
              <PortfolioItem key={id} title={title} githubLink={githublink} liveLink={livedemoLink} img={img} />
            )
          })
        }

      </div>


    </div>
  )
}

export default Protfolio
