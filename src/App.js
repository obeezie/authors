import logo from './logo.svg';
import './App.css';
import Dashboard from './views/Dashboard';
import AddAuthorForm from './components/AddAuthorForm';
import EditAuthorForm from './components/EditAuthorForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Favorite Authors</h1>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/authors" element={<AddAuthorForm />} />
        <Route path="/authors/:id" element={<EditAuthorForm />} />
      </Routes>

    </div>
  );
}

export default App;
