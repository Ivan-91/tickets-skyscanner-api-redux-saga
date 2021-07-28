import React from "react";

class validationInReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        
        email: "",
        password: "",

      },
      errors: {
        
        email: "",
        password: "",

      }
    };
  }

  validate = (name, value) => {
    const { fields } = this.state;
    switch (name) {
      
      case "email":
        if (!value) {
          return "Email is Required";
        } else if (
          !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      
      case "password":
        if (!value) {
          return "Password is Required";
        } else if (value.length < 8 || value.length > 15) {
          return "Please fill at least 8 character";
        } else if (!value.match(/[a-z]/g)) {
          return "Please enter at least lower character.";
        } else if (!value.match(/[A-Z]/g)) {
          return "Please enter at least upper character.";
        } else if (!value.match(/[0-9]/g)) {
          return "Please enter at least one digit.";
        } else {
          return "";
        }
      
      default: {
        return "";
      }
    }
  };

  handleUserInput = e => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value)
      },
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    const { fields } = this.state;
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach(name => {
      const error = this.validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }
    if (fields.email && fields.passworde) {
      const data = {
        email: fields.email,
        password: fields.password,

      };
      window.alert("subit success");
      console.log("----data----", data);
    }
  };

  render() {
    const { fields, errors } = this.state;
    return (
      <div>
        <div className="border">

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={event => this.handleUserInput(event)}
              placeholder="Email Address"
            />
            <div>
              <span className="text-danger">{errors.email}</span>
            </div>
          </div>

          <div>
            <label>Password:</label>
            <input
              type="Password"
              name="password"
              value={fields.password}
              onChange={event => this.handleUserInput(event)}
              placeholder="Password"
            />
            <div>
              <span className="text-danger">{errors.password}</span>
            </div>
          </div>

        </div>
        <br />
        <button
          type="button"
          className="login-button pointer"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default validationInReact;