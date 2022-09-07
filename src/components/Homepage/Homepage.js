import Link from "next/link"
// import link from "next/link"

function Homepage() {
  return (
    <div>
        
        <section class="showcase">
        <nav className="homepage-nav">
<Link href=""><a className="homepage-nav-a">TheDoggCoin.com</a></Link>
        </nav>
    <div class="video-container">
        <video src="/video/snoopbackground.mp4" autoPlay loop></video>
    </div>
    <div class="content">
        <h1>Shoot For The Stars</h1>
        <h3>Full screen video landing page</h3>
        <a href="#about" class="btn">Read More</a>
    </div>
</section> </div>
  )
}

export default Homepage