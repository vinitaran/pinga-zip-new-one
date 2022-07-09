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
import Shehla_sign from "../../../asset/shehla-sign.jpeg";
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

const Report = () => {

  useEffect(() => {
    getUserReport('24').then((res) => {
      // setDataList(res.data);
        console.log(res);
    });
  }, []);
  
  const currentGoals = [
    {
      active: true,
      // color: "#2f43bb",
      // textColor: "#19191d",
      heading1: "Mental",
      heading2: "Health",
      src: mental,
    },
    {
      active: true,
      color: "#fb8c00",
      textColor: "#19191d",
      heading1: "Physical",
      heading2: "Health",
      src: physical,
    },
    {
      active: false,
      // color: "#ec407a",
      // textColor: "#19191d",
      heading1: "Sexual",
      heading2: "Health",
      src: sexual,
    },
    {
      active: true,
      color: "#2eb85c",
      textColor: "#19191d",
      heading1: "Skin",
      heading2: "Health",
      src: skin,
    },
    {
      active: false,
      color: "",
      textColor: "",
      heading1: "Nutrition",
      heading2: "& Diet",
      src: nut,
    },
    {
      active: true,
      color: "#5e35b1",
      textColor: "#19191d",
      heading1: "Chronic",
      heading2: "Illness",
      src: chronic,
    },
    {
      active: true,
      color: "",
      textColor: "",
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
        heading: "Specialized Assessment Taken",
        desc: "Take the AI driven Specialized Sexual & Intimate Health assessment",
        button: false,
        buttonData: "TALK TO HEALTH ADVISOR",
        result: "See Results Below",
      },
      {
        tick: true,
        heading: "Consultation",
        desc: ["Consultation 1 done with Dr. Shehla","Therapy session 4 completed with Ishita Gogia"],
        button: true,
        buttonData: "TALK TO HEALTH ADVISOR",
        result: "",
      },
    ],
  ];

  const recommendations = [
    {
      name: "Lifestyle recommendations",
      desc: [
        "Flax seeds , two tsf over one week",
        "Around one fistful of roasted Makhana",
        "Fruits, around 350 GM's per day, mixed variety",
      ],
    },
    {
      name: "Medical Recommendations",
      desc: [
        "Medicine:Cap ovabless one of for 15 days",
      ],
    },
    {
      name: "Lab Tests",
      desc: [
        "S. TSH",
        "S. PROLACTIN",
        "USG pelvis for uterus, adnexa, endometrial thickness"
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
            <span class="Pinga-Patient-ID-01">Pinga Patient ID: 002</span>
            <span class="Phone-8151955277">
              <span class="text-style-1">Phone: </span>
              +91 8910338370
            </span>
            <span class="Email-riakapoorsgmailcom">
              <span class="text-style-1">Email: </span>
              das.puja.181998@gmail.com
            </span>
          </div>
          <div class="report__user__details">
            <div className="report__user__details__dessc">
              <div class="Rectangle-66">
                <img style={{width:'78px'}} src={ladyicon} class="" />
                </div>
              <div className="patient__details">
                <div className="patient__name">
                  <div class="Ria-Kapoor">Puja Das</div>
                  <div class="-yrs-She-Her">24 yrs | She/ Her</div>
                </div>
                <div className="patient__body__details">
                  <div className="patient__height">
                    <div class="HEIGHT">HEIGHT</div>
                    <div class="-FT">5.6 FT</div>
                  </div>
                  <div className="patient__weight">
                    <div class="WEIGHT">WEIGHT</div>
                    <div class="-KG">78 KG</div>
                  </div>
                  <div className="patient__bmi">
                    <div class="BMI" >BMI</div>
                    <div class="NORMAL">27.8 (Overweight)</div>
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
                  Physical health, 
                  Mental health &
                  Chronic Health  
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
            Health Journey Plan for Puja Das
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
          <div class="assessment__card">
            <div className="health__assessment__heading">
              <div className="assessment__image">
                <img src={physical} class="Group" />
              </div>
              <div className="assessment__heading">
                <span class="sexual-intimate-health-special-assessment">
                General Assessment summary for health report
                </span>
                <span class="Your-Pinga-sexual-and-intimate-health-SA-shows-you-have-irregular-periods-vaginal-burning-and-heavy">
                  <span class="text-style-1">
                  <b>Puja</b>, kudos at taking your overall health and wellness Pinga assessment. 
                  Great investment, we make noodles in less than 10 minutes. <br/><br/>

                  We saw you need help now with your Physical health, nutrition, sexual and intimate health condition, mental health with sleep cycle improvement and chronic illness.<br/>
                  </span>
                  
                </span>
              </div>
            </div>
            <div className="assessment__desc__one">
              <div className="assessment__desc__one__image">
                <img src={girls} class="Group-7882" />
              </div>
              <div className="assessment__desc__one__data">
                <span class="-out-of-10-Pinga-users-like-you-have-shown-similar-symptoms-and-have-completely-recovered-after-a-f">
                  <span class="text-style-1">After in depth analysis, </span>
                  After in depth analysis, we recorded that, your most pressing symptoms and concerns include brain fog and lack of attention, issues in concentration, body image concerns, body weight management is very difficult for you, loss of self esteem, disturbed sleep, poor nutrition and lifestyle habits,skin concerns and physical restrictions due to an implant in your spinal cord. You have a history of a really big emotional and physical event which is a big road accident some years ago that changed your overall health and wellness. <br/><br/>

                  Your BMI suggests immediate intervention with a proper nutrition plan supported with mental health therapy to help you overcome stress eating patterns. <br/><br/>

                  We suggest that we must do an in depth, specialized assessment of your skin, intimate and mental health to correlate and go to the root cause of having a possibility of a lifestyle or chronic condition.  <br/><br/>


                  Your mental health symptoms show that you have these regular moods generally including stress and overwhelmedness. You find it tough at times to stay motivated and have been feeling low self esteem. Your personal, professional and social life is getting impacted. You are showing physical symptoms as well like shortness of breath, sweating of your palms, sudden waking up from sleep, trembling fingers, tingling sensations, and anxiousness. You have a history of loss of consciousness and an attempt to a very low point in life where you tried to do self harm and was hospitalised. We are with you, Pinga will take care of you. <br/><br/>

                  Chronic fatigue and low motivation may be due to nutritional deficiency, poor body weight management and disturbed sleep cycle.  <br/><br/>
                    

                  By the way, stress releases cortisol and creates a vicious cycle of hormonal imbalance leading to many conditions including digestive issues, skin issues, hair loss, brain fog and irregular periods. <br/><br/>


                  About your gorgeous skin, you feel that you have complaints of pigmentation and dark patches all over your skin, excessive body hair and excessive facial hair, chronic acne in chest and face. <br/><br/>

                  As a working professional with less or no physical activity, a poor lifestyle causes stress to accumulate more. Give it a breather. <br/><br/>

                  Your family history shows thyroid concerns, hypertension, diabetes and neurological problems. <br/><br/>

                  Medication history and ongoing: You have taken birth control pills due to irregular periods earlier. You take antidepressants and anti anxiety pills as recorded by you. You also take sleeping pills on and off. <br/><br/>

                  You have reported high T4 levels, previously diagnosed with PCOS, spinal cord injury and implant, mental health treatment, treatment for skin and therapy.
                </span>
              </div>
            </div>
            <div className="assessment__desc__one">
              <div className="assessment__desc__one__data">
                <span class="-out-of-10-Pinga-users-like-you-have-shown-similar-symptoms-and-have-completely-recovered-after-a-f">
                Don’t worry, just summarising your overall health + wellness. You are at the right place now, drop all your worries. We got your back!  

                As next steps, your health advisor will suggest awesome Pinga doctors and wellness experts to get you started first with your sleep solution and then after some progress, will begin with your chronic illnesses related consultations. However, we highly suggest you also try a mental health assessment with us and a therapy session since we noticed you require help there to improve your symptoms. 

                Kudos! 
                On doing regular physical activities like outdoor games and brisk walking. Also, so good to know that you are happy with your sexual life and relationship at the moment! 

                P.S. - You’re now a Pinga supergirl. You’ll have the best of care and lasting lifestyle improvements. 
                </span>
              </div>
              <div className="assessment__desc__one__image">
                <img src={girl2} class="Group-7882" />
              </div>
            </div>
          </div>
          <div class="assessment__card">
            <div className="health__assessment__heading">
              <div className="assessment__image">
                <img src={physical} class="Group" />
              </div>
              <div className="assessment__heading">
                <span class="sexual-intimate-health-special-assessment">
                Specialised assessment for Mental Health assessment
                </span>
                <span class="Your-Pinga-sexual-and-intimate-health-SA-shows-you-have-irregular-periods-vaginal-burning-and-heavy">
                  <span class="text-style-1">
                  Goal: To prioritise the right professional growth, improve relationships and achieve a healthy, balanced lifestyle.
                  </span>
                  
                </span>
              </div>
            </div>
            <div className="assessment__desc__one">
              <div className="assessment__desc__one__image">
                <img src={girls} class="Group-7882" />
              </div>
              <div className="assessment__desc__one__data">
                <span class="-out-of-10-Pinga-users-like-you-have-shown-similar-symptoms-and-have-completely-recovered-after-a-f">
                  <span class="text-style-1"></span>
                  <b>Puja</b>, Mental Health assessment shows that you have signs of a depressive state of mind. Depression or a depressive state of mind may show excessive worrying, extreme sadness with no apparent reasons, self doubt and feeling of worthlessness, feeling guilty, disturbances in sleep, a feeling of pleasure going out of your life and others. You have been feeling distrustful, cynical and extreme mood swings. Recurrent thoughts and urges bother you. You are showing signs of social isolation. <br/><br/>

                  Pinga highly recommends 6 or more therapy sessions to begin with. 

                </span>
              </div>
            </div>
          </div>
          <div className="report__user__overview">
            <span class="Pinga-Patient-ID-01">Pinga Patient ID: 002</span>
            <span class="Phone-8151955277">
              <span class="text-style-1">Phone: </span>
              +91 8910338370
            </span>
            <span class="Email-riakapoorsgmailcom">
              <span class="text-style-1">Email: </span>
              das.puja.181998@gmail.com
            </span>
          </div>

          
          <div class="doctor">
            <div className="doctor__image">
              <div class="Rectangle-72">
                <img src={Ishita} class="Rectangle-72" />
              </div>
            </div>
            <div className="doctor__details">
              <span class="Dr-Shehla-Jamal">Ishita Gogia</span>
              <span class="MBBS-DNB-MRCOG-1-fellowship-in-ART-IVF-Germany-Gold-Medalist">
              
              </span>
            </div>
            <div className="doctor__specialty">
              <span class="Specialist"></span>
              <span class="Gynae">Therapist’s</span>
            </div>
          </div>
          <div class="doctor__notes">
            <div className="doctor__notes__heading">
              <div class="doctor__notes__heading__image">
                <img src={docnote} class="noun-stethoscope-4255828-1" />
              </div>
              <div className="doctor__notes__heading__details">
                <div class="Your-Doctors-notes">Your therapist’s recommendation </div>
                <div class="Priyanjali-heres-what-your-doctor-Shehla-observed-and-recommended-as-follow-Up-next-steps">
                
                </div>
              </div>
            </div>
            <h2>Recommendation from Session 01 </h2>
                Observation:
                <ul>
                  <li>
                  Puja, you were observed being nervous during the first 10 minutes of the session but responded well to rapport formation. 
                  </li><li>

                  Self concept observed was extremely affected due to lack of exploration and excessive worry associated with her upcoming nuptials in December. Relationship issues focus on constant conflicts with the partner due to lack of proper communication and possible age gap. 
                  </li><li>

                  Diminished self confidence due to no nurturance in any other aspects of life other than the current romantic relationship
                  </li><li>
                  She was observed being extremely confused about self satisfaction and happiness (does not know what will make her happy)
                  </li><li>
                  Puja has a habit of carrying burden instead of speaking at the very moment. Reflection of moral policing with respect to family
                  </li><li>
                  Speech was coherent and fluent. Readily wants to work things out and declutter to make better decisions.
                  </li>
                </ul>


                Improvement plan and recommendation:
                <ul>
                  <li>
                  To do self exploration and activities to boost self confidence
                  </li>
                  <li>
                  Work on personal and professional communication
                  </li>
                  <li>
                  Work on current relationship with her partner by communicating
                  </li>
                  <li>
                  Slowly stop self moral policing and consciously reduce self guilt
                  </li>
                  <li>
                  Work proactively on setting up a routine and Log with Pinga 
                  </li>
                  <li>
                  A list of pros and cons of all relationships (so as to establish confrontational objectives for her sessions)
                  </li>
                  <li>
                  Partially going back to work
                  </li>
                  <li>
                  Spending 10 minutes with yourself everyday and acknowledging your journey so far.
                  </li>
                  <li>
                  Finding an activity that helps you calm down 
                  </li>
                </ul> 
                

                <h2>Recommendation from Session 02: 08/06/2022</h2> 
                <ul>
                  <li>
                  You were more forthcoming this time and opened up about communication issues with family and her partner.
                  </li>
                  <li>
                  You were observed feeling pressured of being married early and not being able to work on your career. 
                  </li>
                  <li>
                  You showed feelings of emotional exhaustion and depleting self confidence to push yourself forward to interact at home and with her partner about your feelings.
                  </li>
                  <li>
                  The daunting feeling due to frequent miscommunications with your partner has caused you to evaluate her relationship in a negative light.
                  </li>
                  <li>
                  Working towards your own happiness seems a far away concept that needs to be worked upon. You focus on pleasing your partner highly as a result of feeling in debt from being provided with support during an accident (traumatic event) were also observed.
                  </li>
                </ul> 


                Improvement plan and recommendation:
                <ul>
                <li>
                  Going back to work and brainstorming ideas with Ishita, your therapist.
                </li>

                <li>
                  Taking a stand for the issues observed in her romantic relationship.
                </li>
                <li>
                  Partially open up with parents about her ongoing unhappiness regarding the marital situation and financial dependence.
                </li>
                <li>
                  Self prioritise emotionally. 
                </li>
                </ul>

                <h2>Recommendation from Session 03 and 04: on 15/ 06/ 22 & 28/ 06/ 22</h2>

                <ul>
                  <li>You were observed being heavily frustrated and helpless about your current situation.</li>
                  <li>
                  Repeated attempts to go back to work as informed by you during the session focused on you not being able to meet deadlines and not having faith in your own talent.
                  </li>
                  <li>
                  Your lack of communication with loved ones still continues, you feel constantly burdened, traces of fear of failure with respect to the future (marriage) were also observed
                  </li>
                  <li>
                  Communication with your partner is also somewhat strained due to him being under pressure and not able to cater to you emotionally.
                  </li>
                  <li>
                  Frequent migraine complaints and physical fatigue reported. 
                  </li>
                  <li>
                  Lack of support system and not being able to express in front of the family is taking a heavy toll on your mental health.
                  </li>
                </ul>

                Improvement plan and recommendation:
                <ul>
                  <li>
                  Puja, you are highly encouraged to have an open communication with her partner about finances and role expectations post marriage (so that we can plan ahead of fear of failure).
                  </li>
                  <li>
                  Put your foot down with your parents about your requirements and challenges. Express and communicate proactively. Let them know and family members to not guilt you about various situations.
                  </li>
                  <li>
                  Reach out to someone in the family about her condition so as to start building a support system.

                  </li>
                </ul>

          </div>

          <div class="doctor">
            <div className="doctor__image">
              <div class="Rectangle-72">
                <img src={Shehla} class="Rectangle-72" />
              </div>
            </div>
            <div className="doctor__details">
              <span class="Dr-Shehla-Jamal">Dr. Shehla Jamal</span>
              <span class="MBBS-DNB-MRCOG-1-fellowship-in-ART-IVF-Germany-Gold-Medalist">
                MBBS DNB MRCOG (1), fellowship in <br></br> ART IVF (Germany)
                Gold Medalist
              </span>
            </div>
            <div className="doctor__specialty">
              <span class="Specialist">Specialist</span>
              <span class="Gynae">Gynae</span>
            </div>
            <div className="doctor__specialty">
            
              <span class="Specialist">MCA Reg. No.</span>
              <span class="Gynae">IN2183123</span>
            </div>
          </div>
          <div class="doctor__notes">
            <div className="doctor__notes__heading">
              <div class="doctor__notes__heading__image">
                <img src={docnote} class="noun-stethoscope-4255828-1" />
              </div>
              <div className="doctor__notes__heading__details">
                <div class="Your-Doctors-notes">Your Doctor’s notes</div>
                <span class="Specialist">Date: 05-07-2022 </span>
                <div class="Priyanjali-heres-what-your-doctor-Shehla-observed-and-recommended-as-follow-Up-next-steps">
                Puja, here’s what your doctor, Shehla observed and
                  recommended as follow Up & next steps
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
            <img src={Shehla_sign} class="image-19"></img>
            <span class="Signature">Signature</span>
          </div>
          <div className="brownie__point">
            <span class="Brownie-points-for-your-openness-and-for-your-incredible-willingness-to-share-Next-appointment-sche">
              <span class="text-style-1">Brownie points </span>
              for your openness and for your incredible willingness to share.
              Next appointment scheduled for - dd/mm and time
            </span>
          </div>
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
