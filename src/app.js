import './styles/app.css'
import Header from './Header.js'
import LeftMenu from './Left-menu'
import Nav from './nav.js'
import HeaderEmail from './headerEmail'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import backArrow from './assets/icons/back-arrow.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <main className="email-view">
        <Nav />
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <HeaderEmail />
          <section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>
        </article>
      </main>
    </div>
  )
}

export default App
