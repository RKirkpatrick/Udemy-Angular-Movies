export interface actorCreationDTO {
  name: string;
  dateOfBirth: Date;
  picture: File;
  biography: string;
}

export interface actorDTO {
  id: number;
  name: string;
  dateOfBirth: Date;
  picture: string;
  biography: string;
}
