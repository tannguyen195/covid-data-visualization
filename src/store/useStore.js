import * as THREE from "three";

import create from "zustand";
const useStore = create((set, get) => ({
  data: null,
  setData: (data) => {
    set(() => ({ data: data }));
  },
  error: null,
  setError: (error) => {
    set(() => ({ error: error }));
  },
  loading: true,
  setLoading: (loading) => {
    set(() => ({ loading: loading }));
  },

  cameraPosition: new THREE.Vector3(
    1.0959887504577637,
    0.005898133385926485,
    0.19488362967967987
  ),
  activeMesh: null,
  setCameraPosition: (payload) => {
    set(() => ({
      activeMesh: payload.activeMesh,
    }));
  },

  isResetCamera: false,
  resetCamera: (payload) => {
    set(() => ({ isResetCamera: payload }));
  },
}));

export default useStore;

//1.0959887504577637,0.005898133385926485,0.19488362967967987
//-6.2984731793403625, 0.000016055365650645204, 13.720216155052185
