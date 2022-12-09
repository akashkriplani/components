import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button primary outline rounded>
          Click me!
        </Button>
      </div>
      <div>
        <Button success rounded>
          See me!
        </Button>
      </div>
      <div>
        <Button warning outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Checkout!
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          Buy Now!
        </Button>
      </div>
    </div>
  );
}

export default App;
