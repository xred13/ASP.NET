﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Area.Controllers
{
    [Route("home")]
    public class HomeController : Controller
    {
        [Route("")]
        [Route("~/")]
        [Route("index")]

        public IActionResult Index()
        {
            return View();
        }
    }
}