import axios from 'axios';

export default axios.create({
  baseURL: `http://app-kunde.y8b7cfse9j-gok67yyq7652.p.runcloud.link`, //YOUR_API_URL HERE
  // baseURL: `http://localhost:8000`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});

export const urls = {
  getLeads: 'api/lead/fetchAllLead',
  createLead: 'api/lead/create-lead',
  getAllEvents: 'api/events/getAllEvents',
  getAllReminders: 'api/lead/remainder',
  getLeadDetails: 'api/lead/edit',
  updateLeadDetails: 'api/lead/update',
  getAllUsers: 'api/user/getAllUser',
  updateStatus: 'api/lead/update-status',
  updateFollowupDate: 'api/lead/update_follow_up_date',
  getAllServices: 'api/services/getAllServices',
  downloadquote: 'api/lead/generateQuotes',
  updateExternalCommunication: 'api/communication',
  getExternalCommunication: 'api/communication',
  getLeadDashboard:'api/lead_dashboard'
};

// export const baseURL = 'http://localhost:8000';
export const baseURL = 'http://app-kunde.y8b7cfse9j-gok67yyq7652.p.runcloud.link';
