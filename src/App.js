import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'shfis',
      label: 'Can I use React on my project?',
      content:
        'Yes, I can use React on my project. Yes, I can use React on my project. Yes, I can use React on my project.'
    },
    {
      id: 'fhoufihs',
      label: 'Can I use JavaScript on my project?',
      content:
        'Yes, I can use JavaScript on my project. Yes, I can use JavaScript on my project. Yes, I can use JavaScript on my project.'
    },
    {
      id: 'ajsodjoa',
      label: 'Can I use CSS on my project?',
      content: 'Yes, I can use CSS on my project. Yes, I can use CSS on my project. Yes, I can use CSS on my project.'
    }
  ];
  return <Accordion items={items} />;
}

export default App;
