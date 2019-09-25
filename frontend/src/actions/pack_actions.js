import * as APIUtil from '../util/pack_api_util';

export const RECEIVE_PACK = "RECEIVE_PACK";
export const REMOVE_PACK = "REMOVE_PACK";
export const RECEIVE_USER_PACKS = "RECEIVE_USER_PACKS";

export const receiveUserPacks = (packs) => ({
  type: RECEIVE_USER_PACKS,
  packs
})

export const receivePack = (pack) => ({
  type: RECEIVE_PACK,
  pack
})

export const removePack = (packId) => ({
  type: REMOVE_PACK,
  packId
})

export const getPacks = (data) => (dispatch) => (
  APIUtil.getPacks(data)
    .then(pack => dispatch(receivePack(pack)))
    .catch(err => console.log(err))
)

export const getPack = (id) => (dispatch) => (
  APIUtil.getPack(id)
    .then(pack => dispatch(receivePack(pack)))
    .catch(err => console.log(err))
)

export const getUserPacks = (id) => (dispatch) => (
  APIUtil.getUserPacks(id)
    .then(packs => dispatch(receiveUserPacks(packs)))
    .catch(err => console.log(err))
)

export const createPack = (data) => (dispatch) => (
  APIUtil.createPack(data)
    .then(pack => dispatch(receivePack(pack)))
    .catch(err => console.log(err))
)

export const updatePack = (data) => (dispatch) => (
  APIUtil.updatePack(data)
    .then(pack => dispatch(receivePack(pack)))
    .catch(err => console.log(err))
)

// export const removePack = (id) => (dispatch) => (
//   APIUtil.updatePack(id)
//     .then(packId => dispatch(removePack(packId)))
//     .catch(err => console.log(err))
// )
