import { Role } from './role';
import { MembershipLevel } from './membership-level';
import { FileItem } from './file-item';

export class User {
    id: number;
    email: string;
    role: Role;
    // tslint:disable-next-line:variable-name
    membership_level: MembershipLevel;
    files: FileItem[];
    folders: FileItem[];
}
