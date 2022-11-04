import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
const user = new User();
const company = new Company();

console.log(google.maps.Map)

const customMap = new CustomMap();

customMap.addMarker(user);
customMap.addMarker(company);
