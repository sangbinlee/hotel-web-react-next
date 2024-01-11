// `app/contact/page.tsx` is the UI for the `/contact` URL
export default function Page() {
  return (
    <>
     

    <section id="contact-form" className="py-3">
      <div className="container">
        <h1 className="l-heading"><span className="text-primary">Contact</span> Us</h1>
        <p>Please fill out the form bellow to contact us</p>
        <form action="process.php">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>

    <section id="contact-info" className="bg-dark">
      <div className="container">

          <div className="box">
              <i className="fa-solid fa-hotel fa-3x"></i>
              <h3>Location</h3>
              <p>
              50 main st boston MA
              </p>
            </div>
            <div className="box">
              <i className="fa-solid fa-phone fa-3x"></i>

              <h3>Phone Number</h3>
              <p>
              (617)555-555
              </p>
            </div>
            <div className="box">
              <i className="fa-solid fa-envelop fa-3x"></i>

              <h3>Email adress</h3>
              <p>
                  frontdesk@hotelbt.com
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