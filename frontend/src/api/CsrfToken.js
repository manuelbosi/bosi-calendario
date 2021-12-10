import Api from "./Api";

const CsrfToken = () => {

    const getCookieToken = () => {
        Api.get('/csrf-cookie')
    }

    return {
        getCookieToken
    }

}
export default CsrfToken