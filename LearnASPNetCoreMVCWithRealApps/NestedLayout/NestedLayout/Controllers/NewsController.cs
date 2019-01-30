using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NestedLayout.Controllers
{
    [Route("news")]
    public class NewsController : Controller
    {

        [Route("index")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("news1")]
        public IActionResult News1()
        {
            return View("News1");
        }

        [Route("news2")]
        public IActionResult News2()
        {
            return View("News2");
        }

        [Route("news3")]
        public IActionResult News3()
        {
            return View("News3");
        }
    }
}