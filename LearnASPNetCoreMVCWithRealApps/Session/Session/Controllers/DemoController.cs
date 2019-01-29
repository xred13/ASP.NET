using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Session.Helpers;
using Session.Models;

namespace Session.Controllers
{
    [Route("demo")]
    public class DemoController : Controller
    {
        [Route("")]
        [Route("~/")]
        [Route("index")]
        public IActionResult Index()
        {
            HttpContext.Session.SetInt32("age", 20);
            HttpContext.Session.SetString("username", "abc");

            Product product = new Product()
            {
                Id = "p01",
                Name = "Name 1",
                Price = 5
            };

            SessionHelper.SetObjectAsJson(HttpContext.Session, "product", product);

            List<Product> products = new List<Product>()
            {
                new Product()
                {
                    Id = "p01",
                    Name = "Name 1",
                    Price = 5
                },
                new Product()
                {
                    Id = "p02",
                    Name = "Name 2",
                    Price = 9
                },
                new Product()
                {
                    Id = "p03",
                    Name = "Name 3",
                    Price = 13
                }
            };
            SessionHelper.SetObjectAsJson(HttpContext.Session, "products", products);

            return View("Index");
        }


    }
}