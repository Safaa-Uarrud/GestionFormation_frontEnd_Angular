export class Formation {
  id: number;
  titre: string;
  langue: string;
  description: string;
  prix: number;
  emplacement: string;
  dateDeFormation: any;
  liencv:string;
}
export class Cart {
  idCart: number;
  id: number;
  titre: string;
  langue: string;
  description: string;
  prix: number;
  emplacement: string;
  dateDeFormation: any;
}
export class InscriptionCart {
 id: number;
 idCart: number;
 titre: string;
 idParticipant: number;
 localisation: string;
 email: string;
 numerotel: number;

}
