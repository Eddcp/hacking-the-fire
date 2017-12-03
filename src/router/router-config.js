import Call from '../views/Call'
import EditCall from '../views/EditCall'
import Dispatch from '../views/Dispatch'
import MedicTeam from '../views/MedicTeam'
import PatientInformation from '../views/PatientInformation'
import DispatchResource from '../views/DispatchResource'


export const routes = [
    { path: '/', component: Call},
    { path: '/call', component: Call },
    { path: '/edit-call', component: EditCall},
    { path: '/dispatch', component: Dispatch },
    { path: '/medic-team', component: MedicTeam },
    { path: '/patient-information', component: PatientInformation },
    { path: '/dispatch-resource', component: DispatchResource }
];
