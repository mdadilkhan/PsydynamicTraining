import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dialogbox from "./Dialogbox";
import Card from "./Card";
import ped1 from "../assets/ped1.svg";
import ped2 from "../assets/ped2.svg";
import ped3 from "../assets/ped3.svg";
import ped4 from "../assets/ped4.svg";
import ped5 from "../assets/ped5.svg";
import outcome from "../assets/outcomes.svg";
import outcome2 from "../assets/courseImg.svg";
import CourseStructure from "../assets/CourseStructure.svg";

const Home = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("learning");
  const [openSection, setOpenSection] = useState(0);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const courses = [
    {
      step: "01",
      title: "Introduction & History to Brief Psychodynamic Psychotherapy",
      description: [
        "The psychodynamic understanding of psychic change.",
        "Differences between long-term and short-term psychodynamic therapy",
        "Theoretical aspects: attachment theory, relational perspectives, and experiential-affective focus.",
        "TLDP principles and their application in brief work.",
      ],
    },
    {
      step: "02",
      title: "Assessment, Diagnosis, and Patient Selection in Brief Therapy",
      description: [
        "Assessment and diagnosis in brief and focal work.",
        "Understanding and applying CMP in case formulation.",
        "Developing CMP formulation for a mock client.",
        "Steps in TLDP formulation and identifying maladaptive patterns.",
      ],
    },
    {
      step: "03",
      title: "Therapist’s Role and Techniques in Brief Psychodynamic Work",
      description: [
        "Therapist's tasks, roles, and therapeutic stance in brief therapy.",
        "Brief psychodynamic techniques.",
      ],
    },
    {
      step: "04",
      title: "Ending Brief Therapy and Treatment Settings",
      description: [
        "Managing the end of brief therapy.",
        "Different contexts and settings for brief psychodynamic work (e.g., private practice, hospital settings)",
      ],
    },
  ];

  const handleButtonClick = (section) => {
    setSelectedSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <div className="bg-background2 pb-10 rounded-b-[50px] relative ">
        <div className="w-full fixed top-0 z-50 ">
          <Header />
        </div>
        <div className="px-6 sm:px-12 md:px-12 w-full sm:w-[70%] pt-[7rem] sm:pt-[10rem] mb-10">
          <h1 className="text-primary text-[32px] sm:text-[64px] font-sans font-extrabold leading-[40px] sm:leading-[73px] tracking-tight">
          Brief Psychodynamic Psychotherapy Training

          </h1>
          <div className="mt-8 max-w-screen-md ">
            <h6 className="text-tertiary font-sans text-[12px] sm:text-[18px] font-normal leading-[25px]">
              This training introduces the foundational principles of Brief
              Dynamic Therapy (BDT) and Time-Limited Dynamic Psychotherapy
              (TLDP) focusing on time-limited therapeutic work. Students will
              learn key techniques, assessment criteria, and case formulation
              strategies for applying psychodynamic interventions in short-term
              therapy settings.
            </h6>
          </div>
        </div>
        <div
          className="flex justify-evenly sm:flex-row flex-col items-center absolute bottom-0 sm:h-[100px] left-[10%] sm:left-[10%] top-[90%] w-[80%] h-max p-4 bg-white"
          style={{
            boxShadow: "0px -3px 16px 0px rgba(0, 0, 0, 0.17)",
            borderRadius: "15px",
          }}
        >
          <div className="border-b sm:border-b-0 sm:border-r border-[#614298] w-[90%] sm:w-[33%] pl-8 pr-4 sm:mb-0 mb-4">
            <p className="font-sans text-[16px] sm:text-[32px] font-extrabold text-primary leading-[43.65px] tracking-[0.005em] text-left">
              15 hours
            </p>
            {/* <p className="text-primary text-[12px] sm:text-[16px] mb-2">
              Intensive Offline Paid Training
            </p> */}
          </div>
          <div className="flex items-center border-b sm:border-b-0 sm:border-r border-[#614298] w-[90%] sm:w-[33%] pl-8 pr-4 sm:mb-0 mb-4 h-[100%]">
            <p className="font-sans text-primary text-[16px] sm:text-[32px] font-extrabold leading-[43.65px] tracking-[0.005em] text-left">
              4 Modules
            </p>
            {/* <p className="text-primary">Intensive Offline Paid Training</p> */}
          </div>
          <div className="text-right sm:w-[33%] pl-8 w-[90%] ">
            <p className="font-sans text-[16px] sm:text-[32px] text-primary font-extrabold tracking-[0.005em] text-left">
              For Psychodynamic <br /> Training
            </p>
          </div>
        </div>
      </div>

      <div className="sticky top-[80px] flex flex-wrap justify-start items-center gap-6 mt-[15rem] sm:mt-20 px-6 sm:px-12 md:px-12 bg-white  ">
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "learning"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("learning")}
        >
          Learning
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "skills"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("skills")}
        >
          Skills
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "pedagody"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("pedagogy")}
        >
          Pedagogy
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "outcomes"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("outcomes")}
        >
          Outcomes
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "course"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("course")}
        >
          Course Structure
        </button>
      </div>

      <div className="px-6 sm:px-12 md:px-12">
        <div className="bg-white text-gray-800 font-sans p-2 sm:p-8">
          {/* What Will Students Learn Section */}
          <div className="mb-8" id="learning">
            <h2 className="text-3xl font-bold text-primary mb-4">
              What will students learn:
            </h2>
            <p className="text-lg text-[#696984]">
              By the end of the course, students will be able to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-[#696984]">
              <li className="text-[#696984]">
                Understanding the principles and techniques of Brief
                Psychodynamic Psychotherapy.
              </li>
              <li className="text-[#696984]">
                Differences between long-term and short-term psychodynamic work.
              </li>
              <li className="text-[#696984]">
                Key theoretical aspects such as attachment theory and relational
                perspectives.
              </li>
              <li className="text-[#696984]">
                Application of cyclical maladaptive pattern (CMP) and
                formulation in brief therapy.
              </li>
              <li className="text-[#696984]">The role of the therapist.</li>
              <li className="text-[#696984]">The process of ending therapy.</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="mb-8" id="skills">
            <h2 className="text-3xl font-bold text-primary mb-4">Skills:</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Case formulation using cyclical maladaptive patterns (CMP).",
                "Effective assessment and diagnosis for brief psychodynamic work.",
                "Techniques for time-limited psychodynamic interventions.",
                "Skills in patient selection and tailoring therapy to client needs.",
                "Handling the therapeutic process, including task roles and managing therapeutic endings.",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#F5F5F5] text-[#7355A8] text-sm font-medium px-4 py-2 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4 */}
          {/* Learning Methods Section */}
          <div className="flex flex-col gap-4 mb-8" id="pedagogy">
            <h2 className="text-3xl font-bold text-primary mb-4">Pedagogy:</h2>
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                boxShadow: "0px -3px 16px 0px rgba(0, 0, 0, 0.17)",
                borderRadius: "15px",
              }}
            >
              {[
                {
                  img: ped1,
                  description:
                    "Lecture-based learning with key readings on psychodynamic therapy.",
                },
                {
                  img: ped2,
                  description: "Case studies.",
                },
                {
                  img: ped5,
                  description:
                    "Role-play sessions focusing on brief psychodynamic interventions.",
                },
                {
                  img: ped3,
                  description: "Group discussions and peer feedback.",
                },
                {
                  img: ped4,
                  description:
                    "Personal reflections and therapist self-awareness exercises.",
                },
              ].map((method) => (
                <div
                  key={method.title}
                  className="flex p-4 rounded-lg text-left gap-4 sm:gap-2"
                >
                  <img
                    src={method.img}
                    alt=""
                    className="sm:w-[50px] sm:h-[50px] w-[48px] h-[48px]"
                  />
                  <div className="flex items-center">
                    {/* <h4 className="font-semibold text-lg">{method.title}</h4> */}
                    <p className="text-sm mt-2">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Structure Section */}
          <div
            className="mb-8 w-full flex flex-col sm:flex-row-reverse"
            id="course"
          >
            <div className="w-full sm:w-1/2 p-4 sm:block hidden">
              <img src={outcome} alt="" className="w-full sm:w-[90%]" />
            </div>
            <h2 className="text-[20px] sm:text-3xl font-bold text-primary mb-4 block sm:hidden">
              Course Structure
            </h2>
            <div className="sm:w-1/2 w-full">
              <h2 className="text-3xl font-bold text-primary mb-4 sm:block hidden">
                Course Structure
              </h2>
              <div className="w-full p-4 block sm:hidden sm:mb-4 mb-0">
                <img src={outcome2} alt="" />
              </div>
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <div
                    key={course.step}
                    className="border-b pb-4  border-gray-300"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer mb-[18px]"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center">
                        <div className="text-[#101566] bg-secondary p-2 font-bold text-xl">
                          {course.step}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-normal text-[#101566] text-[20px] sm:text-3xl">
                            {course.title}
                          </h4>
                        </div>
                      </div>
                      <div className="mr-4">
                        {openSection === index ? (
                          <span className="text-disable font-bold text-2xl">
                            -
                          </span>
                        ) : (
                          <span className="text-disable font-bold text-2xl">
                            +
                          </span>
                        )}
                      </div>
                    </div>
                    {openSection === index && (
                      <ul className="ml-4 sm:ml-16 mt-2 text-sm text-gray-600 list-disc list-inside">
                        {course.description.map((point, i) => (
                          <li key={i} className="text-[14px]">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outcomes Section */}
          <div className="mb-8 flex sm:flex-row flex-col w-full" id="outcomes">
            <div className="w-full sm:w-[45%] p-4 sm:block hidden">
              <img src={CourseStructure} alt="" />
            </div>
            <h2 className="text-[20px] sm:text-3xl font-bold text-primary mb-4 block sm:hidden">
              Outcomes:
            </h2>
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4 sm:block hidden">
                Outcomes:
              </h2>
              <div className="w-full sm:w-1/2 p-4 block sm:hidden">
                <img src={CourseStructure} alt="" />
              </div>
              <ul className="list-disc ml-6 space-y-2">
                <li className="font-normal text-[20px] text-[#696984">
                  Students will understand key psychodynamic principles and
                  techniques for short-term therapeutic work.
                </li>
                <li className="font-normal text-[20px] text-[#696984">
                  Students will be able to assess and select appropriate clients
                  for brief psychodynamic interventions.
                </li>
                <li className="font-normal text-[20px] text-[#696984">
                  Enhanced skills in case formulation using CMP and therapist’s
                  role management in brief therapy.
                </li>
                <li className="font-normal text-[20px] text-[#696984">
                  Ability to manage therapeutic endings and navigate various
                  treatment settings for brief work.
                </li>
              </ul>
            </div>
          </div>

          {/* Enroll Now Button */}
        </div>
      </div>
      <div className="w-full">
        <Dialogbox
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          title="Offline 30 hours internship fee structure"
        >
          <Card
            title={
              <span>
                Individual
                <br />
                fee
              </span>
            }
            price={2500}
            student={{ max: 1 }}
          />
          {/* <Card
            title={
              <span>
                {" "}
                Group of
                <br />5
              </span>
            }
            price={6750}
            discount={10}
            student={{ max: 5 }}
          />
          <Card
            title={
              <span>
                {" "}
                Group of
                <br />
                10
              </span>
            }
            price={12750}
            discount={15}
            student={{ max: 10 }}
          /> */}
        </Dialogbox>
      </div>
      <div className="flex justify-center items-center p-4 sm:w-[50%] w-[90%] mx-auto border border-solid border-border rounded-md bg-[#FCFAFF]">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-[16px] sm:text-3xl text-[#7355A8]">
            MODE
          </span>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="online"
              className="appearance-none h-4 w-4 border border-#7355A8] rounded-full checked:bg-[#7355A8] checked:border-transparent focus:outline-none"
              defaultChecked
            />
            <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">
              Online
            </span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="offline"
              className="appearance-none h-4 w-4 border border-#7355A8] rounded-full checked:bg-[#7355A8] checked:border-transparent focus:outline-none"
              defaultChecked
            />
            <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">
              Offline
            </span>
          </label>
          <span className="font-bold text-[#7355A8] ml-8 text-[16px] sm:text-3xl">
            BATCHES
          </span>
          <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">
            Weekend
          </span>
        </div>
      </div>
      <div className="text-center my-8">
        <button
          onClick={handleOpenDialog}
          className="bg-secondary text-primary px-8 py-4 rounded-lg uppercase text-lg font-semibold"
        >
          Enroll Now
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
