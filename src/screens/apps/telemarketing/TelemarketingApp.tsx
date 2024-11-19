import { Outlet } from 'react-router-dom'
import TelemarketingTabBtn from './TelemarketingTabBtn'

const TelemarketingApp = () => {
    return (
        <div>
            <div>
                <TelemarketingTabBtn />
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default TelemarketingApp