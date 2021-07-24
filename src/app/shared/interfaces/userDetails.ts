import { phoneDetails } from './phoneDetails';

export interface userDetails {
	firstName: string,
	lastName: string,
	phone: Partial<phoneDetails>
}