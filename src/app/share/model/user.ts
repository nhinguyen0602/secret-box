import { Role } from './role';
import { MembershipLevel } from './membership-level';
import { FileItem } from './file-item';

export class User {
    id: number;
    email: string;
    role: Role;
    // tslint:disable-next-line:variable-name
    membership_level: MembershipLevel;
    // tslint:disable-next-line:variable-name
    total_size_files: number;
    folders: FileItem[];
}
