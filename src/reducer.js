export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly:null,
  // REMOVE after finished developing...
  // token:
  //   "BQDRRyHTpTTyc8D-SENBZ-QSiX3Oy6xfOEgtPZTuJEDCv1FEmTTBIBSBH7TxgIxJ0JDJREdTn3qPww-vhy63vYuIHzkrWHlgAYQb_cO4_CakFhLzYEG1aeSXUchE3TOdtxAiixBGDCMJJyz0KX2L72A5zUEB7AGxxSXO4Vx_zW11gkyL",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [playload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
