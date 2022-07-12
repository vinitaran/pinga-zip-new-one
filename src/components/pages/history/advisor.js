import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";   

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


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
  getPatientDetails,
  submitReport,
} from "../../../reduxUtils/services/History";
import { uploadFileService } from "../../../reduxUtils/services/uploadFile";
import { useHistory } from "react-router-dom";

import './history.css';

let fileList = [];
var assesment_list = []
const AdvisorConsult = () => {
  // const [expert, setExpert] = useState(true);
  //   const expert = window.localStorage.getItem('role') == 'the' ? false : true;
  const the = true;

  const [startDate, setStartDate] = useState(new Date());


  const [isLoading, setisLoading] = useState(false);
  const [model,setModel] = useState("text...")
  var [dataList, setDataList] = useState([]);
  let location = useLocation().pathname;
  let items = location.split("/");
  console.log(location.split("/"));
  var patientId = items[3];
  console.log("pnumber")
  console.log(patientId)
  const history = useHistory();

  const [inputs, setInputs] = useState({ patient_id: dataList?.id });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs)
  };

  const [assesmentList,setAssesmentList]=useState([])
 
  var assesment_title
  var assesment_content
  const addAssesment = (event) => {
    assesment_title=inputs["assesment_title"]
    assesment_content=inputs["assesment_content"]
    assesment_list.push([assesment_title,assesment_content])
    // const assesmentdata =[]
    // assesment_list.map((data)=>{
    //   assesmentdata = "<h4>"+data[0]+"</h4><br/><h5>"+data[1]+"</h5><br/>" 
    //   })
    setAssesmentList(assesment_list)
  };

  const handleCheckbox = (event) => { 
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));

    inputs["assesment_completed"] = []
    if(document.getElementById("a_mental_health").checked == true){
      inputs["assesment_completed"].push(['mental_health',inputs["t_a_mental_health"]])
    }
    if(document.getElementById("a_sexual_health").checked == true){
      inputs["assesment_completed"].push(['sexual_health',inputs["t_a_sexual_health"]])
    }
    if(document.getElementById("a_skin_health").checked == true){
      inputs["assesment_completed"].push(['skin_health',inputs["t_a_skin_health"]])
    }
    if(document.getElementById("a_nutrition_diet").checked == true){
      inputs["assesment_completed"].push(['nutrition_diet',inputs["t_a_nutrition_diet"]])
    }
    if(document.getElementById("a_physical_health").checked == true){
      inputs["assesment_completed"].push(['physical_health',inputs["t_a_physical_health"]])
    }
    if(document.getElementById("a_chronic_illness").checked == true){
      inputs["assesment_completed"].push(['chronic_illness',inputs["t_a_chronic_illness"]])
    }
    if(document.getElementById("a_others_more").checked == true){
      inputs["assesment_completed"].push(['others_more',inputs["t_a_others_more"]])
    }


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

  }

  useEffect(() => {
    getPatientDetails(patientId).then((res) => {
      setDataList(res.data);
        console.log(res.data);
    });
  }, []);
  console.log(dataList);

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
  if (fileList.length == 0) {
    console.log("vinita emty");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    
    inputs["patient_id"] = 1;

    
    if(assesment_list==[]){
      
    assesment_list.push([inputs["assesment_title"],inputs["assesment_content"]])
    }
    inputs["assesment_list"] = assesment_list
    
    inputs["consult_data"] = {
      consultant_name:inputs['consultant_name'],
      specialization:inputs["specialization"],
      reg_no:inputs["reg_no"],
      consult_date:inputs["consult_date"],
      lifestyle:inputs["lifestyle"],
      medical:inputs["medical"],
      labtest:inputs["labtest"],
      general:inputs["general"]
    }
   
    console.log(inputs)
    submitReport(inputs)
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
                        "/admin/#/view-history/" + dataList?.mobile;
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
                    <CCol md="2">
                      <CLabel htmlFor="number-input">
                        <h4>Name</h4>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="2">
                    <h4>{dataList.name}</h4>
                    </CCol>
                  </CFormGroup>  
                  <hr/>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="number-input">
                        <h6>Assesment Completed</h6>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                    <table className="table">
                          <tr>
                            <td>
                            <div className="health-checkbox">
                              <label for="Mental Health"> Mental Health</label>
                              <input type="checkbox" className="largerCheckbox" onChange={handleCheckbox} id="a_mental_health" name="a_mental_health"/>
                            </div>
                            </td>
                            <td>
                            <CTextarea onChange={handleCheckbox} name="t_a_mental_health" id="t_a_mental_health" rows="4"></CTextarea>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="health-checkbox">
                              <label for="Sexual Health"> Sexual Health</label>
                              <input type="checkbox" className="largerCheckbox" onChange={handleCheckbox} id="a_sexual_health" name="a_sexual_health"/>
                              {/* <CFormCheck id="sexual_health" label="Sexual Health"/> */}
                              </div>
                            </td>
                            <td>
                              <CTextarea onChange={handleCheckbox} name="t_a_sexual_health" id="t_a_sexual_health" rows="4"></CTextarea>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="health-checkbox">
                              <label for="Skin Health">Skin Health</label>
                              <input type="checkbox" className="largerCheckbox"  onChange={handleCheckbox} id="a_skin_health" name="a_skin_health" />
                              {/* <CFormCheck id="skin_health" label="Skin Health"/> */}
                              </div>
                            </td>
                            <td>
                              <CTextarea onChange={handleCheckbox} name="t_a_skin_health" id="t_a_skin_health" rows="4"></CTextarea>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="health-checkbox">
                              <label for="Nutrition & Diet">Nutrition & Diet</label>
                              <input type="checkbox" className="largerCheckbox"  onChange={handleCheckbox}  id="a_nutrition_diet" name="a_nutrition_diet"/>
                              {/* <CFormCheck id="nutrition_diet" label="Nutrition & Diet"/> */}
                              </div>
                            </td>
                            <td>
                              <CTextarea onChange={handleCheckbox} name="t_a_nutrition_diet" id="t_a_nutrition_diet" rows="4"></CTextarea>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="health-checkbox">
                              <label for="Chronic Illness">Physical Health</label>
                              <input type="checkbox" className="largerCheckbox"  onChange={handleCheckbox} id="a_physical_health" name="a_physical_health"/>
                              {/* <CFormCheck id="physical_health" label="Physical Health"/> */}
                              </div>
                            </td>
                            <td>
                              <CTextarea onChange={handleCheckbox} name="t_a_physical_health" id="t_a_physical_health" rows="4"></CTextarea>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="health-checkbox">
                              <label for="Chronic Illness">Chronic Illness</label>
                              <input type="checkbox" className="largerCheckbox"  onChange={handleCheckbox} id="a_chronic_illness" name="a_chronic_illness"/>
                              {/* <CFormCheck id="chronic_illness" label="Chronic Illness"/> */}
                              </div>
                            </td>
                            <td>
                              <CTextarea onChange={handleCheckbox} name="t_a_chronic_illness"  id="t_a_chronic_illness" rows="4"></CTextarea>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="health-checkbox">
                                <label for="Others & more">Others & more</label>
                                <input type="checkbox" className="largerCheckbox"  onChange={handleCheckbox}id="a_others_more" name="a_others_more"/>
                                {/* <CFormCheck id="others_more" label="Others & more"/> */}
                              </div>
                            </td>
                            <td>
                              <CTextarea onChange={handleCheckbox} name="t_a_others_more" id="t_a_others_more" rows="4"></CTextarea>
                            </td>
                          </tr>
                        </table>

                    </CCol>
                  </CFormGroup>
                  <hr/>
                  <CFormGroup row>
                    <CCol md="2">
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
                    {/* <div id="assesment_show">{ReactHtmlParser(assesmentList)}</div> */}
                    {/* {assesmentList?assesmentList.map((data)=>{
                      return(
                        <>
                        <h4>{ReactHtmlParser(data[0])}</h4>
                        <h6>{data[1]}</h6>
                        </>
                        );
                      }
                      ):""} */}
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="number-input">
                        <h6>Assesment Title</h6>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <FroalaEditorComponent tag='textarea'
                        id="assesment_title"                          
                        onModelChange={(event)=>{inputs['assesment_title']=event}}
                        placeholder="Enter assessment title"  
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="number-input">
                        <h6>Assesment Content</h6>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <FroalaEditorComponent tag='textarea'
                        id="assesment_content"
                          name="assesment_content"
                          onModelChange={(event)=>{inputs['assesment_content']=event}}
                          placeholder="Enter assessment content"  
                      />
                    </CCol>
                    
                  </CFormGroup>
                  <br/>
                    <CButton style={{ display: "flex", justifyContent: "flex-end" }} onClick={addAssesment} size="sm" color="warning">
                      <CIcon name="cil-scrubber" /> Add More
                    </CButton>
                  <hr/>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="textarea-input">
                        <h6>Consultant/Expert Name</h6>
                        
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <CInput tag='textarea'
                      id="text-input"
                      value={
                        inputs.consultant_name ? inputs.consultant_name : dataList.consultant_name
                      }
                      name="consultant_name"
                      onChange={handleChange}
                      placeholder="Enter consultant name"                     
                      />

                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="textarea-input">
                        <h6>Specialization</h6>
                        
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <CInput tag='textarea'
                      id="text-input"
                      name="specialization"
                      value={
                        inputs.specialization ? inputs.specialization : dataList.specialization
                      }
                      onChange={handleChange}
                      placeholder="Enter specialization"                     
                      />

                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="textarea-input">
                        <h6>MCA Reg. No.</h6>
                        
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <CInput tag='textarea'
                      id="text-input"
                      name="reg_no"
                      value={
                        inputs.reg_no ? inputs.reg_no : dataList.reg_no
                      }
                      onChange={handleChange}
                      placeholder="Enter reg no"                     
                      />

                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="textarea-input">
                        <h6>Date of Consultation </h6>
                        
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                    <DatePicker
                      // name="consult_date"
                      selected={startDate}
                      value={
                        inputs.consult_date ? inputs.consult_date : dataList.consult_date
                      }
                      onChange={(date:Date) => {setStartDate(date);inputs['consult_date']=date}}
                      id="date-input"
                    />

                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="text-input">
                        <h6>Life Style Recommendations</h6>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                    <FroalaEditorComponent tag='textarea'
                    id="text-input"
                    name="lifestyle"
                    onModelChange={(event)=>{inputs['lifestyle']=event}}
                    
                    placeholder="Enter lifestyle"
                    
                    />
                      
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="textarea-input">
                        <h6>Medical Recommendations</h6>
                        
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <FroalaEditorComponent tag='textarea'
                      id="text-input"
                      onModelChange={(event)=>{inputs['medical']=event}}
                     
                      placeholder="Enter Medical Recommendations"                     
                      />
                      
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="textarea-input">
                        <h6>Lab Test</h6>
                        
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <FroalaEditorComponent tag='textarea'
                      id="text-input"
                      name="labtest"
                      onModelChange={(event)=>{inputs['labtest']=event}}
                      placeholder="Enter Lab Test"                     
                      />
                      
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="textarea-input">
                        <h6>General Recommendations</h6>
                        
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <FroalaEditorComponent tag='textarea'
                      id="text-input"
                      onModelChange={(event)=>{inputs['general']=event}}
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
