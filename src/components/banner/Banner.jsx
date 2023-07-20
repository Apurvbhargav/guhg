
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://i2.wp.com/blogsmedia.lse.ac.uk/blogs.dir/9/files/2023/01/Written-LSE-Impact.jpg?ssl=1) center/55% repeat-x #000;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Post</Heading>
            <SubHeading>Unleash your emotions through poetic expression.</SubHeading>
        </Image>
    )
}

export default Banner;