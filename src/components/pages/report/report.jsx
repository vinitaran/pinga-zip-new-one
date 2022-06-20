import React from "react";
import Pinga from "../../../asset/Logo.svg";
import "./report.css";



const report = () => {
  const currentGoals = [
    {
      active: true,
      color: "#2f43bb",
      textColor: "#19191d",
      heading1: "Mental",
      heading2: "Health",
    },
    {
      active: true,
      color: "#ff7c52",
      textColor: "#19191d",
      heading1: "Physical",
      heading2: "Health",
    },
    {
      active: true,
      color: "#ed0156",
      textColor: "#19191d",
      heading1: "Sexual",
      heading2: "Health",
    },
    {
      active: true,
      color: "",
      textColor: "",
      heading1: "Skin",
      heading2: "Health",
    },
    {
      active: true,
      color: "",
      textColor: "",
      heading1: "Nutrition",
      heading2: "& Diet",
    },
    {
      active: true,
      color: "",
      textColor: "",
      heading1: "Chronic",
      heading2: "Illness",
    },
    {
      active: true,
      color: "",
      textColor: "",
      heading1: "Others",
      heading2: "& more",
    },
  ];

  const steps = [
    [
      {
        healthDesc:
          "Pinga’s process to help you become the better version of yourself everyday. Starting with Pinga general health assessment ",
        tick: true,
        heading: "Pinga Profile - free for the first 1000 users",
        desc: "General Health - with assessment",
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
        buttonData: "",
        result: "See Results Below",
      },
      {
        tick: false,
        heading: "Consultation Pending",
        desc: "Consultation pending.  Click below to book your slot with our amazing doctors and experts ",
        button: true,
        buttonData: "TALK TO HEALTH ADVISOR",
        result: "",
      },
    ],
  ];

  return (
    <div className="report__main">
      <div className="report">
        <div className="report__header" id="report__header">
          <div className="report__header__logo">
            <img src={Pinga} alt="logo" className="Logo" />
          </div>
          <div className="report__header__CTA">
            <p>CHAT WITH PINGA</p>
            <div class="whatsapp__logo"></div>
          </div>
        </div>
        <div className="report__mainDiv">
          <div className="Personal-health-dashboard-for-active-integrated-health">
            Personal health dashboard for active integrated health
          </div>
          <div className="report__user__overview">
            <span class="Pinga-Patient-ID-01">Pinga Patient ID: 01</span>
            <span class="Phone-8151955277">
              <span class="text-style-1">Phone: </span>
              8151955277
            </span>
            <span class="Email-riakapoorsgmailcom">
              <span class="text-style-1">Email: </span>
              ria.kapoors@gmail.com
            </span>
          </div>
          <div class="report__user__details">
            <div className="report__user__details__dessc">
              <div class="Rectangle-66"></div>
              <div className="patient__details">
                <div className="patient__name">
                  <div class="Ria-Kapoor">Ria Kapoor</div>
                  <div class="-yrs-She-Her">28 yrs | She/ Her</div>
                </div>
                <div className="patient__body__details">
                  <div className="patient__height">
                    <div class="HEIGHT">HEIGHT</div>
                    <div class="-FT">5.5. FT</div>
                  </div>
                  <div className="patient__weight">
                    <div class="WEIGHT">WEIGHT</div>
                    <div class="-KG">62 KG</div>
                  </div>
                  <div className="patient__bmi">
                    <div class="BMI">BMI</div>
                    <div class="NORMAL">NORMAL</div>
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
            <span class="You-can-see-details-here">
              You can see details here
            </span>
            <span class="View-notes-from-doctor">View notes from doctor</span>
          </div>
          <div className="patient__health">
            <div className="patient__health__desc">
              <div className="patient__health__heading">
                Current<br></br> Health Goals
              </div>
              <div className="patient__health__data">
                <span class="Based-on-your-general-health-assessment-we-understand-your-goal-is-to-improve-your-Physical-Health">
                  Based on your general health assessment, we understand your
                  goal is to improve your{" "}
                  <span class="text-style-1">
                    Physical Health, mental health, sexual and intimate health
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
                    ></div>
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
            Health Journey Plan for Ria Kapoor
          </div>
          {steps.map((data, i) => {
            console.log(data);
            return (
              <div class="health__report">
                <div className="health__report__heading">
                  <div className="heath__report__Step">
                    <div class="Ellipse-59"></div>
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
                            <div
                              className="health__report__desc__card__heading__tick"
                              style={{ border: "solid 2px #25d366" }}
                            ></div>
                          ) : (
                            <div className="health__report__desc__card__heading__tick"></div>
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
                        ) : (
                          <div class="Rectangle-7">
                            <span class="Talk-to-health-Advisor">
                              {data.buttonData}
                            </span>
                          </div>
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
              <div className="assessment__image"></div>
              <div className="assessment__heading">
                <span class="sexual-intimate-health-special-assessment">
                  sexual & intimate health special assessment
                </span>
                <span class="Your-Pinga-sexual-and-intimate-health-SA-shows-you-have-irregular-periods-vaginal-burning-and-heavy">
                  <span class="text-style-1">
                    Your Pinga sexual and intimate health SA shows you have
                  </span>
                  irregular periods, vaginal burning and heavy discharge since 6
                  months
                </span>
              </div>
            </div>
            <div className="assessment__desc__one">
              <div className="assessment__desc__one__image"></div>
              <div className="assessment__desc__one__data">
                <span class="-out-of-10-Pinga-users-like-you-have-shown-similar-symptoms-and-have-completely-recovered-after-a-f">
                  <span class="text-style-1">7 out of 10 Pinga users</span>
                  like you have shown similar symptoms and have completely
                  recovered after a few weeks or months of taking the Pinga
                  health solution like taking assessments periodically, daily
                  progress tracking with health advisor, medication, lifestyle
                  management and expert consultation.
                </span>
              </div>
            </div>
            <div className="assessment__desc__one">
              <div className="assessment__desc__one__data">
                <span class="-out-of-10-Pinga-users-like-you-have-shown-similar-symptoms-and-have-completely-recovered-after-a-f">
                  Your symptoms shows irregular periods, vaginal burning and
                  heavy discharge since 6 months. This generally happens in
                  infections eeither sexually transmitted or due to exposures in
                  unhygieneic scenarios like dirty lavatories. It might also be
                  funal infection or a sign of viral infection like HPV
                  infection (Human papilloma virus). Let’s get to the root
                  cause.
                </span>
              </div>
              <div className="assessment__desc__one__image"></div>
            </div>
          </div>
          <div className="report__user__overview">
            <span class="Pinga-Patient-ID-01">Pinga Patient ID: 01</span>
            <span class="Phone-8151955277">
              <span class="text-style-1">Phone: </span>
              8151955277
            </span>
            <span class="Email-riakapoorsgmailcom">
              <span class="text-style-1">Email: </span>
              ria.kapoors@gmail.com
            </span>
          </div>
          <div class="doctor">
            <div className="doctor__image">
              <div class="Rectangle-72"></div>
            </div>
            <div className="doctor__details">
              <span class="Dr-Shella-Jamal">Dr. Shella Jamal</span>
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
          <div class="whatsapp_button">
            <div class="Vector"></div>
            <span class="chat-with-pinga-health-Advisor">
              Chat with Pinga Health Advisor
            </span>
          </div>
          <div className="tabs">
            <div
              class="Rectangle-61"
              style={{ backgroundColor: "#fddb60" }}
            ></div>
            <div class="Rectangle-61"></div>
            <div
              class="Rectangle-61"
              style={{ backgroundColor: "#ffadad" }}
            ></div>
            <div
              class="Rectangle-61"
              style={{ backgroundColor: "#ffaac4" }}
            ></div>
            <div
              class="Rectangle-61"
              style={{ backgroundColor: "#96e1c0" }}
            ></div>
            <div
              class="Rectangle-61"
              style={{ backgroundColor: "#bccfe7" }}
            ></div>
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
              <div class="Rectangle-47"></div>
              <div class="Rectangle-47"></div>
              <div class="Rectangle-47"></div>
              <div class="Rectangle-47"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default report;
