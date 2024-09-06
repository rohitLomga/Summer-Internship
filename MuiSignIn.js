import { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Divider, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import image from './image1.png';
import studentImage from './image2.png';


// Styled component for the form container
const FormContainer = styled('div')({
    width: '410px',
  });
  

const StyledImage = styled('img')(({ theme }) => ({
    '&#student': {
        marginTop: '110px',
        marginRight: '70px',
        width: '250px',
        height: 'auto',
      },
  }));

  const MainContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    border: '1px solid black',
    width: '1140px',
    height: '500px',
    margin: '100px 0 0 195px',
    backgroundColor: '#E6E6ED',
    border: 'none',
  });

  const CustomButton = styled(Button)({
    padding: '10px 65px 10px 65px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#3D3D4E',
    color: 'white',
    wordSpacing: '5px',
    margin: '25px 0 0 100px',
    '&:hover': {
        backgroundColor: '#3D3D4E',
      },
  });

export default function MuiSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedDetails = JSON.parse(localStorage.getItem('email'));

    if (email === '' || password === '') {
      alert("Please fill all the details");
      return;
    }

    if (storedDetails.email === email && storedDetails.password === password) {
      alert("Sign in successful");
    } else {
      alert("Email and password don't match");
    }
  };

  return (
    <MainContainer>
      <FormContainer>
        <Typography variant="h4" gutterBottom sx={{
            marginLeft: '-55px'
        }}>
          AxeSuite
        </Typography>
        <Typography variant="h5" gutterBottom sx={
            {marginLeft: '150px', fontSize: '32px', marginTop: '50px' }}>
          Sign in
        </Typography>
        <Box component="form" sx={{ width: '100%', mb: 2 }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address..."
            fullWidth
            margin="normal"
            required
            sx={{backgroundColor: 'white'}}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password..."
            fullWidth
            margin="normal"
            required
            sx={{backgroundColor: 'white'}}
          />
          
        <Typography variant="body2" color="textSecondary">
          Don't have account ? 
          <Typography variant='body2' sx={ {margin: '-20px 0 0 140px', cursor: 'pointer'}}>Sign up</Typography>
        </Typography>

        <Typography variant="body2" color="textSecondary" sx={
            {margin: '-20px 0 0 255px', cursor: 'pointer'}
        }>
          Forgot your password?
        </Typography>

        <CustomButton
            variant="contained"
            onClick={handleSubmit}
          >
            LOG IN
          </CustomButton>
        </Box>

      </FormContainer>
      <Divider orientation="vertical" flexItem sx={{ height: '100%' }} />

      <div>
        <StyledImage src={studentImage} alt="student" id='student' />
      </div>
    </MainContainer>
  );
}
