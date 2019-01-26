using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ObjectFromControllerToView.Models;

namespace ObjectFromControllerToView.Controllers
{
    public class DemoController : Controller
    {
        public IActionResult Index()
        {

            Product product = new Product()
            {
                Id = "p01",
                Name = "defaultname",
                Price = 2.1,
                Quantity = 3
            };

            ViewBag.product = product;
            return View();
        }
    }
}