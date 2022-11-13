
import Activity from '../components/Activity';
import Performance from '../components/Performance';
import Average from '../components/Average';
import User from '../components/User';

function Dashboard() {
return(
  <div>
    <Performance/>
    <Activity/>
    <Average/>
    <User/>
  </div>
)
}

export default Dashboard;