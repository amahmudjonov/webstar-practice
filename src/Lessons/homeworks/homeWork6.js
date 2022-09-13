import React, { Component } from "react";
import { createRef } from "react";
import "../css/homework6.css";

export default class HomeWork6 extends Component {
  constructor() {
    super();
    this.inputVal1 = createRef();
    this.inputVal2 = createRef();
    this.inputVal3 = createRef();
    this.inputVal4 = createRef();
    this.searchInputVal = createRef();
    this.state = {
      btns: [
        { id: 1, btnName: "Cars", className: "" },
        { id: 2, btnName: "Logo", className: "" },
      ],
      selectedId: 1,
      id: 0,
      name: "",
      info: "",
      url: "",
      logoUrl: "",
      cars: [
        {
          id: 1,
          name: "Aston Martin",
          info: "The most beautiful and fastest car in the world.",
          url:
            "https://avatars.mds.yandex.net/i?id=5f0689ca83e365aacd206243bfc1e71d-5886707-images-thumbs&n=13",
          logoUrl:
            "https://million-wallpapers.ru/wallpapers/1/61/409044910391296/logotip-aston-martin.jpg",
        },
        {
          id: 2,
          name: "Audi",
          info: "The most beautiful and fastest car in the world.",
          url:
            "https://audimediacenter-a.akamaihd.net/system/production/media/87623/images/ab698ab934ad7ee485d260ff1d2569be289629dc/A1915496_x500.jpg?1582587184",
          logoUrl:
            "https://avatars.mds.yandex.net/i?id=472b76f88f0f45fb80a732e00e01acb2-5230359-images-thumbs&n=13",
        },
        {
          id: 3,
          name: "Opel",
          info: "The most beautiful and fastest car in the world.",
          url:
            "https://s1.cdn.autoevolution.com/images/models/OPEL_Grandland-2021_main.jpg",
          logoUrl:
            "https://avatars.mds.yandex.net/i?id=c044bb23694a60c9fe65fd70be581a04-5586941-images-thumbs&n=13",
        },
        {
          id: 4,
          name: "Mustang",
          info: "The most beautiful and fastest car in the world.",
          url:
            "https://avatars.mds.yandex.net/i?id=211d925dd54992ffc6351820ecfdb263-4966461-images-thumbs&n=13",
          logoUrl:
            "https://avatars.mds.yandex.net/i?id=3bf5298d330559664a146adfa4eb3edc-5668742-images-thumbs&n=13",
        },
        {
          id: 5,
          name: "Chevrolet Camaro",
          info: "The most beautiful and fastest car in the world.",
          url:
            "https://cdn.motor1.com/images/mgl/Jepjg/s3/chevrolet-camaro.jpg",
          logoUrl:
            "https://avatars.mds.yandex.net/i?id=25556227e435a23e9fbd71ffb1c6d34e-5693613-images-thumbs&n=13",
        },
        {
          id: 6,
          name: "Nissan",
          info: "The most beautiful and fastest car in the world.",
          url:
            "https://cdn.britannica.com/37/122237-050-D42A6BBE/Nissan-GT-R-Supercar-2009.jpg?w=400&h=300&c=crop",
          logoUrl:
            "https://avatars.mds.yandex.net/i?id=2b65f5e9afbf0c9c5ce7d46769317269-5220389-images-thumbs&n=13",
        },
        {
          id: 7,
          name: "Bugatti",
          info: "The most beautiful and fastest car in the world.",
          url:
            "https://www.partner.bugatti/fileadmin/_processed_/3/3/csm_BUGATTI-PARTNER_f7bb5213bf.png",
          logoUrl:
            "https://avatars.mds.yandex.net/i?id=87a054aac982c71616bddfc7972cad7a-5889279-images-thumbs&n=13",
        },
        {
          id: 8,
          name: "Ford Shelbiy",
          info: "The most beautiful and fastest car in the world.",
          url:
            "https://avatars.mds.yandex.net/i?id=cd25e077dfe73281210683379056e307-5663902-images-thumbs&n=13",
          logoUrl:
            "https://avatars.mds.yandex.net/i?id=f5761ac8edb8d0be397e4f8a05304653-5888529-images-thumbs&n=13",
        },
      ],
      isOpen: false,
      carOrLogo: true,
      filteredValue: [],
    };
  }

