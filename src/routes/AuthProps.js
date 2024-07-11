import { useSelector } from 'react-redux';

export default function AuthProps(isClosed) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    if (isClosed && !isLoggedIn) {
        // window.location = "http://localhost:3000/";
        return false;
    }

    return true;
}
