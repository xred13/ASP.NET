using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Layout.Controllers
{
    [Route("news")]
    public class NewsController : Controller
    {
        [Route("index")]
        public IActionResult Index()
        {
            return View();
        }
    }
}