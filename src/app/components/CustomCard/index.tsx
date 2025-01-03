import { Box, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

type CustomCardProps = {
  title?: string,
  text: string,
  route?: string
}

export function CustomCard({ text, route, title }: CustomCardProps) {
  const router = useRouter()

  return (
    <Box
      sx={{
        boxShadow: 4,
        borderRadius: 1.5,
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        cursor: route ? 'pointer' : 'auto'
      }}
      onClick={() => {
        if(route) {
          router.push(route)
        }
      }}
    >
      <Typography variant="h6" mb={2} sx={{ borderBottom: '1px dashed', borderColor: '#94a3b8' }}>
        {title}
      </Typography>
      <Box>
        <Typography variant="body1">
          {text}
        </Typography>
      </Box>
    </Box>
  )
}