using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace test.Controllers
{
    /// <summary>
    /// Manages the web api calls
    /// </summary>
    public class ApiController : Controller
    {
        [Route("api/login")]
        public IActionResult LogIn()
        {
            // TODO: Get users login information and check it is correct

            var username = "angelsix";
            var email = "contact@angelsix.com";

            // Set our token claims
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                new Claim(JwtRegisteredClaimNames.NameId, "unknownuser"),
                new Claim(JwtRegisteredClaimNames.Email, email),

                new Claim("my key", "my value"),

            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(IocContainer.Configuration["Jwt:SecretKey"]));

            // create the credentials used to generate the token
            var credentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(IocContainer.Configuration["Jwt:SecretKey"])),
                    SecurityAlgorithms.HmacSha256);

            // Generate the Jwt Token
            var token = new JwtSecurityToken(
                issuer: IocContainer.Configuration["Jwt:Issuer"],
                audience: IocContainer.Configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMonths(3),
                signingCredentials: credentials
                );

            // return token to user
            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }
    }
}
