import { tickets_abiertos_url, tickets_list_url, cambiar_patente_url,ingresar_patente_url,sacar_patente_url,pagar_patente_url } from "../constants";
import axios from "axios";
export const ticketService = {
  tickets_abiertos,
  tickets_list,
  cambiar_patente,
  ingresar_patente,
  sacar_patente,
  pagar
};

function tickets_abiertos(empresa_id) {
  var token = JSON.parse(localStorage.getItem("token"));
  console.log(tickets_abiertos_url(empresa_id, token));
  return axios({
    method: "get",
    url: tickets_abiertos_url(empresa_id, token),
  })
    .then((res) => {
      if (!res.statusText === "OK") {
        if (res.status !== 200) {
          //window.location.reload();
        }
        const error = (res && res.error_message) || res.statusText;
        return Promise.reject(error);
      } else {
        return res.data.result;
      }
    })
    .catch((err) => {
      if (err.response) {
        //console.log(err.response.data.error_message);
        return Promise.reject(err.response.data.error_message);
      } else {
        //console.log(err.toJSON().message);
        return Promise.reject(err.toJSON().message);
      }
    });
}
function tickets_list(empresa_id,user_id) {
  var token = JSON.parse(localStorage.getItem("token"));
  return axios({
    method: "get",
    url: tickets_list_url(empresa_id,user_id, token),
  })
    .then((res) => {
      if (!res.statusText === "OK") {
        if (res.status !== 200) {
          //window.location.reload();
        }
        const error = (res && res.error_message) || res.statusText;
        return Promise.reject(error);
      } else {
        return res.data.result;
      }
    })
    .catch((err) => {
      if (err.response) {
        //console.log(err.response.data.error_message);
        return Promise.reject(err.response.data.error_message);
      } else {
        //console.log(err.toJSON().message);
        return Promise.reject(err.toJSON().message);
      }
    });
}
function cambiar_patente(empresa_id,patente,ticket_id) {
  var token = JSON.parse(localStorage.getItem("token"));
  return axios({
    method: "get",
    url: cambiar_patente_url(empresa_id,patente,ticket_id, token),
  })
    .then((res) => {
      if (!res.statusText === "OK") {
        if (res.status !== 200) {
          //window.location.reload();
        }
        const error = (res && res.error_message) || res.statusText;
        return Promise.reject(error);
      } else {
        return res.data.result;
      }
    })
    .catch((err) => {
      if (err.response) {
        //console.log(err.response.data.error_message);
        return Promise.reject(err.response.data.error_message);
      } else {
        //console.log(err.toJSON().message);
        return Promise.reject(err.toJSON().message);
      }
    });
}
function ingresar_patente(empresa_id, patente, username) {
  var token = JSON.parse(localStorage.getItem("token"));
  return axios({
    method: "get",
    url: ingresar_patente_url(empresa_id,patente,username, token),
  })
    .then((res) => {
      if (!res.statusText === "OK") {
        if (res.status !== 200) {
          //window.location.reload();
        }
        const error = (res && res.error_message) || res.statusText;
        return Promise.reject(error);
      } else {
        return res.data.result;
      }
    })
    .catch((err) => {
      if (err.response) {
        //console.log(err.response.data.error_message);
        return Promise.reject(err.response.data.error_message);
      } else {
        //console.log(err.toJSON().message);
        return Promise.reject(err.toJSON().message);
      }
    });
}

function sacar_patente(empresa_id, patente) {
  var token = JSON.parse(localStorage.getItem("token"));
  return axios({
    method: "get",
    url: sacar_patente_url(empresa_id,patente, token),
  })
    .then((res) => {
      if (!res.statusText === "OK") {
        if (res.status !== 200) {
          //window.location.reload();
        }
        const error = (res && res.error_message) || res.statusText;
        return Promise.reject(error);
      } else {
        return res.data.result;
      }
    })
    .catch((err) => {
      if (err.response) {
        return Promise.reject(err.response.data.error_message);
      } else {
        return Promise.reject(err.toJSON().message);
      }
    });
}
function pagar(empresa_id, ticket_id,username,emisor_dte) {
  var token = JSON.parse(localStorage.getItem("token"));
  return axios({
    method: "get",
    url: pagar_patente_url(empresa_id, ticket_id,username,emisor_dte, token),
  })
    .then((res) => {
      if (!res.statusText === "OK") {
        if (res.status !== 200) {
          //window.location.reload();
        }
        const error = (res && res.error_message) || res.statusText;
        return Promise.reject(error);
      } else {
        return res.data.result;
      }
    })
    .catch((err) => {
      if (err.response) {
        //console.log(err.response.data.error_message);

        return Promise.reject(err.response.data.error_message);
      } else {
        //console.log(err.toJSON().message);
        return Promise.reject(err.toJSON().message);
      }
    });
}