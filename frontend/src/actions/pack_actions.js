import * as APIUtil from '../util/pack_api_util';

export const RECEIVE_PACK = "RECEIVE_PACK";
export const REMOVE_PACK = "REMOVE_PACK";
export const RECEIVE_USER_PACKS = "RECEIVE_USER_PACKS";
export const REMOVE_PACKS = "REMOVE_PACKS";

export const receiveUserPacks = (packs) => ({
  type: RECEIVE_USER_PACKS,
  packs: packs.data
})

export const receivePack = (pack) => ({
  type: RECEIVE_PACK,
  pack: pack.data
})

export const removePack = (packId) => ({
  type: REMOVE_PACK,
  packId: packId.data
})

export const removePacks = () => ({
  type: REMOVE_PACKS
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

export const leavePack = (data) => (dispatch) => (
  APIUtil.leavePack(data)
    .then(packId => dispatch(removePack(packId)))
    .catch(err => console.log(err))
)

export const deletePack = (id) => (dispatch) => (
  APIUtil.deletePack(id)
    .then(packId => dispatch(removePack(packId)))
    .catch(err => console.log(err))
)
