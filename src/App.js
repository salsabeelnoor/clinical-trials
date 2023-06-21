import logo from './logo.svg';
import './App.css';
import Introduction from './Components/Introduction/Introduction';
import StudySection from './Components/StudySection/StudySection';
import StorySection from './Components/StorySection/StorySection';

function App() {
  return (
    <div className=''>
      <Introduction></Introduction>
      <StudySection></StudySection>
      <StorySection></StorySection>
    </div>
  );
}

export default App;
