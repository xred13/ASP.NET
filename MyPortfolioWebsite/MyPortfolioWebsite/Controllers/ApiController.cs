using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Json;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MyPortfolioWebsite.IoC;
using MyPortfolioWebsite.Models;

namespace MyPortfolioWebsite.Controllers
{

    public class AuthorizeTokenAttribute : AuthorizeAttribute
    {
        public AuthorizeTokenAttribute()
        {
            AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme;
        }
    }

    [Route("api")]
    public class ApiController : Controller
    {

        /// <summary>
        /// The scoped Application context
        /// </summary>
        protected ApplicationDbContext mContext;

        /// <summary>
        /// The manager for handling user creating, deletion, searching, roles, etc
        /// </summary>
        protected UserManager<ApplicationUser> mUserManager;

        /// <summary>
        /// The manager for handling signing in and out for our users
        /// </summary>
        protected SignInManager<ApplicationUser> msignInManager;

        public ApiController(ApplicationDbContext context, 
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            mContext = context;
            mUserManager = userManager;
            msignInManager = signInManager;
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

        [AuthorizeToken]
        [HttpPost]
        [Route("projects/add")]
        public void AddProject(ProjectDataModel project)
        {

            mContext.Projects.Add(project);

            mContext.SaveChanges();

        }

        [AuthorizeToken]
        [HttpPut]
        [Route("projects/edit/{id}/{property}/{data}")]
        public void EditProject(string id, string property, string data)
        {

            var result = mContext.Projects.Single(project => project.Id.Equals(id));

            result.GetType().GetProperty(property).SetValue(result, data, null);

            mContext.SaveChanges();
        }

        [AuthorizeToken]
        [HttpDelete]
        [Route("projects/delete/{id}")]
        public void DeleteProject(string id)
        {

            var result = mContext.Projects.Single(project => project.Id.Equals(id));

            mContext.Projects.Remove(result);

            mContext.SaveChanges();
        }


        /// <summary>
        /// Creates our single user for now
        /// </summary>
        /// <returns></returns>
        [HttpPut]
        [Route("create")]
        public async Task CreateUserAsync()
        {
            var result = await mUserManager.CreateAsync(new ApplicationUser
            {
                UserName = "xred13"
            }, "Password?1");

        }

        [HttpGet]
        [Route("signout")]
        public async Task SignOutAsync()
        {
            await HttpContext.SignOutAsync();
            HttpContext.Response.Cookies.Delete("Authorization");
        } 

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] UserInfo userInfo)
        {

            Console.WriteLine("Username: " + userInfo.username + " Password: " + userInfo.password);
            await HttpContext.SignOutAsync();

            var result = await msignInManager.PasswordSignInAsync(userInfo.username, userInfo.password, true, false);

            if (result.Succeeded)
            {
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                    new Claim(JwtRegisteredClaimNames.NameId, userInfo.username),
                };

                // Create the credentials used to generate the token
                var credentials = new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(IoCContainer.Configuration["Jwt:SecretKey"])),
                    SecurityAlgorithms.HmacSha256);

                // Generate the Jwt token
                var token = new JwtSecurityToken(
                    issuer: IoCContainer.Configuration["Jwt:Issuer"],
                    audience: IoCContainer.Configuration["Jwt:Audience"],
                    claims: claims,
                    signingCredentials: credentials,
                    expires: DateTime.Now.AddMonths(3)
                    );

                var jwtToken = new JwtSecurityTokenHandler().WriteToken(token);
                HttpContext.Response.Cookies.Append("Authorization",
                    "{'token':'"+jwtToken + "'}",
                    new CookieOptions()
                    {
                        Expires = DateTime.Now.AddMonths(3),
                        HttpOnly = true
                    });

                return Ok();
            }

            return null;

        }

        [AuthorizeToken]
        [Route("private")]
        public string Private()
        {
            return "Private page!";
        }
    }

    public class UserInfo
    {
        public string username;
        public string password;
    }

}
