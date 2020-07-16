import { Role } from './role';
import { MembershipLevel } from './membership-level';

export class User {
    id: number;
    email: string;
    role: Role;
    // tslint:disable-next-line:variable-name
    membership_level: MembershipLevel;
}
