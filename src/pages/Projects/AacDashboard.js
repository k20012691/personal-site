import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, Typography, useMediaQuery } from '@mui/material'
import Footer from '../../components/Footer/Footer'
import '../Pages.css'
import AACBanner from '../../img/AAC Splash.png'
import AcademicPoster from '../../img/Poster Draft 1.png'
import DataTypes from '../../img/Attribute Data Type (1).png'
import Wireframes from '../../img/AAC Wireframes.png'

function AacDashboard() {
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
                src={AACBanner}
                alt='AAC Dashboard Poster' 
                style={{ borderRadius: '10px' }}
                width='100%'
            />
            <p className='body'>
                <p>During my three years at King’s, I had been actively involved with the Human-Computer Interaction (HCI) Lab run by Dr Timothy Neate. As I was wrapping up with my final year, he told me about an undergraduate research fellowship that the Lab was accepting applications for. This would be a three-month opportunity working on data visualisation and dashboards with Dr Neate and some of his postdocs.</p>
                <p>After applying and getting accepted into the program, I was given my task: implementing a dashboard for academic research on Augmentative and Assistive Communication (AAC) devices, studying their different modalities and attributes. The data was collated in the form of a CSV file with 562 articles across the ACM DL and SCOPUS academic databases. I was given the creative freedom to draw out as much information as possible, with the support of other members in the Lab. Our collective goal was further improving the understanding surrounding AAC data to facilitate decision-making within the space.</p>
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
                Analysis & Research
            </Typography>
            <p className='body'>
                <p>I began with analysing the database I was provided. It was associated with a paper published by the Lab, and included data on article keywords, different research questions being studied, and analytics surrounding device names and number of participants. I used a basic Python script to separate the CSV headers into different categories. This helped with clearly understanding the different types of data available, and how they could be combined for the study.</p>
                <p>The target audience was defined for this specific web app, and their characteristics were taken into account during the prototyping phase. We were looking to cater the end product to (1) academics who were researching different assistive technologies and (2) clinicians trying to identify appropriate devices for their patients.</p>
                <p>Upon studying the database, I narrowed down on four key areas of study:
                    <ol>
                        <li>Device Input/Output Mapping: Highlight the specific input modalities that were paired with outputs. For example, a paper evaluating a mobile digital image communication application designed for individuals with aphasia elaborated on the correlation between tactile inputs and a visual output. Several other sources cited this combination, too.</li>
                        <li>Scalar attribute combinations used by popular devices: Study the most commonly used combinations of scalar attributes. These could include how much a device user can personalise settings (customisable) or the amount of user input required for an action to take place (automaticity).</li>
                        <li>Research methods associated with I/O modalities: Where papers include exploratory research on individual devices, correlate the different methods used to evaluate device applicability. For example, a paper exploring how a nonspeaking 6-year-old girl underwent 7 months of augmentative communication intervention used the case study methodology, given its usefulness when it comes to relatively long-term research.</li>
                        <li>Device mapping to each community of focus: Observe device preferences within communities of focus, providing insights into their specific requirements and which devices prove to be most effective. In case of people with motor impairments, devices with mechanical inputs and audio-visual outputs were deemed the best fit based on frequency of use against other I/O combinations.</li>
                    </ol>
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
                Visualisation Selection
            </Typography>
            <p className='body'>
                <p>Different existing visualisations were studied that would be most appropriate for the data in consideration. These were found from existing academic papers studying variable correlation (not just from the AAC technology space). Two visualisations that stuck out to me were bivariate maps (Value-Suppressing Uncertainty Palettes) and the Rashomon Overview (Exploring and Curating Spare Decision Trees with Interactive Visualisation).</p>
                <img 
                    src={DataTypes}
                    alt='AAC Data Exploration'
                    width='100%'
                />
                <p>Both of these could be used to study the scalar attribute combinations for different AAC devices. Visualising the available data would result in (1) revealing insights into prevailing design patterns and configurations of devices, (2) identifying references to inform future design decisions surrounding AAC devices and (3) providing a data-driven perspective on the prevalence of different scalar attribute combinations.</p>
                <p>Datapine.com listed four kinds of dashboards: strategic, operational, analytical, and tactical. For my use case, analytical dashboards supported insight generation and visualising large amounts of complex data. They are characterised by:
                    <ul>
                        <li>Facilitating data exploration, analysis, and decision-making</li>
                        <li>Providing interactive features and controls to manipulate and explore the data</li>
                        <li>Offering visual representations to identify patterns, trends, and relationships within the data</li>
                        <li>Supporting capabilities to observe subsets of data</li>
                    </ul>
                    These features of analytical dashboards were integrated as features into my web app.
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
                Prototyping
            </Typography>
            <p className='body'>
                <p>I wanted the dashboard to include the following elements:
                    <ol>
                        <li>Business Question: Why the dashboard exists, context surrounding insights that could be drawn from it, and background knowledge around the field of assistive technologies.</li>
                        <li>Key Performance Indicators (KPIs): Metrics used to assess the information provided and how it answers the business question</li>
                        <li>Database: Provide viewers with an intuitive and readable version of the database used to increase transparency</li>
                        <li>Data Manipulation & Exploration: Filters across different aspects of data to assist viewers with decision-making and comparisons</li>
                        <li>Analytics: A quantitative summary of the data using charts</li>
                    </ol>
                </p>
                <p>To identify the most suitable visualisations for the dashboard, I branched out to form sub-questions from the main business question. Datapoints were gathered to answer each question, and different types of charts were explored for the same.</p>
                <p>Once user feedback was gathered via wireframes, I went into higher fidelities by defining a design language. This included layouts, interactions, and patterns.</p>
                <img 
                    src={Wireframes}
                    alt='AAC Dashboard Wireframes' 
                    width='100%'
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
                Implementation
            </Typography>
            <p className='body'>
                <p>JavaScript was my chosen language for the dashboard, because of its extensive web support and data visualisation capabilities. Specifically, I employed a React architecture for the web app and routing. Charts were rendered using D3.js - a powerful JavaScript library built for flexible and interactive data visualisation. In essence, it creates Scalable Vector Graphics (SVGs) styled using CSS and placed directly in the Document Object Model (DOM).</p>
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
                Academic Poster
            </Typography>
            <img 
                src={AcademicPoster}
                alt='AAC Dashboard Poster' 
                width='80%'
            />
        </Container>
        <Footer />
    </div>
  )
}

export default AacDashboard