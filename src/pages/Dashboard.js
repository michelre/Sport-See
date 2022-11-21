import Header from '../components/Header';
import LateralBar from '../components/LateralBar';
import Activity from '../components/Activity';
import Performance from '../components/Performance';
import Average from '../components/Average';
import User from '../components/User';

function Dashboard() {
return(
  <div>
    <Header/>
    <LateralBar/>
     <User/>
    <Performance/>
    <Activity/>
    <Average/>
   
  </div>
)
}

export default Dashboard;