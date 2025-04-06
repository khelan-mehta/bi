import React from "react";
import MobileView from "../../../components/views/mobileView";
import DesktopView from "../../../components/views/desktopView";
import ProjectPage from "../../../components/projectDesktop";
import TabView from "../../../components/views/tabView";
import ProjectPageMobile from "../../../components/projectMobile";
import { projectDetails } from "../../../projectsDetails";


export async function generateStaticParams() {
  const projects = Object.keys(projectDetails);
 
  return projects.map((post) => {
    console.log(post.replaceAll(" ", "%20"));
    return {project: post.replaceAll(" ", "%20")}
  });
}

const ProjectPageCombined: React.FC<{
  params: { project: string }
}> = ({
  params,
}) => {

  const project =  params.project;
  console.log(project);
  return (
    <div className="">
      <MobileView>
        <ProjectPageMobile projectTitle={project} /> 
      </MobileView>
      <TabView>
        <ProjectPage projectTitle={project} />
      </TabView>
      <DesktopView>
        <ProjectPage projectTitle={project} />
      </DesktopView>
    </div>
  );
};

export default ProjectPageCombined;
