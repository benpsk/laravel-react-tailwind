import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';

import {NavigationBar} from './components/NavigationComponent';

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar name={data.name} age={data.age} />);
