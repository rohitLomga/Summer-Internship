
import { 
    Paper,
    MenuItem,
    Typography,
    TextField,
    Box,
    Button,
    styled,
    Stack,
    Avatar,
} from "@mui/material";

import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material'

import profileImage from './profile.png';

import VisibilityIcon from '@mui/icons-material/Visibility';
import MainMenuAndTopBar from "./MainMenuAndTopBar";
import SemesterYear from "./Semester";

const drawerWidth = 240; // Width of the drawer
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


function Programs(){
    return(
        <div>
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
                {/* Grid container to include your Select component */}
                
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
     

               <SemesterYear />

                <Paper sx={{marginTop: '10px'}}>
                    <TableContainer>
                        <Table aria-label="students table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center'}}>SLNO</TableCell>
                                    <TableCell>Course code</TableCell>
                                    <TableCell>Name of Course</TableCell>
                                    <TableCell>L</TableCell>
                                    <TableCell>T</TableCell>
                                    <TableCell>P</TableCell>
                                    <TableCell sx={{ textAlign: 'center'}}>Credit</TableCell>
                                    <TableCell sx={{ textAlign: 'center'}}>View</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {programsDetails.map((row,index) =>(
                                <TableRow 
                                key={index}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    backgroundColor: index % 2 === 0 ? '#E6E6ED' : 'transparent',
                                    padding: '0'
                                }}>
             
                                        <TableCell sx={{ textAlign: 'center'}}>{row.slno}</TableCell>
                                        <TableCell>{row.courseCode}</TableCell>
                                        <TableCell>{row.nameOfCourse}</TableCell>
                                        <TableCell>{row.l}</TableCell>
                                        <TableCell>{row.t}</TableCell>
                                        <TableCell>{row.p}</TableCell>
                                        <TableCell sx={{ textAlign: 'center'}}>{row.credit}</TableCell>
                                        <TableCell sx={{ textAlign: 'center'}}>{row.view}</TableCell>
                                    </TableRow>
                                ) )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                
                </main>

        </div>
    )
}

export default Programs;

const programsDetails = [
    {
        slno: 1,
        courseCode: 'SEPCT3030',
        nameOfCourse: 'Operating System',
        l: 3,
        t: 0,
        p: 0,
        credit: 3,
        view: <VisibilityIcon sx={{backgroundColor: 'white',padding: '3px', borderRadius: '9px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)', cursor: 'pointer'
        }} />
    },
    {
        slno: 2,
        courseCode: 'SEOEXXX',
        nameOfCourse: 'Open E lective M3',
        credit: 4,
        view: <VisibilityIcon sx={{backgroundColor: 'white',padding: '3px', borderRadius: '9px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)', cursor: 'pointer'
        }} />
    },
    {
        slno: 3,
        courseCode: 'SECPT',
        nameOfCourse: 'Application Security',
        l: 3,
        t: 0,
        p: 0,
        credit: 3,
        view: <VisibilityIcon sx={{backgroundColor: 'white',padding: '3px', borderRadius: '9px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)', cursor: 'pointer'
        }} />
    },
    // {

    //     l: <b>Total</b>,
    //     t: <b>Credit</b>,
    //     credit: <b>23</b>,
    // },
]

 