export const ApiConfigConstants = {
    apiUrl: 'http://localhost:4000'
}
const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url='http://127.0.0.1:8000/car_service/api_rest/'
//export const iniciar_sesion=()=>`${ cors_anywhere }${ base_url }iniciar_sesion/`
export const iniciar_sesion=(username,password)=>`${ base_url }iniciar_sesion/?username=${ username }&password=${ password }`
export const tickets_abiertos_url=(empresa_id,token) =>`${ base_url }tickets_abiertos/?empresa_id=${ empresa_id }&token=${ token }`
export const tickets_list_url=(empresa_id,user_id,token) =>`${ base_url }all_ticket/?empresa_id=${ empresa_id }&user_id=${ user_id }&token=${ token }`
export const cambiar_patente_url=(empresa_id,patente,ticket_id,token) =>`${ base_url }editar_patente/?empresa_id=${ empresa_id }&nueva_patente=${ patente }&ticket_id=${ ticket_id }&token=${ token }`
export const ingresar_patente_url=(empresa_id,patente,username,token) =>`${ base_url }nuevo_ticket/?empresa_id=${ empresa_id }&patente=${ patente }&username=${ username }&token=${ token }`
export const sacar_patente_url=(empresa_id,patente,token) =>`${ base_url }sacar_patente/?empresa_id=${ empresa_id }&patente=${ patente }&token=${ token }`
export const pagar_patente_url=(empresa_id,ticket_id,username,emisor_dte,token) =>`${ base_url }pagar/?empresa_id=${ empresa_id }&ticket_id=${ ticket_id }&username=${ username }&emisor_dte=${ emisor_dte }&token=${ token }`
