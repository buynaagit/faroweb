import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";
import { URL } from "../utils/appConstant";

const options = ["Нягтлан", "Багш", "Мэнэжэр"];
const defaultOption = options[0];

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      chosenJob: "",
      number: "",
      apply: false,
      selectedFile: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this._onSelect = this._onSelect.bind(this);
  }

  onFileChange = (event) => {
    console.log("dqwddqwdwqdqw");
    this.setState({ ...this.state, selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();

    formData.append("myFile", this.state.selectedFile);

    console.log(this.state.selectedFile);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async _onSelect(option) {
    await this.setState({ chosenJob: option.label });
    await this.setState({ apply: true });
    console.log("chosen job =", this.state.chosenJob);
  }

  componentDidMount() {}

  handleSubmit() {
    console.log(
      this.state.name,
      "\n",
      this.state.email,
      "\n",
      this.state.number,
      "\n",
      this.state.selectedFile,
      "\n",
      this.state.message,
      "\n",
      this.state.chosenJob,
      "\n"
    );
    alert("CV was submitted");
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("career", this.state.chosenJob);
    formData.append("phone", this.state.number);
    formData.append("description", this.state.message);
    formData.append("cv", this.state.selectedFile);
    axios
      .post(`${URL}/api/careers/upload/`, formData, config)
      .then(function (response) {
        console.log(`response`, response.data);
      })
      .catch(function (error) {
        console.log(`error`, error.response);
      });
  }

  checkApply(event) {
    event.preventDefault();
    if (this.state.name == "") {
      alert("Check your name");
    } else if (this.state.email == "") {
      alert("Check your email");
    } else if (this.state.number == "") {
      alert("Check your number");
    } else if (this.state.selectedFile == null) {
      alert("Check your file");
    } else if (this.state.message == "") {
      alert("Check your message");
    } else {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <section className="contact_info_area sec_pad bg_color">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="contact_info_item">
                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                  Office Address
                </h6>
                <p className="f_400 f_size_15">
                  Ulaanbaatar, Mongolia Regis palace 11th floor
                </p>
              </div>
              <p style={{ marginTop: "50px" }}>Нээлттэй ажлын байр</p>
              <Dropdown
                options={options}
                onChange={this._onSelect}
                value={defaultOption}
                placeholder="Select an option"
              />
              <div
                className="contact_info_item"
                style={{ marginTop: "30px" }}
              ></div>
              <div className="contact_info_item">
                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                  Contact Info
                </h6>
                <p className="f_400 f_size_15">
                  <span className="f_400 t_color3">Phone:</span>{" "}
                  <a href="tel:3024437488">(+976) 99887766</a>
                </p>
                <p className="f_400 f_size_15">
                  <span className="f_400 t_color3">Fax:</span>{" "}
                  <a href="tel:3024437488">(+976) 11223344</a>
                </p>
                <p className="f_400 f_size_15">
                  <span className="f_400 t_color3">Email:</span>{" "}
                  <a href="mailto:saasland@gmail.com">faro@mail.com</a>
                </p>
              </div>
            </div>
            <div className="contact_form col-lg-9">
              <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
                Хувийн мэдээлэл
              </h2>
              <form
                onSubmit={this.checkApply.bind(this)}
                className="contact_form_box"
                id="contactForm"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        onChange={this.handleChange}
                        disabled={!this.state.apply}
                        style={
                          this.state.apply == false
                            ? { backgroundColor: "#cccccc" }
                            : { backgroundColor: "white" }
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        onChange={this.handleChange}
                        disabled={!this.state.apply}
                        style={
                          this.state.apply == false
                            ? { backgroundColor: "#cccccc" }
                            : { backgroundColor: "white" }
                        }
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group text_box">
                      <input
                        type="number"
                        name="number"
                        id="tentacles"
                        placeholder="Дугаар"
                        onChange={this.handleChange}
                        disabled={!this.state.apply}
                        style={
                          this.state.apply == false
                            ? { backgroundColor: "#cccccc" }
                            : { backgroundColor: "white" }
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="file"
                      onChange={this.onFileChange}
                      disabled={!this.state.apply}
                    />
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <textarea
                        onChange={this.handleChange}
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Enter Your Message . . ."
                        disabled={!this.state.apply}
                        style={
                          this.state.apply == false
                            ? { backgroundColor: "#cccccc" }
                            : { backgroundColor: "white" }
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  className="btn_three"
                  disabled={
                    this.state.name == ""
                      ? true
                      : this.state.email == ""
                      ? this.state.number == ""
                      : this.state.message == ""
                      ? this.state.selectedFile == null
                      : false
                  }
                >
                  Apply
                </button>
              </form>
              <div id="success">Your message succesfully sent!</div>
              <div id="error">
                Opps! There is something wrong. Please try again
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
