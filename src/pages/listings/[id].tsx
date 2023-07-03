import GlobalContext from '@/context/GlobalContext'
import { Meta } from '@/layouts/Meta'
import { getListingById } from '@/services/Listings'
import { Main } from '@/templates/Main'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

const Listings = () => {
  const router = useRouter()
  const gContext = useContext<any>(GlobalContext)

  useEffect(() => {
    const fetch = async () => {
      if (typeof router.query.id === 'string') {
        const response = await getListingById(router.query.id)
        gContext.setListing(response?.data)
      }
    }
    fetch()
  }, [router.query.id])

  return (
    <Main meta={<Meta title="listings" description="listings" />}>
      <Box>Hi</Box>
    </Main>
  )
}

export default Listings
