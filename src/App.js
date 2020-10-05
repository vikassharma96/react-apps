import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class App extends Component {
  state = {
    selectedIndex: 0,
  };

  handleSelect = (index) => {
    this.setState({
      selectedIndex: index,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20",
          }}
        >
          React Apps Collection!
        </h4>
        <main
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Carousel
            activeIndex={this.state.selectedIndex}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-200"
                src="https://picsum.photos/800/400"
                alt="First slide"
                style={{ maxWidth: "100%", height: "600px" }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-200"
                src="https://picsum.photos/800/400"
                alt="Second slide"
                style={{ maxWidth: "100%", height: "600px" }}
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-200"
                src="https://picsum.photos/800/400"
                alt="Third slide"
                style={{ maxWidth: "100%", height: "600px" }}
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
