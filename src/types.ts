
export interface UserData {
	id:	string
	username:	string
	discriminator:	string
	email: string
	password: string
	verification: {
		email: boolean | null,
		phone: boolean | null
	}
}

export type snowflake = string