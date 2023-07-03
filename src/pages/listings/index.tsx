import ListingItem from '@/components/ListingItem'
import GlobalContext from '@/context/GlobalContext'
import { Meta } from '@/layouts/Meta'
import { getAllListings } from '@/services'
import { Main } from '@/templates/Main'
import { IListing } from '@/types/listing'
import { Box } from '@mui/material'
import { useContext, useEffect } from 'react'

const Listings = () => {
  const gContext = useContext<any>(GlobalContext)

  useEffect(() => {
    const fetch = async () => {
      const response = await getAllListings()
      gContext.setListings(response?.data)
    }
    fetch()
  }, [])

  return (
    <Main meta={<Meta title="listings" description="listings" />}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {gContext.listings.map((listing: IListing) => (
          <ListingItem {...listing} key={listing.listingId} />
        ))}
      </Box>
    </Main>
  )
}

export default Listings
