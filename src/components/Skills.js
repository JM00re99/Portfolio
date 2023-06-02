import Android from "../assets/img/Android-studio.png";
import reactimg from "../assets/img/React.png";
import html5 from "../assets/img/html5.png";
import php from "../assets/img/php.png";
import css from "../assets/img/css.png";
import figma from "../assets/img/Figma.png";
import bootstrap from "../assets/img/bootstrap.png";
import illustrator from "../assets/img/Illustartor.png";
import photoshop from "../assets/img/PhotoShop.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/Background-skills.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                    <div class="text-white">
                        <h2>Skills</h2>
                    </div>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item text-white">
                                <img src={Android} alt="Android Studio" />
                                <h5>Android Studio</h5>
                            </div>
                            <div className="item text-white">
                                <img src={reactimg} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item text-white">
                                <img src={html5} alt="html 5" />
                                <h5>html 5</h5>
                            </div>
                            <div className="item text-white">
                                <img src={php} alt="php" />
                                <h5>php</h5>
                            </div>
                            <div className="item text-white">
                                <img src={css} alt="css3" />
                                <h5>css</h5>
                            </div>
                            <div className="item text-white">
                                <img src={bootstrap} alt="bootstrap" />
                                <h5>bootstrap</h5>
                            </div>
                            <div className="item text-white">
                                <img src={figma} alt="Figma" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item text-white">
                                <img src={illustrator} alt="illustrator" />
                                <h5>Illustrator</h5>
                            </div>
                            <div className="item text-white">
                                <img src={photoshop} alt="Photoshop" />
                                <h5>PhotoShop</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image" src={colorSharp} alt="Color Sharp" />
    </section>
  )
}
