import Image from 'next/image'

export default function Home() {
  return (
    <>
      
          
        <div id="showcase">
          <div className="container">
            <div className="showcase-content">
              <h1><span className="text-primary">Enjoy</span> Your Stay</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                rerum molestias nostrum omnis aperiam modi?
              </p>
              <a className="btn" href="about">About Our Hotel</a>
            </div>
          </div>
        </div>

        <section id="home-info" className="bg-dark">
          <div className="info-img"></div>
          <div className="info-content">
            <h2><span className="text-primary">The History</span> Of Our Hotel</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
              aliquam dolor alias iste autem, quaerat magni unde accusantium qui
              fuga placeat quidem quo pariatur, voluptatum, ea sequi? Corporis,
              explicabo quisquam dolor placeat praesentium nesciunt mollitia quos
              nobis natus voluptatum asperiores!
            </p>
            <a href="about" className="btn btn-light">Read More</a>
          </div>
        </section>
        
        <section id="features">
          <div className="box bg-light">
            <i className="fa-solid fa-hotel fa-3x"></i>
            <h3>Great Location</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
              excepturi!
            </p>
          </div>
          <div className="box bg-primary">
            <i className="fa-solid fa-utensils fa-3x"></i>

            <h3>Free Meals</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
              excepturi!
            </p>
          </div>
          <div className="box bg-light">
            <i className="fa-solid fa-dumbbell fa-3x"></i>

            <h3>Fitness Room</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
              excepturi!
            </p>
          </div>
        </section>
        
        <div className="clr"></div>
        
        <footer id="main-footer">
            <p>Hotel BT &copy; 2019, All Rights Rserved</p>
        </footer>
    </>
  )
}
