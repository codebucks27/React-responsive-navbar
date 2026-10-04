// import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
// import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('The root element was not found.');
}
const root = createRoot(rootElement);
root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
