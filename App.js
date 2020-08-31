import React, { Component } from 'react';
import Header from './Header';
import FEATURES from './index';
import MainForm from './Form';
import MainSummary from './MainSummary';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes


import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: FEATURES.Processor[0],
      'Operating System': FEATURES["Operating System"][0],
      'Video Card': FEATURES["Video Card"][0],
      Display: FEATURES.Display[0]
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = FEATURES[feature][newValue];

    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <Header />
        <main>
          <MainForm
            features={FEATURES}
            dollarFormat={USCurrencyFormat}
            handleUpdate={this.updateFeature}
            selected={this.state.selected}
          />
          <MainSummary
            selected={this.state.selected}
            dollarFormat={USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

export default App;