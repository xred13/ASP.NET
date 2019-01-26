using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace ReadValuesFromAppSettings.Controllers
{
    public class DemoController : Controller
    {
        public IActionResult Index()
        {
            var builder = new ConfigurationBuilder()
                                .SetBasePath(Directory.GetCurrentDirectory())
                                .AddJsonFile("appsettings.json");

            var configuration = builder.Build();
            ViewBag.result1 = configuration["Message"];
            ViewBag.result2 = configuration["MyConfigs:Config1"];
            ViewBag.result3 = configuration["MyConfigs:Config2"];
            ViewBag.result4 = configuration["MyConfigs:Config3"];
            ViewBag.result5 = configuration["Logging:Debug:LogLevel:Default"];

            return View();
        }
    }
}