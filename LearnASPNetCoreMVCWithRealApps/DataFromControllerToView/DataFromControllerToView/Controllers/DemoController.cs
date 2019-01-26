using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DataFromControllerToView.Controllers
{
    public class DemoController : Controller
    {
        public IActionResult Index()
        {

            ViewBag.age = 20;
            ViewBag.fullName = "Kevin";
            ViewBag.status = true;
            ViewBag.price = 4.5;
            ViewBag.birthday = DateTime.Now;

            return View();
        }
    }
}