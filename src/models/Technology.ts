import { Triplet } from "@react-three/cannon"

export interface Technology {
    name: string,
    icon: string
}

export interface TechnologyTile extends Technology {
    position: Triplet
}