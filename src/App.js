import React, { Component } from 'react';
import { Steps } from './components/Steps/Steps';
import { Headline } from './components/Headline/Headline';
import { Story } from './components/Story/Story';
import { Styles } from './Styles';
import { Advantages } from './components/Advantages/Advantages';
import { Cards } from './components/Cards/Cards';
import { Objectives } from './components/Objectives/Objectives';
import { Pricing } from './components/Pricing/Pricing';
import { HeadlineMobile } from './components/HeadlineMobile/HeadlineMobile';
import { StoryMobile } from './components/StoryMobile/StoryMobile';
import { GraphMobile } from './components/GraphMobile/GraphMobile';
import { StepsMobile } from './components/StepsMobile/StepsMobile';
import { AdvantagesMobile } from './components/AdvantagesMobile/AdvantagesMobile';
import { CardsMobile } from './components/CardsMobile/CardsMobile';
import { ObjectivesMobile } from './components/ObjectivesMobile/ObjectivesMobile';
import { PricingMobile } from './components/PricingMobile/PricingMobile';
import { Footer } from './components/Footer/Footer';
import { FooterMobile } from './components/FooterMobile/FooterMobile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 900px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 900px)").addEventListener('change', handler);
  }
  render() {
    return (
      <div>
        {this.state.matches && (
          <div style={Styles.main}>
            <Headline />
            <Story />
            <Steps />
            <Advantages />
            <Cards />
            <Objectives />
            <Pricing />
            <Footer/>
          </div>
        )}
        {!this.state.matches && (
          <div style={Styles.mobile}>
            <HeadlineMobile />
            <StoryMobile />
            <StepsMobile />
            <AdvantagesMobile />
            <CardsMobile />
            <ObjectivesMobile />
            <PricingMobile />
            <FooterMobile/>
          </div>
        )}
      </div>
    );
  }
}

export default App;
