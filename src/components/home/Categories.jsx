
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled,Typography, colors } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
        background:#99ffff;
    border: 8px solid rgba(224, 224, 224, 1);
`;
    
const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    
    background: #6495ED;
    color: #fff;
    text-decoration: none;
    
`;
    
const StyledLink = styled(Link)`
font-size:20px;
    text-decoration: none;
    color: #993300;
`;

const Chead = styled(Typography)`

     background:#990000;
     color:white;
     height:40px;
     text-align:center;
     font-size:25px;
     font-weight:bold;

      


`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Post</StyledButton>
            </Link>
            
            <StyledTable>
                <TableHead>
                    <Chead>CATEGORIES</Chead>
                
                    <TableRow>
                        <TableCell>
                        
                            <StyledLink to={"/"}>
                                All Categories
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;