  getName = (e) => {
    var name = e.target.value;
    this.setState({
      name: name.charAt(0).toUpperCase() + name.slice(1),
    });
    console.log();
  };
  getInfo = (e) => {
    var name = e.target.value;
    this.setState({
      info: name.charAt(0).toUpperCase() + name.slice(1),
    });
  };
  getUrl = (e) => {
    this.setState({
      url: e.target.value,
    });
  };
  getLogoUrl = (e) => {
    this.setState({
      logoUrl: e.target.value,
    });
  };
  addCar = () => {
    const cars = this.state;
    if (
      this.inputVal1.current.value !== "" &&
      this.inputVal2.current.value !== "" &&
      this.inputVal3.current.value !== "" &&
      this.inputVal4.current.value !== ""
    ) {
      var carInfo = {
        id: cars.cars.length + 1,
        name: cars.name,
        info: cars.info,
        url: cars.url,
        logoUrl: cars.logoUrl,
      };
      this.setState({
        isOpen: false,
      });
      this.setState({
        cars: this.state.cars.concat(carInfo),
      });
    } else {
      alert("You must fill every place");
    }
  };

  addCarBtn = () => {
    this.setState({
      isOpen: true,
    });
  };

  setId = (id) => {
    this.setState({
      selectedId: id,
    });
    if (id === 1) {
      this.setState({
        carOrLogo: true,
      });
    } else {
      this.setState({
        carOrLogo: false,
      });
    }
  };

  getSearchInputVal = (e) => {
    var val = e.target.value;
    this.setState({
      cars: this.state.cars.filter((car) => {
        return car.name.toLowerCase().includes(val.toLowerCase());
      }),
    });
  };

  render() {
    const { cars, isOpen, filteredValue } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            {isOpen ? (
              <div className="text-center mt-5">
                <h3>Add car</h3>
                <form action="" className="form-control m-auto p-5">
                  <input
                    ref={this.inputVal1}
                    onChange={this.getName}
                    className="form-control m-2"
                    type="text"
                    placeholder="car-name"
                  />
                  <input
                    ref={this.inputVal2}
                    onChange={this.getInfo}
                    className="form-control m-2"
                    type="text"
                    placeholder="car-information"
                  />
                  <input
                    ref={this.inputVal3}
                    onChange={this.getUrl}
                    className="form-control m-2"
                    type="text"
                    placeholder="car-img-url-address"
                  />
                  <input
                    ref={this.inputVal4}
                    onChange={this.getLogoUrl}
                    className="form-control m-2"
                    type="text"
                    placeholder="car-logo-url-address"
                  />
                </form>
                <button className="btn btn-success m-5" onClick={this.addCar}>
                  Add car
                </button>
              </div>
            ) : (
              <div className="row">
                <div className="d-flex justify-content-between p-2">
                  <div className="d-flex">
                    {this.state.btns.map((item, index) => {
                      return (
                        <button
                          onClick={() => this.setId(item.id)}
                          key={index}
                          className={
                            item.id === this.state.selectedId
                              ? "btn btn-link m-2 active"
                              : "btn btn-link m-2"
                          }
                        >
                          {item.btnName}
                        </button>
                      );
                    })}
                  </div>
                  <input
                    ref={this.searchInputVal}
                    onChange={this.getSearchInputVal}
                    className="form-control m-2"
                    type="text"
                    placeholder="search cars..."
                  />
                  <button
                    onClick={this.addCarBtn}
                    className="btn btn-success m-2"
                  >
                    add car
                  </button>
                </div>
                {cars.map((item, index) => {
                  return (
                    <div key={index} className="card w-25 m-3 m-auto">
                      <div>
                        <img
                          src={this.state.carOrLogo ? item.url : item.logoUrl}
                          className="card-img-top"
                          alt={item.name}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.info}</p>
                        <a href="#" className="btn btn-primary">
                          Learn more...
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
