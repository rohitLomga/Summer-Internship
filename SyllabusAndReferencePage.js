import React from 'react';
import MainMenuAndTopBar from './MainMenuAndTopBar';

import {
    Box,
    Typography,
    Paper,
    Stack,
    TextField,
    MenuItem,
    styled,
    Button

 } from '@mui/material';
 const CustomButton = styled(Button)({
    // padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#3D3D4E',
    textTransform: 'capitalize',
    color: 'white',
    wordSpacing: '5px',
    // margin: '17px 0 0 65px',
    '&:hover': {
      backgroundColor: '#2f2f3c',
    },
  });

  const drawerWidth = 200; // Width of the drawer


function SyllabusAndReference() {
    return (
        <Box>

            <MainMenuAndTopBar />
             {/* Main content area, offset by drawer width */}
             <main
                style={{
                flexGrow: 1,
                padding: '24px',
                marginLeft: drawerWidth,
                marginTop: '64px',
                }}
                >
                <Paper elevation={2} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', padding: '15px 0', gap: '20px', marginBottom: '20px'}}>
                    <Box width='250px' sx={{ marginLeft: '20px'}}>
                    <Typography sx={{marginBottom: '10px',}}>Program</Typography>
                        <TextField
                        label='Select Program'
                        select
                        size="small"
                        fullWidth
                        >

                        <MenuItem value='campus'>Hello</MenuItem>                        
                        </TextField>
                    </Box>

                    <Box width='250px'>
                    <Typography sx={{marginBottom: '10px'}}>Session</Typography>

                        <TextField
                        label='Select Session'
                        select
                        size="small"
                        fullWidth
                        >

                            <MenuItem value='campus'>2023-24</MenuItem>                        
                        </TextField>
                    </Box>

                   
                    <Stack>
                        <CustomButton variant="contained">Search</CustomButton>
                    </Stack>

                    <Stack>
                        <CustomButton variant="contained">Add Programs</CustomButton>
                    </Stack>
                </Paper>
                </main>
     
             <Box sx={{width: '1268px',marginLeft: '225px', margintop: '0px'}}>

            {/* DIV UNDER TOP BAR */}
            <Paper elevation={3} sx={{ padding: '15px 0', marginBottom: 3, }}>

                {/* SUBJECT NAME LINE */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 1, padding: '0 20px' }}>
                    <Typography variant="body1" fontWeight="bold">Subject Name: Physics</Typography>
                    <Stack direction="row" spacing={2} alignItems="center" gap={5}>
                        <Typography variant="body1" fontWeight="bold">L</Typography>
                        <Typography variant="body1" fontWeight="bold">T</Typography>
                        <Typography variant="body1" fontWeight="bold">P</Typography>
                        <Typography variant="body1" fontWeight="bold">Credit</Typography>

                    </Stack>
                </Stack>

                {/* COURSE CODE LINE */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 1 , padding: '10px 20px', backgroundColor: '#E6E6ED'}}>
                    <Typography variant="body1" fontWeight="bold">Course Code: SEBST101</Typography>
                    <Stack direction="row" spacing={9} alignItems="center">
                        <Typography variant="body1" fontWeight="bold">3</Typography>
                        <Typography variant="body1" fontWeight="bold">0</Typography>
                        <Typography variant="body1" fontWeight="bold" sx={{paddingRight: '8px'}}>0</Typography>
                        <Typography variant="body1" fontWeight="bold" sx={{paddingRight: '15px'}}>3</Typography>

                    </Stack>
                </Stack>

                {/* CATEGORY AND SEMESTER LINE */}
                <Stack direction="row" justifyContent="flex-start" gap={50} alignItems="center">
                    <Typography variant="body1" fontWeight="bold">Category: Basic Sciences</Typography>
                    <Typography variant="body1" fontWeight="bold">Semester: First</Typography>
                </Stack>
            </Paper>

            {/* SYLLABUS SECTION */}
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
                <Typography variant="h4" gutterBottom>Syllabus</Typography>

                {/* MODULE 1 */}
                <Box sx={{ marginBottom: 2 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">Module 1: Laser and Optical Fiber</Typography>
                        <Typography variant="body1">08 lectures</Typography>
                    </Stack>
                    <Typography variant="body2">
                        LASER: Characteristic properties of a LASER beam, Interaction of Radiation with Matter, Einstein's A and B Coefficients...
                    </Typography>
                </Box>

                {/* MODULE 2 */}
                <Box sx={{ marginBottom: 2 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">Module 2: Quantum Mechanics</Typography>
                        <Typography variant="body1">08 lectures</Typography>
                    </Stack>
                    <Typography variant="body2">
                        de Broglie Hypothesis and Matter Waves, de Broglie wavelength and derivation of expression by analogy, Phase Velocity...
                    </Typography>
                </Box>

                {/* MODULE 3 */}
                <Box sx={{ marginBottom: 2 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">Module 3: Quantum Computing</Typography>
                        <Typography variant="body1">08 lectures</Typography>
                    </Stack>
                    <Typography variant="body2">
                        Principles of Quantum Information & Quantum Computing: Introduction to Quantum Computing, Moore's law & its end...
                    </Typography>
                </Box>
            </Paper>

            {/* REFERENCE SECTION */}
            <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h4" gutterBottom>Reference</Typography>

                {/* REFERENCE BOOKS */}
                <Box sx={{ marginBottom: 2 }}>
                    <Typography variant="h6">Text and Reference Books</Typography>
                    <Typography variant="body2" component="ol" sx={{ paddingLeft: 2 }}>
                        <li>Principles of Lasers by Orazio Svelto</li>
                        <li>Principles of Quantum Mechanics by R. Shankar</li>
                        <li>Quantum Computation and Quantum Information by Michael A. Nielsen and Isaac L. Chuang</li>
                        <li>Introduction to Solid State Physics by Charles Kittel</li>
                        <li>Physics for Game Developers by David M. Bourg and Bryan Bywalec</li>
                        <li>Introduction to the Practice of Statistics by David S. Moore, George P. McCabe, and Bruce A. Craig</li>
                    </Typography>
                </Box>

                {/* DIGITAL RESOURCES */}
                <Box>
                    <Typography variant="h6">Digital Resources</Typography>
                    <Typography variant="body2" component="ol" sx={{ paddingLeft: 2 }}>
                        <li>MIT OpenCourseWare - Laser and Optical Engineering (URL - https://ocw.mit.edu/6-007-electromagnetic-energy-from-motors-to-lasers-spring-2011)</li>
                        <li>Stanford Online - Quantum Mechanics and Quantum Computation (URL - https://online.stanford.edu/courses/soe-yeeqmse01-quantum-mechanics-scientists-and-engineers)</li>
                        <li>MIT OpenCourse - Quantum Physics (URL - https://ocw.mit.edu/courses/8-04-quantum-physics-spring-2013/)</li>
                        <li>Microsoft Quantum Development Kit (URL - https://learn.microsoft.com/en-us/azure/quantum/)</li>
                        <li>MIT OpenCourseWare - Solid State Chemistry (URL - https://ocw.mit.edu/courses/5-112-principles-of-chemical-science-fall-2005/)</li>
                    </Typography>
                </Box>
            </Paper>
            </Box>
        </Box>
       
    );
}

export default SyllabusAndReference;
