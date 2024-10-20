import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, Typography, useMediaQuery } from '@mui/material'
import Footer from '../../components/Footer/Footer'
import '../Pages.css'
import DatavizVideo from '../../img/f1-demo.gif'
import RqAnalysis from '../../img/RQ Analysis.png'
import Rq1Prototype from '../../img/RQ1 Prototype.png'
import Rq2Prototype from '../../img/RQ2 Prototype.png'
import Rq3Prototype from '../../img/RQ3 Prototype.png'
import Rq4Prototype from '../../img/RQ4 Prototype.png'
import BrandLanguage from '../../img/Brand Language.png'
import ErgastSchema from '../../img/ergast_db.png'
import DataCleaning from '../../img/Data Cleaning.png'
import F1Banner from '../../img/F1 Banner (1).png'

function F1DataViz() {
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
                src={F1Banner} 
                alt='F1 Dataviz Poster' 
                width='100%'
            />
          <p className='body'>
            <p>
            I have been following Formula 1 since I was bullied into watching the Netflix documentary ‘Drive To Survive’. While the on-track action played a big role in keeping my interest levels high, I was also very intrigued by the work that goes on behind the scenes, from developing the car’s core philosophy to split-second strategy calls that completely change race outcomes.
            </p>
            <p>
            As part of a data visualisation course offered by my university, I had the chance to study and analyse some of these strategy calls. Unlike the rest of my undergraduate modules, this master's level elective required a capstone project to be completed by the end of the semester. Each week, I studied relevant content while simultaneously working on this project.
            </p>
            <p>
            I chose the sports analytics brief which prompted me to think about existing trends within Formula 1 Racing. It walked me through the data-driven design methodology: problem definition, data acquisition, data analysis, design exploration, rationale development, and implementation. The steps have been walked through in more detail below.
            </p>
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
                Formulating Research Questions
            </Typography>
            <p className='body'>
            The Analytics part of the prompt dealt with defining two or more exploratory Research Questions (RQs) that would help explore different aspects of Formula 1 Racing. The questions could be from any of the following types:
            <ul>
              <li><u>Descriptive</u>: Analyse what is currently going on or exists. For example, a public poll asking what segment of the population voted Labour.</li>
              <li><u>Relational</u>: Explore the relationships between two or more variables. For example, the same poll comparing Labour votes by immigrants versus naturalised citizens.</li>
              <li><u>Causal</u>: Study whether one or more variables affects the outcome variables. For example, releasing an advertisement promoting the Labour party and observing if it changed the way people voted for it.</li>
            </ul>
            The prompt also provided me with a predefined RQ which could be used as a baseline to formulate more specific RQs:
            </p>
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
              "Analyse performances of Formula 1 teams.<br />Are there any detectable trends?""
            </Typography>
            <p className='body'>
            I came up with the following RQs that could deep-dive into aspects of F1 such as individual sector importance when it came to lap times, tire strategy differences among teams, and the impact of races getting red-flagged. 
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
                RQ Analysis & Data Requirements
            </Typography>
            <img
              src={RqAnalysis}
              alt='RQ Analysis and Data Requirements'
              width='100%'
              style={{ margin: '1rem 0 1rem 0' }}
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
                Dataset Study
            </Typography>
            <p className='body'>
              <p>After understanding the different requirements for my set of RQs, I explored different datasets available online - these included APIs and CSV files. To evaluate their appropriateness for my questions, I compared the required data types to the features available in the dataset.</p>
              <p>This revealed two suitable datasets - Ergast and Fast F1. Both of them were APIs that had common fields including race results, driver and team standings, and telemetry data. One point of consideration was that the Fast F1 site stated that timing data for some sessions were missing. Additionally, Fast F1 only provided data from the 2018 season onwards. On the other hand, Ergast went back to the first-ever Formula 1 season in 1950.</p>
              <img
              src={ErgastSchema}
              alt='Ergast API Database Schema'
              width='100%'
              style={{ margin: '1rem 0 1rem 0' }}
            />
              <p>Another dataset I came across was a CSV file on Kaggle that focused specifically on red-flagged races (RQ4). It was an extension of the Ergast API with an emphasis on races affected by red flags.</p>
              <p>Further exploration revealed that there was no single dataset that had the highest degree of usefulness for the RQs. For instance, one could use the Ergast API to obtain the start time and duration of a race along with participating driver information. This could be complemented with Fast F1’s sector and lap times for each driver. In addition to facilitating a much more detailed analysis of driver and team performance, this could factor in attributes such as tire compounds, weather conditions, and track layouts.</p>
              <p>This led to the decision of combining the two APIs by writing a Python script to extract, polish, and store the amalgamation as a CSV file. Other advantages of this included minimising network requests, faster data retrieval speeds, and eliminating the dependence on the server to be functioning for the web app to work. For example, this was the segment of code used to extract certain weather data for a given race:</p>
              <img
                src={DataCleaning}
                alt='Python code for data cleaning'
                width='100%'
                style={{ margin: '1rem 0 1rem 0' }}
              />
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
                Prototyping The Visualisation
            </Typography>
            <p className='body'>
              <p>Prototyping began with an evaluation of commonly-used data visualisation charts and the data they were best-suited to representing. For each research question, I looked at the specific data available to me and sketched out low-fidelity wireframes. To branch out more, I also considered multiple visualisations for each question to get as much information out of the data as possible.</p>
              <p>The theme for RQ1 was analysing team performance. This could be broken down into many aspects: race results, overall car speed and reliability, or even culminating both drivers’ individual performances. Ultimately, I chose to focus on team consistency over their entire tenure in the sport. </p>
              <img
                src={Rq1Prototype}
                alt='RQ1 Prototyping'
                width='100%'
                style={{ margin: '1rem 0 1rem 0' }}
              />
              <p>The most suitable option for displaying this information was a temporal line chart with number of wins by season, given their minimal visual weight and emphasis on trends. To include all participating teams for a given set of seasons, colour was used as the differentiating variable for all teams part of the visual. This colour was chosen based on the team’s last-used colour scheme to enable easy identification.</p>
              <p>A key consideration was that teams often enter the sport at different times. For example, Ferrari has been around since the inception of the sport in 1950, while the currently-dominant Red Bull only entered in 2005. There are also situations where teams exit the sport and decide to come back a few seasons later. Mercedes went through such a situation, taking a hiatus from 1955 to 2010. To avoid data misrepresentation, teams with rebrands and exits were denoted with a gap in their individual line chart.</p>
              <p>As for RQ2, the focus was on which sectors play the biggest role in the overall lap time. For context, each race circuit is divided into three sectors. This gives drivers more clarity as to how fast they are in a given part of the lap. Sectors in the same circuit can have exceedingly different characteristics. For example, the first sector at the Autódromo Hermanos Rodríguez in Mexico City is nearly all straights; on the other hand, the second is known for its tight, twisty turns that demand more aerodynamic performance over pure engine power.</p>
              <img
                src={Rq2Prototype}
                alt='RQ2 Prototyping'
                width='100%'
                style={{ margin: '1rem 0 1rem 0' }}
              />
              <p>I wanted to explore different sectors in a circuit and identify which one was most crucial to do well on for a good lap. This was a particularly interesting question, given that sectors also differ in elevation, grip, and even environmental conditions - drivers could have certain preferences and driving styles which equip them to extract a better sector time than others, positively contributing to their overall lap.</p>
              <p>Because individual circuits would be in focus here, a spatial graph made the most sense. This chart would be modified to look like the circuit in question. Drivers that went quickest through that sector during each non-flagged lap of the race would be represented via a stacked column chart inside the sector map with legends providing further context. The scope of this chart would be limited to only comparing the drivers racing on that circuit during the given season.</p>
              <p>RQ3 was about tire strategies and if they vary among top and bottom teams. The basis for this was that bottom teams often need to take more risk in order to gain advantages during a race. Examples could be different technical setups, brave pitstop calls, or unique tire strategies. To visualise this data, a stacked column chart for each driver representing the number of laps they drove with each tire compound was employed. This time, colour was used to differentiate different tire compounds as defined by Pirelli, the official tire supplier for Formula 1.</p>
              <img
                src={Rq3Prototype}
                alt='RQ3 Prototyping'
                width='100%'
                style={{ margin: '1rem 0 1rem 0' }}
              />
              <p>The two options for this chart type were linear or circular. A linear chart won in this case because of its ability to facilitate comparisons very clearly as compared to circular charts, which are more suited to temporal data.</p>
              <p>Finally, RQ4 considered the impact of red-flagged races on race results and whether these acted as outliers when it came to the eventual season standings. An example where I personally witnessed this was the 2020 Italian Grand Prix. This race was won by Pierre Gasly and his team, AlphaTauri. A red flag caused by Charles Leclerc crashing out put Gasly at the front of the pack as everyone else scrambled into the pits for fresh tires. Since he had changed tires just before the red flag, he was able to move ahead and keep his lead until the end of the race. Despite this phenomenal result, AlphaTauri finished only 7th in the championship.</p>
              <img
                src={Rq4Prototype}
                alt='RQ4 Prototyping'
                width='100%'
                style={{ margin: '1rem 0 1rem 0' }}
              />
              <p>Multiple different combinations of charts were explored for this data. Eventually, I settled on a circular chart with bars inside, indicating the proportion of points that such races contributed to the podium’s season tally. These bars are widely used when it comes to relative comparisons, and are ideal for this situation.</p>
              <p>For the race mentioned above, this visualisation would work perfectly to highlight the unexpectedness of this result because it scored Gasly 25 points out of his season tally of 75 (33%). Other members of the podium in that race, Carlos Sainz of McLaren and Lance Stroll of Racing Point scored 17% and 20% of their season tally respectively. For them, the chart would indicate that finishing high up in the order is not as unexpected - validated by the fact that their teams finished 3rd and 4th in the championship.</p>
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
                The Final Visualisation
            </Typography>
            <p className='body'>
              <p>For my prompt, I had to select one of these visualisations to polish and create in higher fidelities. This would be programmed using JavaScript with the assistance of its data visualisation library D3.</p>
              <p>I decided to go with the tire strategy visual, given that it could facilitate predictive analysis for future races at a given circuit keeping environmental conditions in mind.</p>
              <p>For example, the 2018 British Grand Prix saw drivers dividing strategies between a one-stop and a two-stop across soft and medium tires. The relatively cooler temperatures of 28 degrees decelerated the tire wear, allowing teams to stay away from the more durable but slower hard tires. This trend was observable for all future British races with cooler temperatures and no rain intervention.</p>
              <p>With the initial wireframe in mind, I designed accompanying components such as the legends, input dropdowns, and information layouts. These were created keeping a common brand language in mind, following the official Formula 1 fonts and colour schemes. To make the colours stand out a bit more, I made use of a dark background.</p>
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={BrandLanguage}
                alt='Brand Language'
                width='60%'
                style={{ margin: '1rem 0 1rem 0' }}
              />
              </div>
              <p>The chart itself was created with driver codes on the X-axis and laps driven on the Y-axis. As mentioned previously, the individual stacks in a column were given the same HEX code that Pirelli assigned to its tire compounds. A legend was provided for this to keep things clear.</p>
              <img 
                src={DatavizVideo}
                alt='F1 Dataviz App Runthrough'
                width='100%'
                style={{ margin: '1rem 0 1rem 0' }}
              />
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
                Mini Retro
            </Typography>
            <p className='body'>
              <p>This project was completed over three months as part of a Master’s degree level course. As someone working with data visualisation specifically for the first time, it was very interesting to see how much it differs from traditional product or user interface design. A large number of considerations come into play while dealing with different kinds of data. I also took the opportunity of going through different academic research within the field to influence some of my decision-making when it came to visualisation prototyping.</p>
              <p>There were a few things I would have done differently across the different stages of this project from ideation to programming:</p>
              <ul>
                <li>My Python script to extract the data from different APIs was thorough, but did not account for changes on-the-go. Since the actual visualisations were designed and modified continuously for optimal display after the data was collected, it meant I had to cut a few corners. For example, arranging drivers in order of finishing would have added tremendous value to the graph to indicate how successful the selected strategy was. However, the functions I used to call these results into the CSV file arranged drivers randomly, which is rendered into the graph. With more polishing, I would append a column to my CSV indicating final positions and organise them in the chart to convey a more meaningful piece of information.</li>
                <li>I wanted to make the chart more interactive by using hover components - powerful tools to condense more information in a confined space when it comes to such visualisations. These would be used to identify driver profiles and get more information on individual tire stints during a race. However, the lack of time and restrictions on allowed JavaScript libraries made this difficult.</li>
              </ul>
            </p>
        </Container>
        <Footer />
    </div>
  )
}

export default F1DataViz