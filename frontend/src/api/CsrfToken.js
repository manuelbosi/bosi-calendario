import Api from "./Api";

const CsrfToken = () => {

    const getCookieToken = async () => {
        await Api.get('/csrf-cookie')
    }

    return {
        getCookieToken
    }

}
export default CsrfToken