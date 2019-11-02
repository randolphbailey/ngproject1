import { User } from './user.model'
import { ReimbursementStatus } from './reimbursement-status.model'
import { ReimbursementType } from './reimbursement-type.model'

export class Reimbursement {
  constructor(
    public id: number,
    public amount: number,
    public descripttion: string,
    public receipt: string,
    public submitted: number,
    public resolved: number,
    public user: User,
    public resolver: User,
    public status: ReimbursementStatus,
    public type: ReimbursementType
  ) {}
}
