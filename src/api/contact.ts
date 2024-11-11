export interface CreateDeptPayload {
  name: string
  org_num: string
}

export interface ContactModel {
  address_list: Contacts
}

export interface DepartmentsModel {
  depts: Omit<DepartmentModel, 'members'>[]
}

export enum MemberType {
  User,
  Device,
}

export enum TrackType {
  Close,
  High,
  Medium,
  Low,
  Keep,
}

export interface MemberModel {
  user_id: number
  dept_id: number
  country_code: string
  phone: string
  type: MemberType
  tts: number
  loc_share: number
  track: TrackType
  state: 0 | 1
  created: number
  user_num: string
  sex: 0 | 1
  name: string
  avatar: string
}

export interface DepartmentModel {
  id: number
  name: string
  members: MemberModel[]
}

interface Contacts {
  version: number
  members: MemberModel[]
  depts: DepartmentModel[]
}
