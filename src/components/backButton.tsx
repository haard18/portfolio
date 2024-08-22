import { useNavigate } from "react-router-dom"

const BackButton = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    }
    return (

        // <div className='min-h-screen flex flex-col items-center justify-center  py-12'></div>
        <div className="top-0 left-0 bottom-0 p-4 block bg-gradient-to-r from-blue-50 to-blue-100">
            <button onClick={handleBack} style={{ display: "inline-block" }}>back</button>
        </div>
    )
}

export default BackButton
