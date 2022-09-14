import { Heading, Text, Box } from "@chakra-ui/react";
import tdcIcon from "../../assets/images/tdclogo.png";
function RoadMap() {
  return (
    <Box className="Roadmap" id="Roadmap">
      <Heading textAlign="center">Road Map</Heading>
      <section id="cd-timeline" class="cd-container">
        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-picture"></div>

          <div class="cd-timeline-content">
            <h2>December 2021: Concept and Idea - Development begins</h2>
            <div class="timeline-content-info">
              <span class="timeline-content-info-title">
                <i class="fa fa-certificate" aria-hidden="true"></i>
                Presale rate - 0.00001bnb
              </span>
              <span class="timeline-content-info-date">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                March 2022 - Present
              </span>
            </div>
            <p>
              <ul>
                <li>March 2022: Origin $TDC Presale begins - 900</li>
                <li>BNB raised</li>
                <li>March 2022: Burning of unsold tokens</li>
                <li>March 2022; PANCAKESWAP launch.</li>
                <li>March 2022: In-House $TDC-NFT Marketplace released</li>
              </ul>
            </p>
            <span class="cd-date">march 16</span>
            {/* <ul class="content-skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Wordpress</li>
          </ul> */}
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-movie">
           
          
          </div>

          <div class="cd-timeline-content">
            <h2>April 2022: Breeding game released</h2>
            <div class="timeline-content-info">
              <span class="timeline-content-info-title">
                <i class="fa fa-certificate" aria-hidden="true"></i>
                Total Available supply-175m
              </span>
              <span class="timeline-content-info-date">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                April 2022
              </span>
            </div>
            <p>
              <ul>
                <li>April 2022: Ethereum bridge,POLYGON bridge</li>
                <li>May 2022; coingecko and coinmarketcap listing</li>
                <li>May 2022: FORMULA 1 sponsorship and promotional collab</li>
                <li>
                  June 2022: In-House Land/item-NFT marketplace on BNB Layer 2
                  (Loom Network) release.
                </li>
                <li>June 2022: Unified Land and SHIBIE marketplace</li>
              </ul>
            </p>
            <span class="cd-date">April 18</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-picture"></div>

          <div class="cd-timeline-content">
            <h2>July 2022: Community alpha (card battle game) released</h2>
            <div class="timeline-content-info">
              <span class="timeline-content-info-title">
                <i class="fa fa-certificate" aria-hidden="true"></i>
                -Listing rate - 1TDC - 0.00001bnb
              </span>
              <span class="timeline-content-info-date">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
              </span>
            </div>
            <p>
              <ul>
                <li>July 2022: Origin $TDC Presale begins - 900</li>
                <li>BNB raised</li>
                <li>July 2022: Burning of unsold tokens</li>
                <li>July 2022; PANCAKESWAP launch.</li>
                <li>July 2022: In-House $TDC-NFT Marketplace released</li>
              </ul>
            </p>
            <span class="cd-date">July 2022</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-location"></div>

          <div class="cd-timeline-content">
            <h2>August 2022: Mavis Hub released </h2>
            <div class="timeline-content-info">
              <span class="timeline-content-info-title">
                <i class="fa fa-certificate" aria-hidden="true"></i>
                Front End Developer
              </span>
              <span class="timeline-content-info-date">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
              </span>
            </div>
            <p>
              <ul>
                <li>August 2022: METAVERSE land area sales</li>
                <li>August 2022: All land in Quarter 1 - 4600 BNB .</li>
              </ul>
            </p>
            <span class="cd-date">Aug 2022</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-location">  <img src={tdcIcon} /></div>

          <div class="cd-timeline-content">
            <h2>September 2022: UBISOFT PARTNERSHIP</h2>
            <div class="timeline-content-info">
              <span class="timeline-content-info-title">
                <i class="fa fa-certificate" aria-hidden="true">
                  Permanently Locked Liquidity
                </i>
              </span>
              <span class="timeline-content-info-date">
                <i class="fa fa-calendar-o" aria-hidden="true">
                  anti rug pull
                </i>
              </span>
            </div>
            <ul>
              <li>The DoggCoin participates in Ubisoft Entrepreneurs Lab</li>
            </ul>

            <span class="cd-date">Sep18</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-movie">  </div>

          <div class="cd-timeline-content">
            <h2>BINANCE LAUNCHPAD push</h2>
            <div class="timeline-content-info">
              <span class="timeline-content-info-title">
                <i class="fa fa-certificate" aria-hidden="true"></i>
                Yield Farming portal
              </span>
              <span class="timeline-content-info-date">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                (up to 180% APY)
              </span>
            </div>
            <p>
              <ul>
                <li>Heavy marketing and Push for binance listing.</li>
              </ul>
            </p>
            <span class="cd-date">Oct 26</span>
          </div>
        </div>
      </section>
    </Box>
  );
}

export default RoadMap;
