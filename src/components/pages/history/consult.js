import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
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

let fileList = [];
const ExpertConsult = () => {
  // const [expert, setExpert] = useState(true);
  //   const expert = window.localStorage.getItem('role') == 'the' ? false : true;
  const expert = true;

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

  useEffect(() => {
    getUserDetails(patientNumber).then((res) => {
      setDataList(res.data);
      //   console.log(res.data);
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
          fileUrl = "https://shreejiinfashion.com/uploads/image/" + fileUrl;
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
    // inputs["media_url"] = fileList;

    // inputs["color"] = dataList.color;
    // inputs["fabric"] = dataList.fabric;
    // inputs["event"] = dataList.event;
    // inputs["type"] = dataList.type;
    // inputs["category_id"] = dataList.category_id;
    // if (fileList.length == 0) {
    //   inputs["media_url"] = dataList.media_url;
    // }

    // var date

    // setInputs(values => ({...values, "patient_id":dataList[0]?.patient_id }))
    inputs["patient_id"] = dataList[0]?.patient_id;

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
              <h3>PINGA HEALTH FORM FOR {expert ? "EXPERTS" : "THE"}
              <span style={{float:'right'}}>
                <CButton
                    block
                    onClick={() => {
                      window.location.href =
                        "/admin/#/view-history/" + dataList[0]?.mobile;
                    }}
                    color="info"
                  >
                    Previous History
                  </CButton>
                </span>
              </h3>
            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="4">
                  <CLabel htmlFor="text-input">
                    <h6>Name</h6>
                  </CLabel>
                </CCol>
                <CCol md="4">
                  <CLabel htmlFor="text-input">{dataList[0]?.name}</CLabel>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="4">
                  <CLabel htmlFor="text-input">
                    <h6>Previous Consultations</h6>
                  </CLabel>
                </CCol>
                <CCol md="6">
                {dataList.map((data) => {
                    const date = new Date(data?.created_at);
                    let d = new Date(Date.parse(date));
                    //   const day = date.getDate();
                    return (
                      <>
                        <CLabel htmlFor="text-input">{d.toLocaleString()}</CLabel>
                        <br></br>
                      </>
                    );
                  })}
                </CCol>
              </CFormGroup>
              <CFormGroup row>
              <CCol md="4">
              </CCol>
                {/* <CCol md="2">
                <CButton
                  block
                  onClick={() => {
                    window.location.href =
                      "/admin/#/view-history/" + dataList[0]?.mobile;
                  }}
                  color="info"
                >
                  Previous History
                </CButton>
                </CCol> */}
              </CFormGroup>

              <CCard>
                <div
                  class="p-2 text-black"
                  style={{ backgroundColor: "lightyellow" }}
                >
                  <h6>HOW TO CONDUCT SESSION: </h6>
                  <ol>
                    <li>Login 3 minutes before the meeting</li>
                    <li>Keep lighting good</li>
                    <li>
                      Fill this form and submit immediately after the meeting
                    </li>
                  </ol>
                </div>
              </CCard>
              
              {expert ? (
                <CForm className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="text-input">
                        <h6>Your Private Observations</h6>
                        <p>(It won’t be shared with patient, only for you)
</p>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <CTextarea
                        id="text-input"
                        name="private_observation"
                        value={
                          inputs.private_observation
                            ? inputs.private_observation
                            : dataList.private_observation
                        }
                        onChange={handleChange}
                        placeholder="Enter observations (It won’t be shared with patient, only for you)"
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="number-input">
                        <h6>Recommendations/ Prescriptions - Lifestyle</h6>
                        <p>(This will be shared with the patient)</p>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <CTextarea
                        id="text-input"
                        name="prescription_lifestyle"
                        value={
                          inputs.prescription_lifestyle
                            ? inputs.prescription_lifestyle
                            : dataList.prescription_lifestyle
                        }
                        onChange={handleChange}
                        placeholder="Enter Prescription Lifestyle (This will be shared with the patient)"
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="text-input">
                        <h6>Recommendations/ Prescriptions - Medical</h6>
                        <p>(This will be shared with the patient)</p>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <CTextarea
                        id="text-input"
                        name="prescription_medical"
                        value={
                          inputs.prescription_medical
                            ? inputs.prescription_medical
                            : dataList.prescription_medical
                        }
                        onChange={handleChange}
                        placeholder="Enter Prescription Medical (This will be shared with the patient)"
                      />
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="4">
                      <CLabel htmlFor="textarea-input">
                        <h6>General Comments for Pinga team</h6>
                        <p>Any instructions for Pinga health team (won’t be shared with Patient)
</p>
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <CTextarea
                        name="general"
                        value={
                          inputs.general ? inputs.general : dataList.general
                        }
                        onChange={handleChange}
                        id="textarea-input"
                        rows="9"
                        placeholder="Enter Any instructions for Pinga health team (It won’t be shared with Patient)
                        "
                      />
                    </CCol>
                  </CFormGroup>
                </CForm>
              ) : (
                ""
              )}
            </CCardBody>
            {expert ? (
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

export default ExpertConsult;
