export interface People {
  id?: number;
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: Array<string>;
  species?: Array<string>;
  vehicles?: Array<string>;
  starships?: Array<string>;
  created?: string;
  edited?: string;
  url?: string;
  image?: string;
}


export interface Planets {
  id?: number;
  image?: number;
  name?: number;
  rotation_period?: number;
  orbital_period?: number;
  diameter?: number;
  climate?: number;
  gravity?: number;
  terrain?: number;
  surface_water?: number;
  population?: number;
  residents?: Array<string>;
  films?: Array<string>;
  created?: number;
  edited?: number;
  url?: number;
}

export interface Starship {
  id?: number;
  image?: number;
  name?: string;
  model?: string;
  manufacturer?: string;
  cost_in_credits?: string;
  length?: string;
  max_atmosphering_speed?: string;
  crew?: string;
  passengers?: string;
  cargo_capacity?: string;
  consumables?: string;
  hyperdrive_rating?: string;
  MGLT?: string;
  starship_class?: string;
  pilots?: Array<any>;
  films?: Array<string>;
  created?: string;
  edited: string;
  url?: string;
}

