import Image from "next/image"
import Link from "next/link"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  
  });

export default function BlogCard({project}) {
    const{ projecttitle, description, slug, thumbnail, projectimage, projectdate, author} = project.fields

    const classes = useStyles();

    return (
        <>
        <Card className={classes.root}>
      <CardActionArea>
      <Image
        src={'https:' + thumbnail.fields.file.url}
        alt="Picture of the author"
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
      />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" disabled>
        {projectdate} / {author}
           </Typography>
          <Typography gutterBottom variant="h3" component="h3">
          {projecttitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href={'/Projects/' + slug}>
       <a> <Button size="small" style={{color:"white",backgroundColor:"#08090C"}}>
          Read More
        </Button></a>
        </Link>
      </CardActions>
    </Card>

        {/* <div className="card">
            
            <div className="projectImage">
                <Image
        src={'https:' + thumbnail.fields.file.url}
        alt="Picture of the author"
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
      />
            </div>
            <div className="projectDetails">
                <h4>{projectname}</h4>
                <p>this is project number {projectid}</p>
            </div>
            <div className="projectLink">
                <Link href={'/Projects/' + slug}><a>Read More</a></Link>
                
            </div>
        </div> */}
        </>
    )
}
