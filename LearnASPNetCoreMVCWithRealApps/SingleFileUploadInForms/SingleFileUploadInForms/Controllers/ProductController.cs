using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SingleFileUploadInForms.Models;

namespace SingleFileUploadInForms.Controllers
{
    [Route("product")]
    public class ProductController : Controller
    {
        [Route("")]
        [Route("index")]
        [Route("~/")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("save")]
        [HttpPost]
        public IActionResult Save(Product product, IFormFile photo)
        {
            if(photo == null || photo.Length == 0)
            {
                return Content("File not selected");
            }
            else
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(),"wwwroot/images", photo.FileName);
                using (FileStream stream = new FileStream(path, FileMode.Create))
                    photo.CopyToAsync(stream);
                product.Photo = photo.FileName;
            }
            ViewBag.product = product;
            return View("Success");
        }
    }
}