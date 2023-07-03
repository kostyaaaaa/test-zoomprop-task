import { IListing } from '@/types/listing'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import InfoIcon from '@mui/icons-material/Info'
import PlaceIcon from '@mui/icons-material/Place'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const ListingItemImage = styled.img`
  width: 240px;
  height: 160px;
  margin-right: 16px;
`

const ListItemInfoContainer = styled(Box)`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 8px;
  }
`

const ListingItem = ({
  agent,
  office,
  primaryImageUrl,
  streetAddress,
  zipcode,
  livingArea,
  listingId,
  beds,
  baths,
  state,
  city,
  listPrice,
}: IListing) => {
  const { push } = useRouter()

  const handleDetailsClick = () => {
    push(`listings/${listingId}`)
  }

  return (
    <Box
      sx={{
        flex: '1',
        display: 'flex',
        margin: '16px',
        backgroundColor: 'secondary.200',
      }}
    >
      <Box sx={{ position: 'relative', display: 'flex' }}>
        <ListingItemImage src={primaryImageUrl} alt="Listing" />
        <Typography
          color="secondary.light"
          sx={{ position: 'absolute', right: '32px', bottom: '8px' }}
          variant="h4"
        >
          ${listPrice}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 1,
        }}
      >
        <Typography color="secondary.light" variant="h4">
          {office}
        </Typography>

        <ListItemInfoContainer>
          <InfoIcon />
          <Typography variant="subtitle1">
            {beds} Beds {baths} Baths {livingArea} SQFT
          </Typography>
        </ListItemInfoContainer>
        <ListItemInfoContainer>
          <PlaceIcon />
          <Typography variant="subtitle1">
            {state}, {city}, {streetAddress}, zipcode {zipcode}
          </Typography>
        </ListItemInfoContainer>
        <ListItemInfoContainer>
          <AccountBoxIcon />
          <Typography variant="subtitle1">{agent}</Typography>
        </ListItemInfoContainer>
      </Box>
      <Button onClick={handleDetailsClick} color="inherit">
        See details
      </Button>
    </Box>
  )
}

export default ListingItem
