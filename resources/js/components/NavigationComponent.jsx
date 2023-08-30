import { createRoot } from 'react-dom/client';
function NavigationBar({ name, age }) {
    // TODO: Actually implement a navigation bar

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Your age is {age}.</p>
        </div>
    );
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar name={data.name} age={data.age} />);


