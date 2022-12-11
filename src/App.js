import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button primary outline rounded>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
