import Carousel from 'react-bootstrap/Carousel';

function HomeScreen() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/cans.jpg')}
          alt="..."
        />
        <Carousel.Caption>
          <h3>“Listening without bias or distraction is the greatest value you can pay another person.”</h3>
          <p>— Denis Waitley -</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/clayBanks.jpg')}
          alt="..."
        />

        <Carousel.Caption>
          <h3>“The eye sees only what the mind is prepared to comprehend.”</h3>
          <p>― Robertson Davies -</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../images/hands.jpg')}
          alt="..."
        />

        <Carousel.Caption>
          <h3>"Real knowledge is to know the extent of one's ignorance."</h3>
          <p>- Confucius -</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeScreen;