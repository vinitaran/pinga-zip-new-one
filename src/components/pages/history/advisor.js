import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";  

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
  CRow,
  CSpinner,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
// import { useLocation } from "react-router-dom";

import ReactFileReader from "react-file-reader";
import {
  getUserDetails,
  submitConsult,
} from "../../../reduxUtils/services/History";
import { uploadFileService } from "../../../reduxUtils/services/uploadFile";
import { useHistory } from "react-router-dom";

import './history.css';

let fileList = [];
const AdvisorConsult = () => {
  // const [expert, setExpert] = useState(true);
  //   const expert = window.localStorage.getItem('role') == 'the' ? false : true;
  const the = true;

  const [startDate, setStartDate] = useState(new Date());


  const [isLoading, setisLoading] = useState(false);

  var [dataList, setDataList] = useState([]);
  let location = useLocation().pathname;
  let items = location.split("/");
  console.log(items[2]);
  var patientNumber = items[2];
  const history = useHistory();

  const [inputs, setInputs] = useState({ patient_id: dataList[0]?.id });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCheckbox = (event) => { 
    inputs["health_goal"] = []
    if(document.getElementById("mental_health").checked == true){
      inputs["health_goal"].push('mental_health')
    }
    if(document.getElementById("sexual_health").checked == true){
      inputs["health_goal"].push('sexual_health')
    }
    if(document.getElementById("skin_health").checked == true){
      inputs["health_goal"].push('skin_health')
    }
    if(document.getElementById("nutrition_diet").checked == true){
      inputs["health_goal"].push('nutrition_diet')
    }
    if(document.getElementById("physical_health").checked == true){
      inputs["health_goal"].push('physical_health')
    }
    if(document.getElementById("chronic_illness").checked == true){
      inputs["health_goal"].push('chronic_illness')
    }
    if(document.getElementById("others_more").checked == true){
      inputs["health_goal"].push('others_more')
    }
    console.log(inputs)
  }

  // useEffect(() => {
  //   getUserDetails(patientNumber).then((res) => {
  //     setDataList(res.data);
  //     //   console.log(res.data);
  //   });
  // }, []);
  // console.log(dataList);

  const handleFiles = (files) => {
    // console.log(files.base64.toString())
    console.log(files.fileList);
    setisLoading(true);
    fileList = [];
    for (let i = 0; i < files.base64.length; i++) {
      const data = {
        base64: files.base64[i].toString(),
        type: i,
        status: "active",
      };
      uploadFileService(data)
        .then((data) => {
          console.log(data.data.data);
          let fileUrl = data.data.data;
          fileUrl = fileUrl.replace("./uploads/image/", "");
          console.log(fileUrl);
          fileUrl = "jgj/" + fileUrl;
          fileList.push(fileUrl);
          console.log(fileList);
          if (files.base64.length == fileList.length) {
            setisLoading(false);
          }
        })
        .catch((err) => {
          alert("something wrong!");
        });
    }
  };
  console.log("vinita pmidea");
  console.log(fileList);
  if (fileList.length == 0) {
    console.log("vinita emty");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputs);
    // const name = event.target.name;
    // const value = event.target.value;
    // setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
    
    inputs["patient_id"] = dataList[0]?.patient_id;
    inputs["consult_id"] = dataList[0]?.consult_id;

    // inputs["name"] = inputs["name"] ? inputs["name"] : dataList.name;
    submitConsult(inputs)
      .then((res) => {
        console.log(res);
        if(!alert('Data Submitted Successfully!')){history.goBack();}
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(inputs);

  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <h3>PINGA HEALTH FORM FOR {the ? "THE" : ""}
              <span style={{float:'right'}}>
                <CButton
                    block
                    onClick={() => {
                      window.location.href =
                        "/admin/#/view-history/" + dataList[0]?.mobile;
                    }}
                    color="info"
                  >
                    Reports
                  </CButton>
                </span>
              </h3>
            </CCardHeader>
            <CCardBody>
              
              {the ? (
                <CForm className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="text-input">
                        <h6>Current Health Goals</h6>
    
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">

                      <div>
                        <div className="health-checkbox">
                          <label for="Mental Health"> Mental Health</label>
                          <input type="checkbox" className="largerCheckbox" onChange={handleCheckbox} id="mental_health" name="mental_health"/>
                        </div>

                        {/* <CFormCheck id="mental_health" label="Mental Health"/> */}
                        <div className="health-checkbox">
                        <label for="Sexual Health"> Sexual Health</label>
                        <input type="checkbox" className="largerCheckbox" onChange={handleCheckbox} id="sexual_health" name="sexual_health"/>
                        {/* <CFormCheck id="sexual_health" label="Sexual Health"/> */}
                        </div>
                      
                        <div className="health-checkbox">
                        <label for="Skin Health">Skin Health</label>
                        <input type="checkbox" className="largerCheckbox"  onChange={handleCheckbox} id="skin_health" name="skin_health" />
                        {/* <CFormCheck id="skin_health" label="Skin Health"/> */}
                        </div>
                      
                        <div className="health-checkbox">
                        <label for="Nutrition & Diet">Nutrition & Diet</label>
                        <input type="checkbox" className="largerCheckbox"  onChange={handleCheckbox} id="nutrition_diet" name="nutrition_diet"/>
                        {/* <CFormCheck id="nutrition_diet" label="Nutrition & Diet"/> */}
                        </div>
                        
                        <div className="health-checkbox">
                        <label for="Chronic Illness">Physical Health</label>
                        <input type="checkbox" className="largerCheckbox"  onChange={handleCheckbox} id="physical_health" name="physical_health"/>
                        {/* <CFormCheck id="physical_health" label="Physical Health"/> */}
                        </div>
                        

                        <div className="health-checkbox">
                        <label for="Chronic Illness">Chronic Illness</label>
                        <input type="checkbox" className="largerCheckbox"  onChange={handleCheckbox} id="chronic_illness" name="chronic_illness"/>
                        {/* <CFormCheck id="chronic_illness" label="Chronic Illness"/> */}
                        </div>
                        
                        <div className="health-checkbox">
                          <label for="Others & more">Others & more</label>
                          <input type="checkbox" className="largerCheckbox"  onChange={handleCheckbox}id="others_more" name="others_more"/>
                          {/* <CFormCheck id="others_more" label="Others & more"/> */}
                        </div>
                      </div>  

                    </CCol>
                  </CFormGroup>
                  <hr/>
                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="number-input">
                        <h6>Health Title  <br/>(Sexual & Intimate health special assessment)</h6>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <FroalaEditorComponent tag='textarea'
                        id="text-input"
                          name="health_title"
                          value={
                            inputs.health_title
                              ? inputs.health_title
                              : dataList.health_title
                          }
                          onChange={handleChange}
                          placeholder="Enter Sexual & Intimate health special assessment"  
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="number-input">
                        <h6>Health sub section  <br/>(Sexual & Intimate health special assessment)</h6>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <FroalaEditorComponent tag='textarea'
                        id="text-input"
                          name="health_sub_section"
                          value={
                            inputs.health_sub_section
                              ? inputs.health_sub_section
                              : dataList.health_sub_section
                          }
                          onChange={handleChange}
                          placeholder="Enter Sexual & Intimate health special assessment"  
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="number-input">
                        <h6>Health content  <br/>(Sexual & Intimate health special assessment) </h6>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                    <FroalaEditorComponent tag='textarea'
                      id="text-input"
                        name="health_content"
                        value={
                          inputs.health_content
                            ? inputs.health_content
                            : dataList.health_content
                        }
                        onChange={handleChange}
                        placeholder="Enter Sexual & Intimate health special assessment"  
                    />
                    </CCol>
                  </CFormGroup>
                  <hr/>
                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="text-input">
                        <h6>Life Style Recommendations</h6>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                    <FroalaEditorComponent tag='textarea'
                    id="text-input"
                    name="lifestyle"
                    value={
                      inputs.lifestyle
                        ? inputs.lifestyle
                        : dataList.lifestyle
                    }
                    onChange={handleChange}
                    placeholder="Enter lifestyle"
                    
                    />
                      
                    </CCol>
                  </CFormGroup>
                  <hr/>
                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="textarea-input">
                        <h6>Medical Recommendations</h6>
                        
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <FroalaEditorComponent tag='textarea'
                      id="text-input"
                      value={
                        inputs.medical ? inputs.medical : dataList.medical
                      }
                      onChange={handleChange}
                      placeholder="Enter Medical Recommendations"                     
                      />
                      
                    </CCol>
                  </CFormGroup>
                  <hr/>
                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="textarea-input">
                        <h6>Lab Test</h6>
                        
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <FroalaEditorComponent tag='textarea'
                      id="text-input"
                      value={
                        inputs.labtest ? inputs.labtest : dataList.labtest
                      }
                      onChange={handleChange}
                      placeholder="Enter Lab Test"                     
                      />
                      
                    </CCol>
                  </CFormGroup>
                  <hr/>
                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="textarea-input">
                        <h6>General Recommendations</h6>
                        
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <FroalaEditorComponent tag='textarea'
                      id="text-input"
                      value={
                        inputs.general ? inputs.general : dataList.general
                      }
                      onChange={handleChange}
                      placeholder="General Recommendations"                     
                      />
                      
                    </CCol>
                  </CFormGroup>
                </CForm>
              ) : (
                ""
              )}
            </CCardBody>
            {the ? (
              <CCardFooter
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <CButton onClick={handleSubmit} size="sm" color="warning">
                  <CIcon name="cil-scrubber" /> Submit
                </CButton>
              </CCardFooter>
            ) : (
              ""
            )}
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default AdvisorConsult;
