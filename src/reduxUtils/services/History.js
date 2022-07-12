import requestApi from '../../requestApi/requestApi';

// export const getAllProductService = () => {
//   return requestApi({
//     url: `/followup/notification`,
//     method: 'POST',
//     data:{
//       "notification_type": "new",
//     }
//   });
// };


export const getUserReport = (reportId) => {
  return requestApi({
    url: `/report/filter`,
    method: 'POST',
    data: {
      "report_id": reportId
    }
  });
};

export const getUserDetails = (patientId) => {
  return requestApi({
    url: `/user/${patientId}/read-single-by-admin/`,
    method: 'GET'
  });
};

export const getConsultDetails = (patientNumber) => {
  return requestApi({
    url: `/consult/filter`,
    method: 'POST',
    data: {
      "patient_mobile": patientNumber
    }
  });
};

export const submitConsult = (data) => {
  return requestApi({
    url: `/consult`,
    method: 'POST',
    data
  });
};

export const submitReport = (data) => {
  return requestApi({
    url: `/report`,
    method: 'POST',
    data
  });
};
