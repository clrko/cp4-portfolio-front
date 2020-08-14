import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL

export default {
  fetchProject(projectId) {
    return axios
      .get(`${process.env.REACT_APP_SERVER_URL}/project/${projectId}`)
      .then((res) => res.data)
  },

  createProject(data) {
    return axios.post('/project', data)
  },

  updateProject(projectId, data) {
    return axios.put(`/project/${projectId}`, data)
  }
}
