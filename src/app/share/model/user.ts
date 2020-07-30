import { FileItem } from './file-item';
import { MembershipLevel } from './membership-level';
import { Role } from './role';

export class User {
    public id: number;
    public email: string;
    public role: Role;
    // tslint:disable-next-line:variable-name
    public  membership_level: MembershipLevel;
    // tslint:disable-next-line:variable-name
    public total_size_files: number;
    public folders: FileItem[];
}
