const defaultState = { bands: [] }

export default function manageBand(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = { id: Math.random(), name: action.name }
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
      return { bands };

    default:
      return state;
  }
};
