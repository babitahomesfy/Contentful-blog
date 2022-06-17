import { createClient } from "contentful"
import Header1 from "../Component/Header1"
import BlogCard from "../Component/BlogCard"
import ProjectHome from "../Component/ProjectHome"
import Footer from "../Component/Footer";
import { Box } from '@mui/system';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const allRes = await client.getEntries({content_type: 'runwalGarden'})
  return {
     props: { 
       totalArticles: allRes.items 
      },
      revalidate:1
    };
}
export default function Home({totalArticles}) {
  console.log(totalArticles)
  return (
    <>
    {/* <ProjectHome/> */}
    <Header1/>
      <Box className="project_title">
      <h3>LATEST POST</h3>
      </Box>
      <div className="project_list">
          {
            totalArticles.map(
              project => (
              <div key="project.sys.id">
                <BlogCard key={project.sys.id} project={project}/>
                </div>
                ))}
      </div>
      <Footer/>
    </>
  );
}
