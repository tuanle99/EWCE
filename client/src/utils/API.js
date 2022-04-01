/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  //coordinator
  getCoordinators: function () {
    return axios.get("/api/coordinator");
  },
  createCoordinator: function (userData) {
    return axios.post("/api/coordinator", userData);
  },
  getCoordinator: function (id) {
    return axios.get("/api/coordinator/" + id);
  },
  updateCoordinator: function (id, userData) {
    return axios.put("/api/coordinator/" + id, userData);
  },
  deleteCoordinator: function (id) {
    return axios.delete("/api/coordinator/" + id);
  },
  //consumer
  getConsumers: function () {
    return axios.get("/api/consumer");
  },
  createConsumer: function (userData) {
    return axios.post("/api/consumer", userData);
  },
  getConsumer: function (id) {
    return axios.get("/api/consumer/" + id);
  },
  updateConsumer: function (id, userData) {
    return axios.put("/api/consumer/" + id, userData);
  },
  deleteConsumer: function (id) {
    return axios.delete("/api/consumer/" + id);
  },
  //collector
  getCollectors: function () {
    return axios.get("/api/collector");
  },
  createCollector: function (userData) {
    return axios.post("/api/collector", userData);
  },
  getCollector: function (id) {
    return axios.get("/api/collector/" + id);
  },
  updateCollector: function (id, userData) {
    return axios.put("/api/collector/" + id, userData);
  },
  deleteCollector: function (id) {
    return axios.delete("/api/collector/" + id);
  },
  //bin
  getBins: function () {
    return axios.get("/api/bin");
  },
  createBin: function (userData) {
    return axios.post("/api/bin", userData);
  },
  getBin: function (id) {
    return axios.get("/api/bin/" + id);
  },
  updateBin: function (id, userData) {
    return axios.put("/api/bin/" + id, userData);
  },
  deleteBin: function (id) {
    return axios.delete("/api/bin/" + id);
  },
};
