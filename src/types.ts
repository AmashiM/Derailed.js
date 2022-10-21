/**
 * @description snowflake is a id used to identify
 */
type snowflake = string 

interface UserData {
	id:	snowflake
	username:	string
	discriminator:	string
	email: string
	password: string
	verification: verification_object
}

export { UserData }