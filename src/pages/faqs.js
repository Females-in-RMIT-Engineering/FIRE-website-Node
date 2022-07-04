import React from 'react';
import { Helmet } from "react-helmet";
import Faq from "react-faq-component";
import "./pagesCSS/faq.css";

const dataPart1 = {
  title: "Memberships",
  rows: [
    {
      title: "Do I have to pay for a FIRE+ membership?",
      content: `No, FIRE's 2022 membership is completely free for RMIT students! 
                Just sign up by filling out the form linked below. <br />
                <a style={{color: '#EC6C09'}} href="https://docs.google.com/forms/d/e/1FAIpQLSfhd4fiAH9qcjkvYebNE1pXbK_DYSGB6CfVaE25LLi77exc6Q/viewform" target={'_blank'} rel='noreferrer'>[FIRE+ 2022 Membership Form]</a>`
    },
    {
      title: "What do I get out of joining the FIRE+ club?",
      content:
      `By joining FIRE you will be able to attend our social and industry events. 
      You will also be added to our mailing list where you will receive club updates and our monthly 
      newsletter full of student tips, information on upcoming events and industry opportunities.`
    },
    {
      title: "I am not a female engineering student. Can I still be a member?",
      content: `Yes! While we encourage womxn in engineering disciplines to join FIRE, everyone is welcome 
                to become a member. Irregardless of gender identity, study area or study level, we would love 
                for you to be part of our community.`
    },
    {
      title: "How can I join the FIRE+ Committee?",
      content: `Recruitment is held throughout the year depending on what positions we have available on the 
                committee. Open positions will be advertised on social media and via email, including 
                information on requirements and the application process.`
    }
  ]
};

const dataPart2 = {
  title: "Events",
  rows: [
    {
      title: "How do I find out about upcoming FIRE+ events?",
      content: `All social and industry events are posted on the FIRE Facebook page. If you don't have 
                social media, upcoming events are also shared though the FIRE member email list and newsletter.`
    },
    {
      title: "I would like to collaborate with FIRE+ on an event. How can I get in touch?",
      content:
      `If you are interested in hosting an event with FIRE, contact our student committee through email 
      at
      <a target={"_blank"} rel='noreferrer' href="mailto:firengineering@rmit.edu.au" class="social">[firengineering@rmit.edu.au]</a>`
    }
  ]
};

const dataPart3 = {
  title: "Industry Opportunity",
  rows: [
    {
      title: "I have an opportunity I think FIRE+ members would be interested in. How do I share it?",
      content: `We can share your opportunity with our members in our club newsletter or on social media. 
                Email us at
                <a target={"_blank"} rel='noreferrer' href="mailto:firengineering@rmit.edu.au" class="social">[firengineering@rmit.edu.au]</a> 
                or send us a message on Facebook to get in touch.`
    },
    {
      title: "How can my company sponsor FIRE+?",
      content:
      `Every year, FIRE invites companies to support our student club by participating in our sponsorship 
      program. A sponsorship package offers your organization an opportunity to promote your projects and 
      culture to passionate, high achieving students from a range of disciplines.
      <br />
      Please contact the club executives at 
      <a target={"_blank"} rel='noreferrer' href="mailto:firengineering@rmit.edu.au" class="social">[firengineering@rmit.edu.au]</a>
      to inquire about supporting FIRE.`
    }
  ]
};

const styles = {
  // bgColor: 'white',
  //titleTextColor: "blue",
  // rowContentColor: 'grey',
  arrowColor: "#D03807"
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const FAQs = () => {
    return (
      <div>
        <Helmet>
            <title>FAQs - FIRE+</title>
        </Helmet>

        <div class = 'faqContent'>
          <br />

          <h1 style={{ marginBottom: "-10px" }}>FAQs</h1>

          <p class = 'faqheading'>
            Couldn't find what you are looking for? Send us an email at firengineering@rmit.edu.au</p>

          <div class = 'faqs'>
            <div>
              <br />
              <Faq data={dataPart1} styles={styles} config={config} />
            </div>

            <div>
              <br />
              <Faq data={dataPart2} styles={styles} config={config} />
            </div>

            <div>
              <br />
              <Faq data={dataPart3} styles={styles} config={config} />
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  };

  export default FAQs;