export default function Contact() {
  return (
    <section id="contact">
      <h2 className="gradient-text">Contact</h2>
      <form className="card">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message"></textarea>
        <button className="btn">Send Message</button>
      </form>
    </section>
  )
}
