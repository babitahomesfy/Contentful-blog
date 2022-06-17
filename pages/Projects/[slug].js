import React from 'react'
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from "contentful";
import Header1 from '../../Component/Header1';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../Component/Footer';

const useStyles = makeStyles({
  
});

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'runwalGarden'
    })

    const paths = res.items.map(item => {return{
        params: {slug: item.fields.slug}
    }})
    return{
        paths,
        fallback:true
    }

    return{
        paths:paths
    }
  }

  export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'runwalGarden',
        'fields.slug' : params.slug
    })

    return{
        props: { project: items[0]},
        revalidate:1
    }
  }

export default function ProjectDetails({project}) {
    if(!project) return <div>Loading...</div>

    const{ projecttitle, description, slug, thumbnail, projectimage, projectdate, author} = project.fields
    return (
        <div>
            <Header1/>
            <div className="banner" style={{width:"100%"}}> 
                <Image
                    src={'https:' + projectimage.fields.file.url}
                    alt="Picture of the author"
                    width="1400"
                    height={projectimage.fields.file.details.image.height}
                />
            </div>
            <Box class="blogContent">
            <Typography gutterBottom variant="h5" component="h5">
          {projecttitle}
          </Typography>
            <div className="info">
            
            <Typography gutterBottom variant="p" component="p">{documentToReactComponents(description)}</Typography>
            </div>
            </Box>
            <Footer/>
        </div>
    )
}
