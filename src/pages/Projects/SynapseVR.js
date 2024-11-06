import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, Typography, useMediaQuery } from '@mui/material'
import Footer from '../../components/Footer/Footer'
import '../Pages.css'

import SplashScreen from '../../img/synapseVR/Frame 64.png'
import Mappings from '../../img/synapseVR/2d3dMapping.png'
import DesignThinking from '../../img/synapseVR/DT_Process.png'
import Research from '../../img/synapseVR/Research.png'
import ProblemStatementMap from '../../img/synapseVR/ProblemStatementMap.png'
import Personas from '../../img/synapseVR/Personas.png'
import Storyboard from '../../img/synapseVR/image.jpeg'
import Matrix from '../../img/synapseVR/2x2Matrix.png'
import Prototyping from '../../img/synapseVR/Prototyping.png'
import SybotDrawings from '../../img/synapseVR/SyBot.png'
import Testing from '../../img/synapseVR/Modifications.png'

function SynapseVR() {
    const Mobile = useMediaQuery('(max-width: 600px)')
  return (
    <div>
        <Navbar />
        <Container 
          maxWidth='100%' 
          className='page-container'
          sx={{ 
            marginBottom: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            justifyContent: 'center',
            '@media (min-width: 600px)': {
              padding: '1.2rem 20%'
            },
            '@media (max-width: 600px)': {
              padding: '1rem 10%'
            }
          }}
        >
            <img 
                src={SplashScreen}
                alt='SynapseVR Poster' 
                width='100%'
            />
            <p className='body'>
                My journey before starting at bp was a multifaceted one. I had worked with many tools 
                and technologies spread out across software development, UI design, testing, and productivity. 
                This technical background is what got me placed onto the metaverse team, where it was made 
                to take a dimensional leap.
            </p>
            <p className='body'>
                Working on interactive and immersive environments meant I needed to expand my abilities 
                to the realm of three dimensions; specifically, Blender and Unity. The familiar 
                interfaces of 2D software gave way to complex 3D navigation, unfamiliar terminology, and a 
                whole new way of thinking spatially. It was like learning a new language, with a steep learning curve.
            </p>
            <img
                src={Mappings}
                alt='2D to 3D Mapping'
                width='50%'
            />
            <p className='body'>
            I attempted to conquer this hurdle by diving deep into the available online resources - YouTube videos, 
            online courses, and blogposts. While these were valuable and ultimately did help me reach my goal, 
            they also shared a common limitation: they were also inherently two-dimensional.
            </p>
            <Typography 
                sx={{ 
                    width: '100%',
                    fontFamily: 'Lora', 
                    fontWeight: 500, 
                    fontSize: Mobile ? '20px' : '25px',  
                    color: '#333', 
                }}
            >
                So What's Next?
            </Typography>
            <p className='body'>
            Technically, the available resources do a good job when it comes to helping learners expand 
            their skill sets to three-dimensional design and development tools. However, the experience 
            of working with such tools in a real space could have serious merit. With the advent of 
            augmented reality (AR) and virtual reality (VR) devices, I expected there to be something 
            compatible that could bridge the gap between theory and practical application in 3D design learning. 
            Additionally, artificial intelligence (AI) could greatly enhance the experience of learning. However, 
            none could be found.
            </p>
            <Typography
                sx={{ 
                    width: '100%',
                    fontFamily: 'Lora', 
                    fontWeight: 500, 
                    fontSize: Mobile ? '20px' : '25px',  
                    color: '#333', 
                }}
            >
                Bridging the Gap
            </Typography>
            <p className='body'>
            The key to this solution lay in understanding users’ attitudes towards e-learning platforms 
            and their own learning habits. For those who are employed full-time, how do they strike a 
            balance between personal development and task efficiency? How can we utilise evolving technology 
            such as AI to our advantage in this space?
            </p>
            <Typography
                sx={{ 
                    width: '100%',
                    fontFamily: 'Lora', 
                    fontWeight: 500, 
                    fontSize: Mobile ? '20px' : '25px',  
                    color: '#333', 
                }}
            >
                My Process
            </Typography>
            <p className='body'>
            The design thinking model was followed for this project. After synthesising insights from user 
            interviews, a problem statement was defined and different ideas were explored. This led 
            to prototyping across different fidelities and validating them with actual users. Based 
            on the feedback, a second iteration of prototyping was conducted to iron out creases in 
            the solution.
            </p>
            <img 
                src={DesignThinking}
                alt='Design Thinking Model'
                width='60%'
            />
            <Typography
                sx={{ 
                    width: '100%',
                    fontFamily: 'Lora', 
                    fontWeight: 500, 
                    fontSize: Mobile ? '20px' : '25px',  
                    color: '#333', 
                }}
            >
                User Research
            </Typography>
            <p className='body'>
            Interviews were conducted with the primary objective of understanding people’s perceptions, 
            needs, and concerns around using AI tools for the purpose of upskilling and development. 
            Some questions from the interview guide have been shown below.
            <ul>
                <li>How do you typically prefer to learn about new technologies you use at work?</li>
                <li>How do you pursue education opportunities outside of a work environment?</li>
                <li>What are some concerns you might have around AI as an educational tool?</li>
            </ul>
            Users’ thoughts were transcribed and collated into different themes via affinity diagrams. 
            The two key themes that stood out were (1) Building trust through personality in AI and (2) 
            Widening AI tool applicability via flexible learning.
            </p>
            <img
                src={Research}
                alt='Interview Quotes'
                width='90%'
            />
            <img
                src={ProblemStatementMap}
                alt='Problem Statement Formation'
                width='90%'
            />
            <Typography
                sx={{ 
                    width: '100%',
                    fontFamily: 'Lora', 
                    fontWeight: 500, 
                    fontSize: Mobile ? '20px' : '25px',  
                    color: '#333', 
                }}
            >
                Defining the Problem
            </Typography>
            <Typography
                sx={{ 
                    width: '100%',
                    fontFamily: 'Lora', 
                    fontWeight: 500, 
                    fontSize: Mobile ? '23px' : '27px',  
                    color: '#0e6bf1', 
                    textAlign: 'center'
                }}
            >
                “Designers and developers at bp lack access to interactive and engaging learning 
                materials when they are trying to expand their skill set into 3D technologies. 
                This hinders their ability to quickly and effectively utilise AI for up-skilling 
                purposes across a variety of roles.”
            </Typography>
            <p className='body'>
            Determining the root causes behind the insights collected from users was crucial for the 
            creation of a problem statement. To ensure that this statement matched the initial focus 
            on learning opportunities in the 3D development and design space, it was targeted towards 
            engineers and designers who wanted to expand their skill set into such tools.
            </p>
            <img
                src={Personas}
                alt='Personas'
                width='90%'
            />
            <p className='body'>
            From these four user groups, I proceeded to create a storyboard entailing my desired user experience with regards to the product.
            </p>
            <img
                src={Storyboard}
                alt='Storyboard'
                width='100%'
            />
            <Typography
                sx={{ 
                    width: '100%',
                    fontFamily: 'Lora', 
                    fontWeight: 500, 
                    fontSize: Mobile ? '20px' : '25px',  
                    color: '#333', 
                }}
            >
                App Features & Specifications
            </Typography>
            <p className='body'>
            By considering how different users interacted with the product in the storyboard, I was able to draft a set of specifications or technical requirements for it. These were polished into features which were prioritised using a 2×2 matrix.
            </p>
            <img
                src={Matrix}
                alt='2x2 Matrix'
                width='90%'
            />
            <p className='body'>
            To further define the set of actions available to users within the program, a navigational flow was created that maps out the different states users can find themselves in.
            </p>
            <Typography
                sx={{ 
                    width: '100%',
                    fontFamily: 'Lora', 
                    fontWeight: 500, 
                    fontSize: Mobile ? '20px' : '25px',  
                    color: '#333', 
                }}
            >
                The Making of SynapseVR
            </Typography>
            <p className='body'>
            The initial look and feel of the application was developed on paper. This was useful to test navigational flow and page layout. This was later polished into digital prototypes across two fidelities (low and medium) which was used for usability testing. Feedback from these tests was integrated into the final mockups.
            </p>
            <img
                src={Prototyping}
                alt='Prototyping'
                width='90%'
            />
            <p className='body'>
            An important aspect of the user interface is SyBot, the AI agent responsible for allocating users to a proficiency level, walking them through the course, and evaluating their tasks using comparable real-world examples. His appearance took inspiration from several existing robots across TV shows and animated movies. The baby face effect, which was applied to a number of these robots, played a part in SyBot’s development too.
            </p>
            <img
                src={SybotDrawings}
                alt='SyBot'
                width='90%'
            />
            <Typography
                sx={{ 
                    width: '100%',
                    fontFamily: 'Lora', 
                    fontWeight: 500, 
                    fontSize: Mobile ? '20px' : '25px',  
                    color: '#333', 
                }}
            >
                Testing & Validation
            </Typography>
            <p className='body'>
            Participants were interviewed with the high-fidelity prototypes to evaluate their effectiveness and efficiency. This was measured using a few pre-defined tasks (such as finding the module directory and selecting a particular module) with a pass/fail classification for each of them.
            </p>
            <p className='body'>
            While my tasks achieved a perfect pass rate, I made some key observations while observing my participants go about them. These were clarified as additional feedback on the product. My results were compiled into a report, which recommended changes across three levels: critical, major/minor, and cosmetic.
            </p>
            <img
                src={Testing}
                alt='Testing'
                width='100%'
            />
            <Typography
                sx={{ 
                    width: '100%',
                    fontFamily: 'Lora', 
                    fontWeight: 500, 
                    fontSize: Mobile ? '20px' : '25px',  
                    color: '#333', 
                }}
            >
                Final Product
            </Typography>
            <iframe title='Final Mockup' width="100%" height='800' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Ftv6Xw0QbdP5tLpVDEfBdey%2FAI-Education-Prototypes%3Fnode-id%3D208-193%26t%3DgEM7y5omJfgx2ZET-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D208%253A193%26show-proto-sidebar%3D1&hide-ui=1" allowfullscreen></iframe>
        </Container>
        <Footer />
    </div>
  )
}

export default SynapseVR