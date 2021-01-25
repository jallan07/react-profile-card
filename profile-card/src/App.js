import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfileCard from './components/ProfileCard';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <ProfileCard
        name="Victor Crest"
        age="26"
        location="London"
        followers="80K"
        likes="804K"
        photos="1.3K"
      />
    </Container>
  );
}

export default App;
