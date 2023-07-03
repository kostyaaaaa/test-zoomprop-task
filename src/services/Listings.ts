import HttpService from './httpService'

export const getAllListings = async () => {
  return await HttpService.get('/listings')
}

export const getListingById = async (id: string) => {
  return await HttpService.get(`/listings/${id}`)
}
