import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
const user = new User();
const company = new Company();

console.log(google.maps)

const customMap = new CustomMap();

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
