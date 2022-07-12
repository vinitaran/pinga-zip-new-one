import React, { useState, useEffect } from "react";
import Pinga from "../../../asset/Logo.svg";
import "./report.css";
import cashback from "../../../asset/icon/cashback@3x.png";
import hours from "../../../asset/icon/24-hours@3x.png";
import privacy from "../../../asset/icon/privacy.png";
import science from "../../../asset/icon/science@3x.png";
import check from "../../../asset/icon/check.png";
import background from "../../../asset/background.png";
import whatsapp from "../../../asset/whatsapp.png";
import lock from "../../../asset/lock.png";
import mental from "../../../asset/mental.png";
import sexual from "../../../asset/sexual.png";
import Namrata_sign from "../../../asset/namrata-sign.jpeg";
import Namrata from "../../../asset/namrata.jpeg";
import Ishita from "../../../asset/ishita.jpeg";


import ladyicon from "../../../asset/ladyicon.png";
import skin from "../../../asset/skin.png";
import others from "../../../asset/others.png";
import physical from "../../../asset/physical.png";
import nut from "../../../asset/nut.png";
import chronic from "../../../asset/chronic.png";
import tick from "../../../asset/tick.png";
import whiteTick from "../../../asset/whiteTick.png";
import girls from "../../../asset/girls.png";
import girl2 from "../../../asset/girl2.png";
import Shehla from "../../../asset/shehla.png";
import docnote from "../../../asset/docnote.png";
import sign from "../../../asset/sign.png";
import { getUserReport } from "../../../reduxUtils/services/History";

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import HtmlParser from "react-html-parser";




