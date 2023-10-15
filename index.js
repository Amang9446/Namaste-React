const heading = React.createElement('h1', {id:'heading'},"I am H1", React.createElement('h2',{id:'heading2'}, 'I am H2'));
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);