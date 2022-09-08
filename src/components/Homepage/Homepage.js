import Link from "next/link";
// import link from "next/link"
import logoImage from "assets/images/tdclogo.png";
function Homepage() {
  return (
    <div>
      <section class="showcase">
        <nav className="homepage-nav">
          <Link href="">
            <a className="homepage-nav-a">
              <img className="logo-image" src={logoImage} />
            </a>
          </Link>
        </nav>
        <div class="video-container">
          <video src="/video/snoopbackground.webm" autoPlay loop></video>
        </div>
        <div class="content">
          <Link href="presale">
            <button
              className="main-btn main-btn-1 btn-block btn-lg swapbtn"
              metamask-switch-network-button=""
            >
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              ROAD MAP
            </button>
          </Link>
          <Link href="presale">
            <button
              className="main-btn main-btn-1 btn-block btn-lg swapbtn"
              metamask-switch-network-button=""
            >
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
             TOKENOMICS
            </button>
          </Link>
          <Link href="presale">
            <button
              className="main-btn main-btn-1 btn-block btn-lg swapbtn"
              metamask-switch-network-button=""
            >
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              BUY PRESALE
            </button>
          </Link>
        </div>
      </section>{" "}
    </div>
  );
}

export default Homepage;
