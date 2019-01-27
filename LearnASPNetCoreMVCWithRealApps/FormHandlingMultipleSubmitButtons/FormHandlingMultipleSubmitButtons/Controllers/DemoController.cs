using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace FormHandlingMultipleSubmitButtons.Controllers
{
    [Route("demo")]
    public class DemoController : Controller
    {
        [Route("")]
        [Route("index")]
        [Route("~/")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("Work1")]
        public IActionResult Work1()
        {
            return View("Work1");
        }

        [HttpPost]
        [Route("Work2")]
        public IActionResult Work2()
        {
            return View("Work2");
        }

        [HttpPost]
        [Route("Work3")]
        public IActionResult Work3()
        {
            return View("Work3");
        }
    }
}