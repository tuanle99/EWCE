/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  //coordinator
  getCoordinators: function () {
    return axios.get("api/coordinator");
  },
  createCoordinator: function () {
    return axios.post("api/coordinator");
  },
  getCoordinator: function (id) {
    return axios.get("/api/coordinator/" + id);
  },
  updateCoordinator: function (id) {
    return axios.put("/api/coordinator/" + id);
  },
  deleteCoordinator: function (id) {
    return axios.delete("/api/coordinator/" + id);
  },
  //consumer
  getConsumers: function () {
    return axios.get("api/consumer");
  },
  createConsumer: function () {
    return axios.post("api/consumer");
  },
  getConsumer: function (id) {
    return axios.get("/api/consumer/" + id);
  },
  updateConsumer: function (id) {
    return axios.put("/api/consumer/" + id);
  },
  deleteConsumer: function (id) {
    return axios.delete("/api/consumer/" + id);
  },
  //collector
  getCollectors: function () {
    return axios.get("api/collector");
  },
  createCollector: function () {
    return axios.post("api/collector");
  },
  getCollector: function (id) {
    return axios.get("/api/collector/" + id);
  },
  updateCollector: function (id) {
    return axios.put("/api/collector/" + id);
  },
  deleteCollector: function (id) {
    return axios.delete("/api/collector/" + id);
  },
  //bin
  getBins: function () {
    return axios.get("api/bin");
  },
  createBin: function () {
    return axios.post("api/bin");
  },
  getBin: function (id) {
    return axios.get("/api/bin/" + id);
  },
  updateBin: function (id) {
    return axios.put("/api/bin/" + id);
  },
  deleteBin: function (id) {
    return axios.delete("/api/bin/" + id);
  },
};
