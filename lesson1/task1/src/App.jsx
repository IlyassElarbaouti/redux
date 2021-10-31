import React, { Component } from "react";
import ThemedButton from "./ThemedButton.jsx";
import { themes , ThemeContext} from "./themes-context.js";

export default class App extends Component {
  state = {
    theme: themes.light,
  };
  toggleTheme = () => {
    const newTheme =
      this.state.theme === themes.dark ? themes.light : themes.dark;
    this.setState({
      theme: newTheme,
    });
  };
  render() {
    return (
        <>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme} className="btn">
            Dynamic Theme
          </ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toggleTheme} className="btn">
          Default Theme
        </ThemedButton>
      </>
    );
  }
}
