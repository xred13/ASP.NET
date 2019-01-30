using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NestedLayout.Controllers
{
    [Route("aboutus")]
    public class AboutUsController : Controller
    {

        [Route("index")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("about1")]
        public IActionResult About1()
        {
            return View("About1");
        }

        [Route("about2")]
        public IActionResult About2()
        {
            return View("About2");
        }
    }
}