import { Steps } from './components/Steps/Steps';
import { Graph } from './components/Graph/Graph';
import { Headline } from './components/Headline/Headline';
import { Story } from './components/Story/Story';
import { Styles } from './Styles';
import { Advantages } from './components/Advantages/Advantages';
import { Cards } from './components/Cards/Cards';
import { Objectives } from './components/Objectives/Objectives';
import { Pricing } from './components/Pricing/Pricing';

function App() {
  return (
    <div style={Styles.main}>
      <Headline/>
      <Story/>
      <Graph/>
      <Steps/>
      <Advantages/>
      <Cards/>
      <Objectives/>
      <Pricing/>
    </div>
  );
}

export default App;
