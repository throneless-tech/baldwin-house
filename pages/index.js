import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// MUI imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// assets
import growthImg from '../public/growth.jpg';

export default function Home() {

  return (
    <Box sx={{ backgroundColor: "#C0E7EE", py: 8 }}>
      <Head>
        <title>Baldwin House Community Collective</title>
        <meta name="description" content="Dreaming of a community collective in Ward 1, Washington, DC." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <Container sx={{ textAlign: "center" }}>
          <Typography component="h1" variant="h2" gutterBottom>Baldwin House Community Collective</Typography>
          <Button href="https://givebutter.com/baldwinhouse" color="success" variant="outlined" sx={{ fontSize: 20, marginBottom: 2 }}>Donate</Button>
        </Container>
        <Container maxWidth="md">
          <Typography component="h2" variant="h3" gutterBottom>About</Typography>
          <Typography component="div" variant="body1" sx={{ fontSize: 24 }} gutterBottom>Our goal is to create a model of intentional collective living and collective spaces that allow communities the safety to grow, create, and thrive while providing an alternative to break the cycle of displacement and gentrification.</Typography>
          <Typography component="div" variant="body1" sx={{ fontSize: 24 }} gutterBottom>
            We want to  create a space in the community where Black and brown working class people across the ward can thrive, and we are eager to follow their leadership in this shared dream. It’s critical to us that the current tenants are taken care of in the process and are set up with what they need to thrive, regardless of their decision to stay or move.
          </Typography>
          <Typography component="div" variant="body1" sx={{ fontSize: 24, fontWeight: "bold" }} gutterBottom>
            Want to contribute? Donate via the link above or email <Link href="mailto:baldwinhousecoop@gmail.com">baldwinhousecoop@gmail.com</Link> for more information.
          </Typography>
          <Typography component="h2" variant="h3" gutterBottom>Our mission</Typography>
          <Typography component="div" variant="body1" sx={{ fontSize: 24 }} gutterBottom>
            To ensure and sustain our collective liberated future in the Howard University neighborhood of Ward 1 and across DC in which safe, stable, and healthy housing, housing communities, neighborhoods, and organizing spaces are grounded in Black, Latinx, native Washingtonian, and other frontline leadership - centering communities that have been historically excluded from generational property ownership. The goal is to create a model of intentional collective living and collective spaces that allow communities the safety to grow, create, and thrive and provides an alternative to break the cycle of displacement and gentrification. Baldwin House would serve both as an affordable residential cooperative and as a commercial hub for Ward 1 Mutual Aid operations, where residents and neighbors contribute to the space.
          </Typography>
          <Typography component="h2" variant="h3" gutterBottom>Our Vision</Typography>
          <Typography component="div" variant="body1" sx={{ fontSize: 24 }} gutterBottom>
            To learn and practice how to build a concrete alternative to commodified, displacement-driven housing and development through the purchase, renovation, transition, and collective & cooperative care by a mutual aid group of a multifamily and office building that would otherwise contribute to gentrification, significant harms to resident health and wellbeing, and community cultural loss.
          </Typography>
        </Container>
      </main>

      <footer>
        <Container sx={{ marginTop: 8 }}>
          <Typography component="span" variant="body2" sx={{ fontSize: 16 }}>This site was built with love by{' '}</Typography>
          <Link href="https://throneless.tech" variant="body2" sx={{ fontSize: 16 }}>Throneless Tech</Link>
          <Typography component="span" variant="body2" sx={{ fontSize: 16 }}>.</Typography>
        </Container>
      </footer>
    </Box>
  )
}
