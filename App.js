import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar1 from './components/Sidebar1';
import Sidebar2 from './components/Sidebar2';
import CBCPropEx from './props/CBCPropEx';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Main />
      <div className='sidebar'>
        <Sidebar1 />
        <Sidebar2 />
      </div>
      <CBCPropEx 
        username="VALLAMKONDA ABHINAY" 
        age={20} 
        hobbies={["Playing", "reading books"]}
        address={{ city: "Hyderabad", state: "Telangana" }}
        sendfun={() => alert('Button clicked!')}
      />
      <Footer />
    </div>
  );
}

export default App;