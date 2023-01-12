export interface UserProps {
  email: string;
  password: string;
  name: string;
}

export class User {
  public email: string;
  public password: string;
  public name: string;

  constructor(props: UserProps) {
    this.email = props.email;
    this.password = props.password;
    this.name = props.name;
  }
}
