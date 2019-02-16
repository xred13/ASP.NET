using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyPortfolioWebsite.Models;

namespace MyPortfolioWebsite.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {

        /// <summary>
        /// The scoped Application context
        /// </summary>
        protected ApplicationDbContext mContext;

        public ApiController(ApplicationDbContext context)
        {
            mContext = context;
        }

        /// <summary>
        /// Api call that returns all projects of a certain type.
        /// </summary>
        /// <param name="projectType">ProjectType as a string which will be parsed into an enum</param>
        /// <returns></returns>
        [HttpGet]
        [Route("projects/get/{projectType}")]
        public IEnumerable<ProjectDataModel> GetProjects(string projectType)
        {

            //if (Enum.TryParse(projectType, out ProjectDataModel.ProjectTypes projectTypes))
            //{
            //    var projectsData = mContext.Projects.Where(project => project.ProjectType.Equals(projectTypes));

            //    return projectsData;
            //}

            //return null;

            return new List<ProjectDataModel> {
                new ProjectDataModel
                {
                    Id = Guid.NewGuid().ToString("N"),
                    Title = "Project0",
                    Description = "0's description",
                    ProjectType = ProjectDataModel.ProjectTypes.GameDevelopment,
                    Image = new byte[10]
                },
                new ProjectDataModel
                {
                    Id = Guid.NewGuid().ToString("N"),
                    Title = "Project1",
                    Description = "1's description",
                    ProjectType = ProjectDataModel.ProjectTypes.GameDevelopment,
                    Image = new byte[10]
                }
            };
        }

        [HttpPost]
        [Route("projects/add")]
        public void AddProject(ProjectDataModel project)
        {

            mContext.Projects.Add(project);

            mContext.SaveChanges();

        }

        [HttpPut]
        [Route("projects/edit")]
        public void EditProject(string id, string property, string data)
        {

            var result = mContext.Projects.Single(project => project.Id.Equals(id));

            result.GetType().GetProperty(property).SetValue(result, data, null);

            mContext.SaveChanges();
        }

        [HttpDelete]
        [Route("projects/delete/{id}")]
        public void DeleteProject(string id)
        {

            var result = mContext.Projects.Single(project => project.Id.Equals(id));

            mContext.Projects.Remove(result);

            mContext.SaveChanges();
        }

        [HttpGet]
        [Route("pages/{pageName}")]
        public string GetPageInfo(string pageName)
        {
            if (Enum.TryParse(pageName, out PagesDataModel.Pages page))
            {
                return mContext.Pages.Single(p => p.Page.Equals(page)).Text;
            }


            return null;
        }

        [HttpPut]
        [Route("pages/{pageName}/{pageData}")]
        public void EditPageInfo(string pageName, string pageData)
        {
            if(Enum.TryParse(pageName, out PagesDataModel.Pages page))
            {
                var result = mContext.Pages.Single(p => p.Page.Equals(page));

                result.Text = pageData;

                mContext.SaveChanges();
            }
        }
    }
}
