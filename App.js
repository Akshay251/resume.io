
import './App.css';
import profile from './profile.png';
import { BiSolidPhoneCall } from 'react-icons/bi';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactStars from 'react-stars'

function App() {
  return (
    <>
      <div className='header'>
        <div className='headerRight'>
          <h1 id='name'>AKSHAYAKUMAR SHEKHAR HIREMATH</h1>
          <p id='role'><h3>React Developer</h3></p>
          <div className='profileCont'>
            <div className='profilePic'>
              <img src={profile} alt='profile pic' />
            </div>
            <div className='contact'>
              <div className='links'>
                <a href='tel:+919538383698' className='phoneCall'><BiSolidPhoneCall size="25px"/></a>
                <a href='https://www.instagram.com/akshay__s_h/?hl=en' target='_blank' className='insta'><InstagramIcon /></a>
                <a href='https://www.linkedin.com/in/akshaykumar-hiremath-38a002256/' target='_blank' className='linkdin'><LinkedInIcon /></a>
                <a href='mailto:as.hiremath2512@gmail.com' target='_blank' className='mail'><EmailIcon /></a>
                <a href='https://github.com/Akshay251' target='_blank' className='git'><GitHubIcon /></a>
              </div>
              <div>
                <p id='address'>Vrushabha Building,<br/>
                Mruthyunjaya Nagar,<br/>
                10th main, 3rd cross,<br/>
                Ranebennur - 581115<br/>
                Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='card'>
            <h3>Education</h3>
            <hr className='line'></hr>
            <div className='educontent'>
              <div className='btech'>
                <div className='btechyear'>
                  2020 - 2024
                </div>
                <div className='cse'>
                  <a href='https://sjce.ac.in/' target='_blank'>
                    <h5>
                      Bachelor of Technology in Computer Science and Engineering, 
                      Sri Jayachamarajendra College of Engineering, Mysuru<br/>
                      CGPA: 8.98
                    </h5>
                  </a>
                </div>
              </div>
              <div className='btech'>
                <div className='btechyear'>
                  2018 - 2020
                </div>
                <div className='cse'>
                  <a href='https://explore.manomayasoft.com/prerana/' target='_blank'>
                    <h5>
                      PCMC, KLE Prerana PU Science Residential College, 
                      Kotgundhunsi, Gabbur cross, Hubli<br/>
                      93.5%
                    </h5>
                  </a>
                </div>
              </div>
              <div className='btech'>
                <div className='btechyear'>
                  2018 
                </div>
                <div className='cse'>
                  <a href='https://school.careers360.com/schools/nittur-central-school-ranebennur' target='_blank'>
                    <h5>
                      10th, CBSE, <br/> 
                      Nittur Central School, 
                      Magod Road, Ranebennur<br/>
                      87.3%
                    </h5>
                  </a>
                </div>
              </div>
            </div>
        </div>
        <div className='card'>
          <h3>Professional Summary</h3>
          <hr className='line'></hr>
          <div className='profsum'>
            <h5>
              <p><i>
              I have honed my skills in <span id='highlight'>Web Development</span> and <span id='highlight'>Programming</span>, consistently delivering measurable results and contributing to the success of my teams and organizations. 
              My ability to adopt to various environments quickly has allowed me to excel in fast-paced and dynamic environments, demonstrating adaptability and a strong work ethic.
              I am known for my attention to detail and my commitment to achieving both short-term objectives and long-term strategic goals. 
              I thrive on challenges and am dedicated to continuous learning, staying up-to-date with industry trends and innovations. 
              I am confident that my experience and skills make me a valuable asset, and I am eager to contribute my expertise to your organization's success.
              </i></p>
            </h5>
          </div>
        </div>
        <div className='card'>
          <h3>Skills</h3>
          <hr className='line'></hr>
          <div className='skillset'>
            <h4>React JS -- </h4><ReactStars value={4} edit={false} half={true} size={25} color1='grey' />
            <h4>Node JS -- </h4><ReactStars value={3} edit={false} half={true} size={25} color1='grey' />
            <h4>HTML5 -- </h4><ReactStars value={4} edit={false} half={true} size={25} color1='grey' />
            <h4>CSS3 -- </h4><ReactStars value={4} edit={false} half={true} size={25} color1='grey' />
            <h4>JavaScript -- </h4><ReactStars value={4} edit={false} half={true} size={25} color1='grey' />
            <h4>MySQL -- </h4><ReactStars value={3.5} edit={false} half={true} size={25} color1='grey' />
            <h4>MongoDB -- </h4><ReactStars value={3} edit={false} half={true} size={25} color1='grey' />
            <h4>Python -- </h4><ReactStars value={3.5} edit={false} half={true} size={25} color1='grey' />
            <h4>C/C++ -- </h4><ReactStars value={4} edit={false} half={true} size={25} color1='grey' />
          </div>
        </div>
        <div className='card'>
          <h3>Projects</h3>
          <hr className='line'></hr>
          <div className='projects_container'>
            <div className='project'>
              <i><h5>Tours and Travel website</h5></i>
              <hr className='line2'></hr>
              <p>
                A single page website developed using react js that allowed user to register and sign in and select the desired package, 
                which is then confirmed with the fake payment gateway portal developed with razor pay api
              </p>
              <p>
                <span className='deco'>Tech:</span><br/>
                <i>React JS, NodeJS, FireBase, MangoDB, Bcrypt, RazorPay API, SweetAlerts</i>
              </p>
            </div>
            <div className='project'>
              <i><h5>Car Rental</h5></i>
              <hr className='line2'></hr>
              <p>
                A website developed to facilitate the user to choose among various vehicles available for rent. MySql was used to handel
                the backend framework and frontend was developed using the view engine.
              </p>
              <p>
                <span className='deco'>Tech:</span><br/>
                <i>HTML5, CSS3, JavaScript, View Engine, MySQL</i>
              </p>
            </div>
            <div className='project'>
              <i><h5>CSS3 Background Generator</h5></i>
              <hr className='line2'></hr>
              <p>
                A website developed to help figure out the perfect background color mix for the CSS3 beginners. The website displays the 
                live look of the background along with the code for the same.  
              </p>
              <p>
                <span className='deco'>Tech:</span><br/>
                <i>HTML5, CSS3, JavaScript</i>
              </p>
              <center><a href='https://akshay251.github.io/css_background.io/' target='_blank'>Live Demo</a></center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
