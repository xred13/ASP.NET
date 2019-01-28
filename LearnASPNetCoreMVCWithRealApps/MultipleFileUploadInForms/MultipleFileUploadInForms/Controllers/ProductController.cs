using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MultipleFileUploadInForms.Models;

namespace MultipleFileUploadInForms.Controllers
{
    [Route("product")]
    public class ProductController : Controller
    {
        [Route("")]
        [Route("~/")]
        [Route("index")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("save")]
        [HttpPost]
        public async Task<IActionResult> Save(Product product, IFormFile[] photos)
        {
            if (photos == null || photos.Length == 0)
            {
                return Content("File(s) not selected");
            }
            else
            {
                product.Photos = new List<string>();
                foreach(IFormFile photo in photos)
                {
                    var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/Images", photo.FileName);
                    using (var stream = new FileStream(path, FileMode.Create))
                    {
                        await photo.CopyToAsync(stream);
                        product.Photos.Add(photo.FileName);
                    }


                }
            }

            ViewBag.product = product;
            return View("Success");
        }
    }
}