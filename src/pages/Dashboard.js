
import Activity from '../components/Activity';
import Performance from '../components/Performance';
import Average from '../components/Average';
import User from '../components/User';

function Dashboard() {
return(
  <div>
     <User/>
    <Performance/>
    <Activity/>
    <Average/>
   
  </div>
)
}

export default Dashboard;