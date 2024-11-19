import App from '@/App'
import AppList from '@/screens/main/AppList'
import Hrms from '@/screens/main/Hrms'
import Login from '@/screens/main/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Default from './Default'
import Register from '@/screens/main/Register'
import Resetpassword from '@/screens/main/Resetpassword'
import TelemarketingApp from '@/screens/apps/telemarketing/TelemarketingApp'
import TelemarketingDashboard from '@/screens/apps/telemarketing/views/TelemarketingDashboard'
import TelemarketingLeads from '@/screens/apps/telemarketing/views/TelemarketingLeads'
import TelemarketingSitevisit from '@/screens/apps/telemarketing/views/TelemarketingSitevisit'

const AppRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='reset-password/:token' element={<Resetpassword />} />
                <Route path='apps' element={<AppList />} />
                <Route path='hrms' element={<Hrms />}>
                    <Route path='telemarketing' element={<TelemarketingApp />}>
                       <Route path='dashboard' element={<TelemarketingDashboard/>} />
                       <Route path='lead' element={<TelemarketingLeads/>} />
                       <Route path='site-visits' element={<TelemarketingSitevisit/>} />
                    </Route>
                </Route>

                <Route path='*' element={<Default />} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default AppRouter