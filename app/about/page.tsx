 // `app/about/page.tsx` is the UI for the `/about` URL
export default function Page() {
  return (
    <> 
        
        <section id="about-info" className="bg-light py-3">
          <div className="container">
            <div className="info-left">
              <h1 className="l-heading">
                <span className="text-primary">About</span> Hotel BT
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                adipisci laboriosam aut illo ipsum quo voluptatibus deleniti modi
                rem numquam. Facere deleniti hic quo facilis modi vero molestiae
                quia eligendi!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                quod ut molestiae et molestias at modi mollitia dolore assumenda
                nisi.
              </p>
            </div>
            <div className="info-right">
              <img src="./img/photo-2.jpg" alt="hotel" />
            </div>
          </div>
        </section>
        
        <div className="clr"></div>
        
        <section id="testimonials" className="py-3">
            <div className="container">
              <h2 className="l-heading">What Our Guest Said</h2>
              <div className="testimonials bg-primary">
                <img src="./img/person-1.jpg" alt="Samantha" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                  atque recusandae natus? Aut odit tempore magni incidunt unde
                  consequatur odio quae ipsum harum, culpa temporibus quibusdam facere
                  ab doloremque officia. Veritatis officia quae nisi eum? Quis beatae
                  adipisci nulla qui?
                </p>
              </div>
              <div className="testimonials bg-primary">
                <img src="./img/person-2.jpg" alt="jen" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                  atque recusandae natus? Aut odit tempore magni incidunt unde
                  consequatur odio quae ipsum harum, culpa temporibus quibusdam facere
                  ab doloremque officia. Veritatis officia quae nisi eum? Quis beatae
                  adipisci nulla qui?
                </p>
              </div>
              
            </div>
        </section>

        <footer id="main-footer">
          <p>Hotel BT &copy; 2019, All Rights Rserved</p>
        </footer>

    </>
  )
}