const Report = () => {

  const [dataList, setDataList] = useState([])

  useEffect(() => {
    getUserReport('37').then((res) => {
      setDataList(res.data);
        console.log(res);
    });
  }, []);

  // health goals color
  let mentalColor=false
  let sexualColor=false
  let skinColor=false
  let nutritionColor=false
  let physicalColor=false
  let chronicColor=false
  let otherColor=false
  dataList[0]?.data.health_goal.map((data)=>{
    data=='mental_health'?mentalColor=true:"";
    data=='sexual_health'?sexualColor=true:"";
    data=='skin_health'?skinColor=true:"";
    data=='nutrition_diet'?nutritionColor=true:"";
    data=='physical_health'?physicalColor=true:"";
    data=='chronic_illness'?chronicColor=true:"";
    data=='others_more'?otherColor=true:"";
  })
  
  const currentGoals = [
    {
      active: true,
      color: mentalColor?"#2f43bb":"",
      textColor: mentalColor?"#19191d":"",
      heading1: "Mental",
      heading2: "Health",
      src: mental,
    },
    {
      active: true,
      color: physicalColor?"#fb8c00":"",
      textColor: physicalColor?"#19191d":"",
      heading1: "Physical",
      heading2: "Health",
      src: physical,
    },
    {
      active: false,
      color: sexualColor?"#ec407a":"",
      textColor: sexualColor?"#19191d":"",
      heading1: "Sexual",
      heading2: "Health",
      src: sexual,
    },
    {
      active: true,
      color: skinColor?"#2eb85c":"",
      textColor: skinColor?"#19191d":"",
      heading1: "Skin",
      heading2: "Health",
      src: skin,
    },
    {
      active: true,
      color: nutritionColor?"#ffc107":"",
      textColor: nutritionColor?"#19191d":"",
      heading1: "Nutrition",
      heading2: "& Diet",
      src: nut,
    },
    {
      active: false,
      color: nutritionColor?"#5e35b1":"",
      textColor: nutritionColor?"#19191d":"",
      heading1: "Chronic",
      heading2: "Illness",
      src: chronic,
    },
    {
      active: false,
      color: otherColor?"green":"",
      textColor: otherColor?"#19191d":"",
      heading1: "Others",
      heading2: "& more",
      src: others,
    },
  ];

  const steps = [
    [
      {
        healthDesc:
          "Pinga’s process to help you become the better version of yourself everyday. Starting with Pinga general health assessment ",
        tick: true,
        heading: "Pinga Profile - free for the first 1000 users",
        desc: "General Health - assessment",
        button: false,
        buttonData: "",
        result: "",
      },
      {
        tick: true,
        heading: "Personal health dashboard",
        desc: "Get your smart and personalised Pinga health dashboard to track your progress and keep health & wellness records in 1 place",
        button: false,
        buttonData: "",
        result: "",
      },
    ],
    [
      {
        healthDesc:
          "Act on the personalized health solution plan with your Health Advisor",
        tick: true,
        heading: "Special assessments started",
        desc: "",
        button: false,
        buttonData: "TALK TO HEALTH ADVISOR",
        result: "See Results Below",
      },
      {
        tick: false,
        heading: "Consultation pending",
        desc: [""],
        button: true,
        buttonData: "TALK TO HEALTH ADVISOR",
        result: "",
      },
    ],
  ];

  const recommendations = [
    {
      name: "Lifestyle Changes/practices",
      desc: [
        "Catch enough sleep",
        "Use sunscreen when stepping out",
      ],
    },
    {
      name: "Medical Recommendations",
      desc: [
        "Peroduo gel LA HS (to apply once daily on active acne at night)",
        "LITE GLO facewash LA BD ( twice daily)",
        "AQUASOFT-FC cream LA BD (to moisturize face)",
        "MOMATE cream LA OD ( once daily on rashes on hands)",
        "SUNCROS SOFT MATTE finish sunscreen LA as advised",
        "TUGAIN 5% solution LA HS (2ml/ day)",
        "Q-SERA hair serum LA OD ",
        "8X-KT shampoo LA 1-2 times/ week", 
        "YUGARD under eye serum OD HS ( once daily at night)"

      ],
    },
    {
      name: "Lab Tests",
      desc: [
        
        ],
    },
    {
      name: "General Notes",
      desc: ["Not recommeded for now."],
    },
  ];

  return (
    <div className="report__main">
      <div className="report">
        <div className="report__header" id="report__header">
          <div className="report__header__logo">
            <img src={Pinga} alt="logo" className="Logo" />
          </div>
          <div class="Rectangle-107">
            <img src={lock} class="Group-7891"></img>
            <div className="lock__data">
              <span class="Your-health-your-privacy-our-responsibility">
                Your health, your privacy, our responsibility!
              </span>
              <span class="We-follow-strict-personal-data-protection-laws-and-our-system-is-End-to-end-encrypted">
                We follow strict personal data protection laws and our system is
                End to end encrypted.
              </span>
            </div>
          </div>
          <div className="report__header__CTA">
            <p>CHAT WITH PINGA</p>
            <div class="whatsapp__logo"
            onClick={() => {
              window.open(
                'https://api.whatsapp.com/send?phone=919920725670&text=Hi pinga',
                '_blank',
              );
            }}
            >
              <img src={whatsapp} class="Group-7686" />
            </div>
          </div>
        </div>
        <div className="report__mainDiv">
          <div className="Personal-health-dashboard-for-active-integrated-health">
            Personal health dashboard for active integrated health
          </div>
          <div className="report__user__overview">
            <span class="Pinga-Patient-ID-01">Pinga Patient ID: 014</span>
            <span class="Phone-8151955277">
              <span class="text-style-1">Phone: </span>
              {dataList[0]?.mobile}
            </span>
            <span class="Email-riakapoorsgmailcom">
              <span class="text-style-1">Email: {dataList[0]?.email} </span>
            </span>
          </div>
          <div class="report__user__details">
            <div className="report__user__details__dessc">
              <div class="Rectangle-66">
                <img style={{width:'78px'}} src={ladyicon} class="" />
                </div>
              <div className="patient__details">
                <div className="patient__name">
                  <div class="Ria-Kapoor">Arya Tripathi</div>
                  <div class="-yrs-She-Her">{dataList[0]?.dob} yrs | She/ Her</div>
                </div>
                <div className="patient__body__details">
                  <div className="patient__height">
                    <div class="HEIGHT">HEIGHT</div>
                    <div class="-FT">{dataList[0]?.height} FT</div>
                  </div>
                  <div className="patient__weight">
                    <div class="WEIGHT">WEIGHT</div>
                    <div class="-KG">{dataList[0]?.weight} KG</div>
                  </div>
                  <div className="patient__bmi">
                    <div class="BMI" >BMI</div>
                    <div class="NORMAL">25.74 (Overweight)</div>
                    <div className="patient__bmi__rank">
                      <div class="Rectangle-99"></div>
                      <div class="Rectangle-99"></div>
                      <div class="Rectangle-99"></div>
                      <div class="Rectangle-99"></div>
                      <div class="Rectangle-105"></div>
                      <div class="Rectangle-105"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <span class="You-can-see-details-here">
              You can see details here
            </span>
            <span class="View-notes-from-doctor">View notes from doctor</span> */}
          </div>
          <div className="patient__health">
            <div className="patient__health__desc">
              <div className="patient__health__heading">
                Current<br></br> Health Goals
              </div>
              <div className="patient__health__data">
                <span class="Based-on-your-general-health-assessment-we-understand-your-goal-is-to-improve-your-Physical-Health">
                Based on your general health assessment, we understand your goal is to improve your {" "}
                  <span class="text-style-1">
                  Physical Health,
                  Sexual Health & Intimate health and
                  Mental Health

                  </span>
                </span>
              </div>
            </div>
            <div className="patient__health__images">
              {currentGoals.map((goal) => {
                return (
                  <div className="patient__health__image">
                    <div
                      class="Ellipse-84"
                      style={{ backgroundColor: goal.color }}
                    >
                      <img src={goal.src} class="Group" />
                    </div>
                    <div
                      class="Mental-Health"
                      style={{ color: goal.textColor }}
                    >
                      {goal.heading1}
                      <br></br>
                      {goal.heading2}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="Hang-in-there-youll-feel-much-better-in-the-coming-days-Keep-tracking-your-health-progress-with-P">
            Hang in there, you’ll feel much better in the coming days. Keep
            tracking your health progress with Pinga on your personal dashboard.
          </div>
          <div class="Health-Journey-Plan-for-Ria-Kapoor">
            Health Journey Plan for {dataList[0]?.name}
          </div>
          {steps.map((data, i) => {
            console.log(data);
            return (
              <div class="health__report">
                <div className="health__report__heading">
                  <div className="heath__report__Step">
                    <div class="Ellipse-59">
                      <img src={whiteTick} class="Group-7771" />
                    </div>
                    <span class="Step-01">Step {i + 1}</span>
                  </div>
                  <div className="heath__report__text">
                    <span class="Pingas-process-to-help-you-become-the-better-version-of-yourself-everyday-Starting-with-Pinga-gene">
                      {data[0].healthDesc}
                    </span>
                  </div>
                </div>
                <div className="health__report__desc">
                  {data.map((data) => {
                    return (
                      <div class="health__report__desc__card">
                        <div class="health__report__desc__card__heading">
                          {data.tick ? (
                            <div className="health__report__desc__card__heading__tick">
                              <img src={tick} class="Group-7847" />
                            </div>
                          ) : (
                            <div className="health__report__desc__card__heading__notick"></div>
                          )}
                          <span class="Pinga-Profile---free-for-the-first-1000-users">
                            {data.heading}
                          </span>
                        </div>
                        <div className="health__report__desc__card__data">
                          <span class="General-Health---with-assessment">
                            {data.desc}
                          </span>
                        </div>
                        {data.tick ? (
                          ""
                        ) : (""
                          // <div class="Rectangle-7">
                          //   <span class="Talk-to-health-Advisor">
                          //     {data.buttonData}
                          //   </span>
                          // </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {dataList[0]?.data.assesment_list?.map((data)=>{
            return(
              <>
              <div class="assessment__card">
                <div className="health__assessment__heading">
                  <div className="assessment__image">
                    <img src={physical} class="Group" />
                  </div>
                  <div className="assessment__heading">
                    <span class="sexual-intimate-health-special-assessment">
                    {HtmlParser(data[0])}
                    </span>
                  </div>
                </div>
                <div className="assessment__desc__one">
                  {/* <div className="assessment__desc__one__image">
                    <img src={girls} class="Group-7882" />
                  </div> */}
                  <div className="assessment__desc__one__data">
                    <span class="-out-of-10-Pinga-users-like-you-have-shown-similar-symptoms-and-have-completely-recovered-after-a-f">
                      <span class="text-style-1"></span>
                      {HtmlParser(data[1])}
                    </span>
                  </div>
                </div>
              </div>
              </>
            );
          })}
          
          
          <div className="report__user__overview">
            <span class="Pinga-Patient-ID-01">Pinga Patient ID: {dataList[0]?.pateind_id}</span>
            <span class="Phone-8151955277">
              <span class="text-style-1">Phone: </span>
              +91  {dataList[0]?.mobile}
            </span>
            <span class="Email-riakapoorsgmailcom">
              <span class="text-style-1">Email: {dataList[0]?.email} </span>
              
            </span>
          </div>

          {/* <div class="doctor">
            <div className="doctor__image">
              <div class="Rectangle-72">
                <img src={Namrata} class="Rectangle-72" />
              </div>
            </div>
            <div className="doctor__details">
              <span class="Dr-Shehla-Jamal">Dr. Namrata</span>
              <span class="MBBS-DNB-MRCOG-1-fellowship-in-ART-IVF-Germany-Gold-Medalist">
                Degrees: MBBS, MD Dermatology (PGI, Chd), DNB (DVL), FRGUHS (Aesthetic Dermatology)
              </span>
            </div>

            <div className="doctor__specialty">
              <span class="Specialist">Specialist</span>
              <span class="Gynae">Gynae</span>
            </div>
            <div className="doctor__specialty">
            
              <span class="Specialist">KMC reg no. </span>
              <span class="Gynae">JHK 2014 0000037KTK</span>
            </div>
          </div>
          <div class="doctor__notes">
            <div className="doctor__notes__heading">
              <div class="doctor__notes__heading__image">
                <img src={docnote} class="noun-stethoscope-4255828-1" />
              </div>
              <div className="doctor__notes__heading__details">
                <div class="Your-Doctors-notes">Your Doctor’s notes</div>
                <span class="Specialist">Date: 08-07-2022 </span>
                <div class="Priyanjali-heres-what-your-doctor-Shehla-observed-and-recommended-as-follow-Up-next-steps">Complaint of: Hair fall (female pattern hair loss), PMLE (polymorphous light eruptions), Acne 
                </div>
              </div>
            </div>
            <span class="Observation-during-video-consultation---Notes-by-the-doctor-to-be-reworded-by-health-advisor-for-cu">
              Observation during video consultation - Notes by the doctor (to be
              reworded by health advisor for customers to read and understand
              easily
            </span>
            <span class="Its-alright-it-will-get-better-with-the-subsequent-steps-and-lifestyle-management">
              It’s alright, it will get better with the subsequent steps and
              lifestyle management.
            </span>
            <span class="As-next-steps-for-the-next-7-days-Pinga-and-your-expert-will-work-together-with-you-on-the-followi">
              <span class="text-style-1">
                As next steps, for the next 7 days,{" "}
              </span>
              Pinga and your expert will work together with you on the
              following:
            </span>
            <div className="recommendations">
              {recommendations.map((data) => {
                return (
                  <div className="doctors__recommendation">
                    <div className="doctors__recommendation__tick">
                      <img src={check} class="iconcheck"></img>
                    </div>
                    <div className="doctors__recommendation__data">
                      <div className="doctors__recommendation__heading">
                        <span class="Lifestyle-recommendations">
                          {data.name}
                        </span>
                        <ul>
                          {data.desc.map((rec) => {
                            return (
                              <li class="Eat-something-high-in-fiber-that-includes-protein-to-keep-you-full-and-energized-If-you-start-the-d">
                                {rec}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="doctors__recommendation__points"></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <span class="It-will-address-the-root-causes-And-cure-you-with-a-holistic-approach-With-time-you-will-start-to">
              It will address the root causes. And cure you with a holistic
              approach. With time you will start to notice the difference and
              feel better. It’s a safe space.
            </span>
            <img src={Namrata_sign} class="image-19"></img>
            <span class="Signature">Signature</span>
          </div>
          <div className="brownie__point">
            <span class="Brownie-points-for-your-openness-and-for-your-incredible-willingness-to-share-Next-appointment-sche">
              <span class="text-style-1">Brownie points </span>
              for your openness and for your incredible willingness to share.
              Next Follow up in 1 month 
            </span>
          </div> */}
          <div className="extra__details">
            <span class="Below-are-some-lifestyle-management-tools-and-courses-for-you-from-the-Pinga-studio-and-collection">
              Below are some lifestyle management tools and courses for you from
              the Pinga studio and collection. Curated especially for you by our
              experts! We are bringing them soon to you. Stay engaged. It’s free
              for he first 1000 luck early birds like you.
            </span>
          </div>
          <div className="extra__details">
            <span class="Below-are-some-lifestyle-management-tools-and-courses-for-you-from-the-Pinga-studio-and-collection">
              Holistic health is not only about medicines. It’s about daily
              managing your health + wellness. We don’t just preach, we practice
              that!
            </span>
          </div>
          <div className="questions">
            <span class="ASK-QUESTIONS">ASK QUESTIONS?</span>
          </div>
          <div class="whatsapp_button"
          onClick={() => {
            window.open(
              'https://api.whatsapp.com/send?phone=919920725670&text=Hi pinga',
              '_blank',
            );
          }}
          >
              <img src={whatsapp} class="Group-7686" style={{width:"35px", height:"35px", marginRight:"1em"}}/>
            <span class="chat-with-pinga-health-Advisor">
              Chat with Pinga Health Advisor
            </span>
          </div>
          <div className="tabs">
            <div class="Rectangle-61" style={{ backgroundColor: "#F7E8AD" }}>
              <div class="Coming-soon">Coming soon</div>
              <div class="Well-Being-Reports">Well Being Reports</div>
            </div>
            <div class="Rectangle-61">
              <div class="Coming-soon">Coming soon</div>
              <div class="Well-Being-Reports">Self Journaling</div>
            </div>
            <div class="Rectangle-61" style={{ backgroundColor: "#F8D1D3" }}>
              <div class="Coming-soon">Coming soon</div>
              <div class="Well-Being-Reports">Moodometer & hormonometer</div>
            </div>
            <div class="Rectangle-61" style={{ backgroundColor: "#F8CFDF" }}>
              <div class="Coming-soon">Coming soon</div>
              <div class="Well-Being-Reports">
                Pinga lifestyle and wellness courses{" "}
              </div>
            </div>
            <div class="Rectangle-61" style={{ backgroundColor: "#CDEDE3" }}>
              <div class="Coming-soon">Coming soon</div>
              <div class="Well-Being-Reports">Meditation and more</div>
            </div>
            <div class="Rectangle-61" style={{ backgroundColor: "#D6E2F0" }}>
              <div class="Coming-soon">Coming soon</div>
              <div class="Well-Being-Reports">Social Pinga Community</div>
            </div>
          </div>
          <div className="pinga__details">
            <div class="Once-you-have-tried-Pinga-you-will-never-go-back">
              Once you have tried Pinga, you will never go back
            </div>
            <div class="Sustain-your-overall-good-health-with-Pinga-the-worlds-1st-complete-health-companion-for-women">
              Sustain your overall good health with Pinga, the world's 1st
              complete health companion for women
            </div>
            <div className="pinga__details__tabs">
              <div class="Rectangle-47">
                <img src={cashback} className="iconcashback" />
                <span class="Money-back-Guranteed">Money-back Guranteed</span>
              </div>
              <div class="Rectangle-47">
                <img src={hours} className="iconcashback" />
                <span class="Money-back-Guranteed ">
                  Available 24x7 Tele-health Expert
                </span>
              </div>
              <div class="Rectangle-47">
                <img src={science} className="iconcashback" />
                <span class="Money-back-Guranteed ">
                  Backed by science & Research
                </span>
              </div>
              <div class="Rectangle-47">
                <img src={privacy} className="iconcashback" />
                <span class="Money-back-Guranteed ">
                  Data privacy Responsibility
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
