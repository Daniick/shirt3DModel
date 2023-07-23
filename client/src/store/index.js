import { proxy } from "valtio";

const state = proxy ({
    intro: true,
    color: '#BA0F0F',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;