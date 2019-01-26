using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace QueryStringInURL.Controllers
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

        [Route("demo2")]

        public IActionResult Demo2([FromQuery(Name = "id")] string id)
        {
            ViewBag.id = id;
            return View("Demo2");
        }

        [Route("demo3")]

        public IActionResult Demo3([FromQuery(Name = "id1")] int id1, [FromQuery(Name = "id2")] string id2)
        {
            ViewBag.id1 = id1;
            ViewBag.id2 = id2;
            return View("Demo3");
        }

        [Route("demo4")]

        public IActionResult Demo4()
        {
            var id1 = int.Parse(HttpContext.Request.Query["id1"].ToString());
            var id2 = HttpContext.Request.Query["id2"];

            ViewBag.id1 = id1;
            ViewBag.id2 = id2;

            return View("Demo4");
        }
    }
}