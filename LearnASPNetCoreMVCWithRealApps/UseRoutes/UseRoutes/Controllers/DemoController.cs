using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace UseRoutes.Controllers
{
    public class DemoController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Demo2(string message)
        {
            ViewBag.message = message;
            return View("Demo2");
        }
    }
}