export const ApiConfigConstants = {
    apiUrl: 'http://localhost:4000'
}
const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url='http://127.0.0.1:8000/car_service/api_rest/'
//export const iniciar_sesion=()=>`${ cors_anywhere }${ base_url }iniciar_sesion/`
export const iniciar_sesion=(username,password)=>`${ base_url }iniciar_sesion/?username=${ username }&password=${ password }`
export const tickets_abiertos_url=(empresa_id,token) =>`${ base_url }tickets_abiertos/?empresa_id=${ empresa_id }&token=${ token }`
export const tickets_list_url=(empresa_id,user_id,token) =>`${ base_url }all_ticket/?empresa_id=${ empresa_id }&user_id=${ user_id }&token=${ token }`